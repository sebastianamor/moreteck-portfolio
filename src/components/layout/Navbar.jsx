import Logo from "../common/Logo";
import LanguageSelector from "../common/LanguageSelector";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {

  const { t } = useTranslation();

  return (

    <header className="navbar">

      <Logo />

      <nav className="nav-links">

        <a href="#home">
          {t("navbar.home")}
        </a>

        <a href="#about">
          {t("navbar.about")}
        </a>

        <a href="#labs">
          {t("navbar.labs")}
        </a>

        <a href="#journal">
          {t("navbar.journal")}
        </a>

        <a href="#contact">
          {t("navbar.contact")}
        </a>

      </nav>

      <LanguageSelector />

    </header>

  );
}

export default Navbar;