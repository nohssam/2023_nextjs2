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
        axios.post(
            API_URL, null,
            { params:{m_id:uvo.m_id, m_pw:uvo.m_pw}}
        ).then(json => {
            if(json.data.data.success){
                alert(json.data.data.message);
                // 쿠키에 사용자 정보를 저장하자
                setCookie('u_name',json.data.data.data.m_name, {maxAge:60*60}); // 1시간 
                // router를 사용하면 화면의 내용이 변하지 않는다.
                // router.push("/");
                location.href="/";
            }else{
                alert(json.data.data.message);   
                return;           
            }
        });
    };
    return(
    <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} src="/broken-image.jpg"/>
                    <TextField type='text' label='ID' name='m_id' fullWidth  onChange={changeUvo}/>
                    <TextField type='password' label='PW' name='m_pw' fullWidth onChange={changeUvo}/>
                    <Button fullWidth variant='contained' onClick={login}>Sign in</Button>
                </Stack>
            </FormControl>
      </div>
    );
}