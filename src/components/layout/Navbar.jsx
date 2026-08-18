import Logo from "../common/Logo";
import LanguageSelector from "../common/LanguageSelector";
import "./Navbar.css";


function Navbar(){

return(

<header className="navbar">

    <Logo />

    <nav className="nav-links">

    <a href="#home">
        Home
    </a>

    <a href="#about">
        About
    </a>

    <a href="#labs">
        Labs
    </a>

    <a href="#journal">
        Journal
    </a>

    <a href="#contact">
        Contact
    </a>

</nav>


    <LanguageSelector />

</header>

)

}


export default Navbar;