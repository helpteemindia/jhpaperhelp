function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'hi',
    includedLanguages: 'hi,en,bn,or,ta,te,kn,gu,mr,pa',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
