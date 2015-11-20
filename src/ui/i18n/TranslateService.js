'use strict';

let tags = require('language-tags');
/**
 * Angular translation service
 *
 * Provides translations from a code dictionary
 */

// @ngInject
let NpolarTranslate = function($location, $log, npolarTranslateDictionary, NpolarLang) {

  // Normalize array of translations to JSON-LD array of objects with @language and @value keys 
  let normalizeTranslations = function(translations, valuekey='@value', langkey='@language') {
    // Any translations?
    if (translations && translations.length > 0) {
    // Make sure all the matching candidate texts contain the right keys
    return translations.filter(cand => cand[valuekey] && cand[langkey]).map(
    text => {
      return { '@language': text[langkey], '@value': text[valuekey], context: text.context };
    });
    }
    return false;
  };
  
  // Normalize dictionary array to dictionary object
  let normalizeDictionary = function(dictionary=npolarTranslateDictionary, lookupkey='code', translationskey='texts') {
    let dict = {};

    dictionary.forEach(t => {
      dict[t[lookupkey]] = normalizeTranslations(t[translationskey]);
    });
    
    return dict;
  };
  
  // Normalize/decorate value
  this.normalizeValue = function(value,lang,code) {
    if ($location.search().debug === '1') {
      return code+'|'+lang+'='+value;
    }
    return value;
  };

  // Normalized dictionary 
  this.dictionary;
  
  //
  this.getDictionary = function() {
    return this.dictionary;
  };
  
  this.setDictionaryArray = function(dictionary) {
    this.dictionary = normalizeDictionary(dictionary);
  };
  
  // Find first translation document, by looking up code in dictionary
  // @param [String] code
  // @return [Array|false] Normalized translation array (all @language versions)
  this.find = function(code, dictionary=this.getDictionary()) {
    if (dictionary && dictionary instanceof Object && dictionary[code]) {
      return dictionary[code];
    }
    return false;
  };
  
  // Translates a string by selecting texts matching the lookup code and language tag,
  // Sibling languages (sharing the same macrolanguage) is used if the there is match for code but not the exact language. 
  // This function *always* returns a string, even if the code is not found, see #missing
  // @param [String] code
  // 
  // @return [String] Translation of code into language identified by subtag lang (context) 
  this.translate = function(code, lang=NpolarLang.getLang(), normalize=this.normalizeValue) {
    // Find texts by code, get translations by language, normalize
    let texts;
    if (texts = this.find(code)) {
      let value = this.value(texts, lang, code);
      return normalize(value, lang, code);
    } else {
      // No matches
      $log.warn('NpolarTranslate', '0 translations:', code);
      return code;
    }
  };
  
  // Reduce array of translation objects to a single value ie. the translated string
  // @return [String] Translation
  // @recursive WARNING
  this.value = function(translations, lang, code, fallbackLang=NpolarLang.getFallback(lang, translations.map(t => t['@language']))) {
  
    // First try the provided lang tag
    let exactLangMatch = translations.find(cand => cand['@language'].split('-')[0] === lang.split('-')[0]);
    if (exactLangMatch) {
      return exactLangMatch['@value'];
    } else {
      // No exact match, get fallback translations, ie. those NOT in the requested lang
      let fallbacks = translations.filter(cand => cand['@language'].split('-')[0] !== lang.split('-')[0]);
      if (fallbacks.length === 1) {
        // Just 1 match, deliver
        return fallbacks[0]['@value'];
      } else if (fallbackLang !== false) {
        // Multiple callbacks, reduce by calling self        
        return this.value(fallbacks, fallbackLang, code);
      } else {
        throw new Error("No translation found translation array:", translations);
      }
    }
  };
  return this;
};

module.exports = NpolarTranslate;