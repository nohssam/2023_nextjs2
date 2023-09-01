// import './login.css'
"use client"
import { Button, FormControl,  Stack, TextField, Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const API_URL = "/member/login";
    const [uvo, setUvo] = useState({
            m_id:'',
            m_pw:'',
    });
    function changeUvo(e){
        setUvo({
            ...uvo,
            [e.target.name]: e.target.value
        });
    };

    function login(){
        //console.log(uvo.email+"/"+uvo.pwd);
        axios.post(
            API_URL, null,
            { params:{m_id:uvo.m_id, m_pw:uvo.m_pw}}
        ).then(json => {
            if(json.data.chk === 0)
                router.push("/");
            else{
                setCookie('u_name',json.data.mvo.m_name, { maxAge: 60 * 60 });// 3600은 1시간
                //router.push("/");
                location.href="/";
            }
        })
    };
    return(
    <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} src="/broken-image.jpg"/>
                    <TextField label='Email' name='아이디' fullWidth autoFocus onChange={changeUvo}/>
                    <TextField type='password' label='패스워드' name='m_pw' fullWidth onChange={changeUvo}/>
                    <Button fullWidth variant='contained' onClick={login}>Sign in</Button>
                </Stack>
            </FormControl>
      </div>
    );
}