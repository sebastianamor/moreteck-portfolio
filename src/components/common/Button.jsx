import "./Button.css";


function Button({children, secondary=false}){

return (

<button 
className={secondary ? "mt-button secondary" : "mt-button"}
>

{children}

</button>

);

}


export default Button;