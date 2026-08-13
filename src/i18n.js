import i18n from "i18next";

import {
initReactI18next
} from "react-i18next";


import ja from "./locales/ja/translation.json";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";


i18n

.use(initReactI18next)

.init({

resources:{

ja:{
translation:ja
},

es:{
translation:es
},

en:{
translation:en
}

},


lng:"ja",

fallbackLng:"ja",


interpolation:{
escapeValue:false
}


});


export default i18n;