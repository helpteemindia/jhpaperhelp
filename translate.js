function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'hi',
    includedLanguages: 'hi,en,sat', // Hindi, English, Santhali
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
