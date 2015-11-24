# i18n

Internationalization (i18n) component

# Fetaures
* Provides translations from an injectable code dictionary
* Easy-to use translation filter: {{ 'some.prefix.code' | t }}
* Auto-detection and persistence of application's language
* Automatic fallback to alternative language if translation is missing
* Supports any official IANA language (subtag)
* Language switcher directive
* Dictionary may be loaded as array of translation documents (database and JSON schema friendly)
* JSON-LD style multilingual translation objects

# Use

## Translation filter
Pass text to translate to the `t` filter 
```
  {{ 'npdc.app.Title' | t }}
```
## Language switcher directive

```
   <npolar:language-switcher></npolar:language-switcher>
```
Limit available languages
myAngularApp.run(NpolarLang => {
  
  // Fixed list of languages in the switcher
  NpolarLang.setLanguages(['en', 'nb', 'nn']);
  
  // Advanced alternatives
  
  // Require minimum 50% of texts translated, but provide some fixed languages no matter
  // NpolarLang.setLanguagesFromDictionaryUse({ min: 0.50, force: ['en', 'nb', 'nn']});
  
  // Allow all languages in the dictionary
  // NpolarLang.setLanguagesFromDictionaryUse();
  
});

## Loading dictionary

### From Text API
```javascript
myAngularApp.run(($http, NpolarLang, NpolarTranslate) => {
  $http.get('//api.npolar.no/text/?q=&filter-bundle=npolar|npdc|npdc-myapp&format=json&variant=array&limit=all').then(response => {
    NpolarTranslate.addToDictionary(response.data);
  });
});
```

### From value object

Supports JSON-LD style multilingual translation object

```javascript

let ldd = { code: 'http://npolar.no', texts: [
  { "@value": "Norsk Polarinstitutt", "@language": "no" },
  { "@value": "Norwegian Polar Institute", "@language": "en" }
]
}
myAngularApp.value('myLinkedDataDictionary', ldd);


myAngularApp.run((NpolarLang, NpolarTranslate, myLinkedDataDictionary) => {
    NpolarTranslate.setDictionary(myLinkedDataDictionary);
    
  });
});
```