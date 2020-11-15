import highlight from './highlight';
import defaultStyle from './styles/hljs/default-style';
import lowlight from 'lowlight';
import supportedLanguages from './languages/hljs/supported-languages';
const externalLanguages = require('../external-languages-hljs');

externalLanguages.forEach(definition => {
  const languageModule = require(definition.module);
  if (languageModule.definer) {
    lowlight.registerLanguage(definition.language, languageModule.definer());
  } else {
    const hljsDefinition = languageModule(lowlight);
    if (hljsDefinition) {
      lowlight.registerLanguage(definition.language, hljsDefinition);
    }
  }
});

const highlighter = highlight(lowlight, defaultStyle);
highlighter.supportedLanguages = supportedLanguages;

export default highlighter;
