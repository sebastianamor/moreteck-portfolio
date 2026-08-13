import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";


function LanguageSelector(){

const { i18n } = useTranslation();


const changeLanguage=(language)=>{

i18n.changeLanguage(language);

};


return(

<div className="language-selector">


<button
onClick={()=>changeLanguage("ja")}
>
🇯🇵
</button>


<button
onClick={()=>changeLanguage("en")}
>
🇺🇸
</button>


<button
onClick={()=>changeLanguage("es")}
>
🇨🇱
</button>


</div>

);


}


export default LanguageSelector;