import { useEffect, useState } from "react";
import "./BootScreen.css";


function BootScreen({finish}){


const [text,setText] = useState([]);

const messages = [

"> Initializing MoreTeck System...",

"[✓] Loading Web Lab",

"[✓] Loading Game Lab",

"[✓] Loading Scratch Lab",

"[✓] Loading Developer Journal",

"",

"SYSTEM READY",

"< M T /> ;)"

];


useEffect(()=>{


let index = 0;


const interval = setInterval(()=>{


setText(prev => [
...prev,
messages[index]
]);


index++;


if(index === messages.length){

clearInterval(interval);


setTimeout(()=>{

finish();

},1200);


}


},500);



return ()=>clearInterval(interval);


},[]);



return(

<div className="boot-screen">


<div className="terminal">


{text.map((line,index)=>(

<p key={index}>
{line}
</p>

))}


</div>


</div>

);


}


export default BootScreen;