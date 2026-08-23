import {useState} from "react";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import BootScreen from "./components/BootScreen/BootScreen";
import Footer from "./components/common/Footer";

function App(){

const [loading,setLoading]=useState(true);


return(

<>


{
loading ?

<BootScreen finish={()=>setLoading(false)}/>

:

<>

<Navbar />
<Home />
<Footer />

</>

}


</>

)

}


export default App;