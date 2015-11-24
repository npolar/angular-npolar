# Internationalization (i18n) 

Simple i18n component that provides translations from a code dictionary

* Easy-to use translation filter: {{ 'some.prefix.code' | t }}
* Auto-detection of application's language
* Automatic fallback to alternative language if translation is missing
* Supports any official IANA language (subtag)
* Language switcher directive
* Dictionary may be loaded as array of translation documents (database and JSON schema friendly)

# Loading dictionary

## From Text API
```javascript
myAngularApp.run(($http, NpolarLang, NpolarTranslate) => {
  $http.get('//api.npolar.no/text/?q=&filter-bundle=npolar|npdc|npdc-myapp&format=json&variant=array&limit=all').then(response => {
    NpolarTranslate.addToDictionary(response.data);
    NpolarLang.setLanguages(['en', 'nb', 'nn']);
    // Advanced alternative
    // NpolarLang.setLanguagesFromDictionaryUse({ min: 0.50, force: ['en', 'nb', 'nn']});
  });
  
  
});
```

## From value object

```javascript
myAngularApp.run(($http, NpolarLang, NpolarTranslate, myLinkedDataDictionary) => {
    NpolarTranslate.setDictionary(myLinkedDataDictionary);
    NpolarLang.setLanguagesFromDictionaryUse();
  });
});
```