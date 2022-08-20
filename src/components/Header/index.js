// == IMPORTS ==
import logo from "../../assets/images/logo-github.png";
import './header.scss';

export default function Header() {
    return (
        <header className="app-header">
            <img src={logo} alt="Github logo" />
        </header>
    );
}