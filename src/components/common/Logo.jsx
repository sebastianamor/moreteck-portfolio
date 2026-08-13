import { motion } from "framer-motion";


function Logo(){

return(

<motion.div

className="logo"

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

>


<div className="logo-code">

{"< MT /> ;)"}

</div>


<h1>

MORETECK

</h1>


<p>

Moreira Technologies

</p>


</motion.div>

)

}


export default Logo;