var language = navigator.language.split('-')[0];

if ((String(langs).indexOf(language+":")) == -1) {
    language = "en";
}

//language = "it" // debugging
