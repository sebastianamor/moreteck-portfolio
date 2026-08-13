import {useState} from "react";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import BootScreen from "./components/BootScreen/BootScreen";

function App(){

const [loading,setLoading]=useState(true);


return(

<>


{
loading ?

<BootScreen finish={()=>setLoading(false)}/>

:

<>

<Navbar/>

<Home/>

</>

}


</>

)

}


export default App;