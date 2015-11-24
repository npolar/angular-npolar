# Internationalization (i18n) 

Simple i18n component that provides translations from a code dictionary

* Easy-to use translation filter: {{ 'some.code' | t }}
* Auto-detection of application's language
* Supports any official IANA language (subtag)
* Language switcher directive
* Dictionary consists of array of translations documents, JSON schema friendly


# Loading dictionary from Text API

```javascript
myAngularApp.run(($http, npolarTranslateDictionary, NpolarLang, NpolarTranslate) => {
  
  // Load text dictionary
  $http.get('//api.npolar.no/text/?q=&filter-bundle=npolar|npdc|npdc-dataset&format=json&variant=array&limit=all').then(response => {
    npolarTranslateDictionary = response.data;
    NpolarTranslate.setDictionaryArray(npolarTranslateDictionary);
  });
  
  // Alternative, using Text -> ngResource
  //Text.array({ q:'', fields: 'code,texts', 'filter-bundle': 'npolar|npdc|npdc-myapp', limit: 'all', variant: 'array'}, dictionary => {
  //  npolarTranslateDictionary = dictionary;
  //  NpolarTranslate.setDictionaryArray(npolarTranslateDictionary);
  //});
  
  NpolarLang.setLanguagesFromDictionaryUse({ min: 0.50, force: ['en', 'nb', 'nn']});
  
});

```
