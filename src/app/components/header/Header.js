import Image from "next/image";
import logo from '/public/images/logo.jpg';
import login from '/public/images/login.png';
import join from '/public/images/join.png';
import './header.css';
import Link from "next/link";
export default function Header() {
    return(
        <ul id="header">
            <li><Link href="/"> <Image src={logo} alt="" /></Link></li>
            <li><Link href="/login"><Image src={login} width={50} height={50} alt="" /></Link></li>
            <li><Link href="/join"><Image src={join} width={50} height={50} alt="" /></Link></li>
        </ul>
    );
}