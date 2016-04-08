'use strict';

let L = require('leaflet');
let EsriLeaflet = require('esri-leaflet');
let Proj4Leaflet = require('proj4leaflet');

// Injects esri and Proj4Leaflet plugins into Leaflet's L
L.esri = EsriLeaflet;
L.Proj = Proj4Leaflet;

require('leaflet-fullscreen');
L.Icon.Default.imagePath = '/assets/images';

let NpolarEsriLeaflet = function($http) {
  'ngInject';

  let self = this;

  this.element = 'npolar-esri-leaflet-map'; // The map's html element @id

  this.base = '//geodata.npolar.no/arcgis/rest/services';

  // @return instance of Proj4Leaflet CRS (L.Proj.CRS)
  this.crsFactory = function(uri) {
    let crs;
    let path = uri.split(`${self.base}`)[1];

    if (path === `/Basisdata_Intern/NP_Nordomraadene_WMTS_25833/MapServer`) {
      crs = self.UTM_33N_CRS();

    } else if (path === `/inspire1/NP_TopoArktis_UPSN_CLX/MapServer`) {
      crs = self.UPSN_CRS();

    } else {
      console.debug('EPSG:4326 <- '+uri);
      crs = new L.Proj.CRS("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
    }
    console.debug(crs);
    $http.get(this.base + path).then(r =>  {
      console.log(r);
    }, error => {
      crs = null;
      console.log(error);
    });
    return crs;
  };

  // Polar stereographic north / WGS84
  // Projection definition for EPSG:32661 from http://epsg.io/32661.js
  // Resolutions from the tileInfo in https://geodata.npolar.no/arcgis/rest/services/inspire1/NP_TopoArktis_UPSN_CLX/MapServer?f=json
  this.UPSN_CRS = function() {
    return new L.Proj.CRS(
      'EPSG:32661',
      '+proj=stere +lat_0=90 +lat_ts=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs ',
      {
        transformation: new L.Transformation(1, 5120900, -1, 9998100),
        resolutions: [
          21674.7100160867,
          10837.35500804335,
          5418.677504021675,
          2709.3387520108377,
          1354.6693760054188,
          677.3346880027094,
          338.6673440013547,
          169.33367200067735,
          84.66683600033868,
          42.33341800016934
        ]
      }
    );
  };

  // UTM zone 33N / ETRS89
  // Projection definition for EPSG:25833 from http://epsg.io/25833.js
  this.UTM_33N_CRS = function() {
    return new L.Proj.CRS(
      'EPSG:25833',
      '+proj=utm +zone=33 +ellps=GRS80 +units=m +no_defs',
      {
        transformation: new L.Transformation(1, 5120900, -1, 9998100),
        resolutions: [
          2709.3387520108377,
          1354.6693760054188,
          677.3346880027094,
          338.6673440013547,
          169.33367200067735,
          84.66683600033868,
          42.33341800016934,
          21.16670900008467,
          10.583354500042335,
          5.291677250021167,
          2.6458386250105836,
          1.3229193125052918,
          0.6614596562526459,
          0.33072982812632296,
          0.16536491406316148
        ]
      }
    );
  };

  this.esriBaseUri = function() {
    return `${self.base}/inspire1/NP_TopoArktis_UPSN_CLX/MapServer`;
  };

  this.tileLayerFactory = function(esriBase = self.esriBaseUri(), config = {
    url: esriBase,
    maxZoom: 7,
    minZoom: 2,
    continuousWorld: true,
    attribution: null }) {

    return new L.esri.tiledMapLayer(config);
  };

  this.mapFactory = function(esriBase = self.esriBaseUri(), mapConfig={
      attributionControl: true,
      scrollWheelZoom: true,
      fullscreenControl: true,
      crs: self.crsFactory(esriBase)
    }, tileLayerConfig = undefined) {

    let map = new L.Map(self.element, mapConfig);
    map.addLayer(self.tileLayerFactory(esriBase, tileLayerConfig));
    map.setView([80, 0], 3);

    return map;
  };

  return this;
};

module.exports = NpolarEsriLeaflet;
