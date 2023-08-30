import Image from "next/image";
import logo from '/public/images/logo.jpg';
import login from '/public/images/login.png';
import join from '/public/images/join.png';
import './header.css';
export default function Header() {
    return(
        <ul id="header">
            <li><Image src={logo} alt="" /></li>
            <li><Image src={login} width={50} height={50} alt="" /></li>
            <li><Image src={join} width={50} height={50} alt="" /></li>
        </ul>
    );
}