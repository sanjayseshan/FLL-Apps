var language = navigator.language.split('-')[0];

if ((String(langs).indexOf(language+":")) == -1) {
    language = "en";
}

// Uncomment below to enable language debugging
//language = "el";
