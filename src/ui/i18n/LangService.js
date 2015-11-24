'use strict';
let tags = require('language-tags');

/**
 * Angular language service
 *
 * For language tags, see
 *
 * @ngInject
 */
let NpolarLang = function($location, $log, $rootScope, npolarTranslateDictionary) {

  this.langName = require('./lang-name.json');

  // Get default/fallback language from html@lang
  this.fallback = document.documentElement.getAttribute('lang') || 'en';

  // Available languages
  this.languages = [this.fallback];

  // http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
  // http://publications.europa.eu/mdr/authority/language/index.html
  // http://standard.difi.no/forvaltningsstandarder/referansekatalogen-html-versjon/#Publisering
  // http://standard.difi.no/filearchive/spraakkoder-presentasjon.pdf
  // Bokmål: nb (ISO 639-1)
  // Nynorsk: nn (ISO 639-1)
  // Nordsamisk: se (ISO 639-1)
  // Lulesamisk: smj (ISO 639-2)
  // Sørsamisk: sma (ISO 639-2)
  // Finsk: fi (ISO 639-1)
  // Kvensk: fkv (ISO 639-3)
  //
  // @return [Array] List of known* language subtags (* known by the application)
  this.getLanguages = function() {
    return this.languages;
  };

  // Counts number of texts in a given language in the current dictionary
  // @return [Object] Example: {"nb":7,"en":7,"ru":1,"eo":1,"nn":1}
  this.getLanguageCounts = function() {
    var l = {};

    npolarTranslateDictionary.forEach(d => {
      d.texts.forEach(text => {

        if (!l[text['@language']]) {
          l[text['@language']] = 1;
        } else {
          l[text['@language']]++;
        }
      });
    });
    return l;
  };

  // @return [Array] List of language names
  this.getLanguageNames = function() {
    return this.langName;
  };

  // Set new language, this involves
  // * broadcast "npolar-lang" to root scope
  // * persisting "NpolarLang" key to local storage
  // * updating location search parameter (?lang={lang})
  // * updating HTML@lang
  this.setLang = function(lang, was = null) {
    if (lang !== this.getLang()) {
      if (tags.language(lang.split('-')[0])) {

        $rootScope.$broadcast('npolar-lang', {
          lang, name: this.getNativeName(lang)
        });
        localStorage.setItem('NpolarLang', lang);
        $location.search(Object.assign($location.search(), {
          lang
        }));
        document.documentElement.setAttribute('lang', lang);

      } else {
        $log.warn(`Invalid language: ${lang}`);
      }

    }
  };

  this.setLanguages = function(arr) {
    this.languages = arr;
  };

  // setLanguagesFromDictionaryUse({ min: 0.25, force: ['en', 'nb', 'nn']);
  this.setLanguagesFromDictionaryUse = function(opt) {
    if (!opt) {
      opt = {};
    }
    let min = opt.min || 0;
    let force = opt.force || [];

    let langCount = this.getLanguageCounts();
    let languages = Object.keys(langCount).sort().filter(l => {
      if (force.includes(l)) {
        return false; // filter out forced to avoid duplicates (we add forced below)
      }
      return (langCount[l] / npolarTranslateDictionary.length > min);
    });
    languages = force.concat(languages).sort();
    this.setLanguages(languages);

  };

  // Get current language
  this.getLang = function() {
    let lang = localStorage.getItem('NpolarLang');

    // 1. From local storage (meaning the user has actively picked this language)
    if (lang) {
      return lang;

      // 2. Or from URI, if present
    } else if ($location.search().lang) {
      return $location.search().lang;

      // 3. Fallback (default is html@lang)
    } else {
      return this.fallback;
    }
  };

  // @todo handle language hierarchy (macrolanguage) and fallback hierarchy based on that
  this.getFallback = function(lang, alternatives) {
    let fallback = this.fallback;
    alternatives = alternatives.map(a => a.split('-')[0].toLowerCase());
    if (/^n(o|b|n)/i.test(lang)) {
      if (alternatives.includes('nn')) {
        return 'nn';
      } else if (alternatives.includes('nb')) {
        return 'nb';
      } else if (alternatives.includes('no')) {
        return 'no';
      }
    }
    return fallback;

  };

  // @return [String] Native name of lang tag
  this.getNativeName = function(lang, names = this.getLanguageNames()) {
    lang = lang.split('-')[0];
    if (names && names[lang]) {
      return names[lang].name;
    } else {
      return lang;
    }

  };

  return this;
};

module.exports = NpolarLang;
