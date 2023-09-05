"use client"
import Image from "next/image";
import logo from '/public/images/logo.jpg';
import login from '/public/images/login.png';
import join from '/public/images/join.png';
import './header.css';
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { Button } from "@mui/material";

export default function Header() {
    const u_name = getCookie('u_name');
     return(
        <>
            {getCookie('u_name')&&(
            <ul id="header">
                <li><Link href="/"> <Image src={logo} alt="" /></Link></li>
                <p>{u_name}님<br /> 환영합니다.</p>
                <li><Button size="small" onClick={()=>{
                    deleteCookie('u_name');
                    location.href="/";
                }}> 로그아웃 </Button></li>
            </ul>
           )} 

           {! getCookie('u_name')&&(
            <ul id="header">
                <li><Link href="/"> <Image src={logo} alt="" /></Link></li>
                <li><Link href="/login"><Image src={login} width={50} height={50} alt="" /></Link></li>
                <li><Link href="/join"><Image src={join} width={50} height={50} alt="" /></Link></li>
            </ul>
           )} 

           

        </>
    );
}