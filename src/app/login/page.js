// import './login.css'
"use client"
import { Button, FormControl, InputLabel, Stack,
       OutlinedInput, TextField, Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
//     const router = useRouter();
//     const API_URL = "/member/login";
//     const [uvo, setUvo] = useState({
//         email:'',
//         pwd:''
//     });
//     function changeUvo(e){
//         setUvo({
//             ...uvo,
//             [e.target.name]: e.target.value
//         });
//     };

//     function login(){
//         //console.log(uvo.email+"/"+uvo.pwd);
//         axios.post(
//             API_URL, null,
//             { params:{ user_id:uvo.email, user_pw:uvo.pwd }}
//         ).then(json => {
//             if(json.data.chk === 0)
//                 router.push("/pages/login");
//             else{
//                 //console.log(json.data.mvo.m_name);
//                 // setCookie('u_name',json.data.user.user_name, { maxAge: 60 * 60 });// 3600은 1시간
//                 setCookie('u_name',json.data.mvo.m_name, { maxAge: 60 * 60 });// 3600은 1시간
//                 //router.push("/");
//                 location.href="/";
//             }
//         })
//    };
    return(
        <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} src="/broken-image.jpg"/>
                
                <TextField label='Email' name='email' autoComplete='email' 
                    fullWidth autoFocus/>
                
                <TextField type='password' label='Password' name='pwd' autoComplete='pwd' 
                    fullWidth/>
                
                <Button fullWidth variant='contained'>Sign in</Button>
                </Stack>
            </FormControl>
        </div>
        
    // <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
    //         <FormControl>
    //             <Stack direction="column" spacing={1} alignItems='center'>
    //             <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} src="/broken-image.jpg"/>
    //             
    //             <TextField label='Email' name='email' autoComplete='email' 
    //                 fullWidth autoFocus onChange={changeUvo}/>
    //             
    //             <TextField type='password' label='Password' name='pwd' autoComplete='pwd' 
    //                 fullWidth onChange={changeUvo}/>
    //             
    //             <Button fullWidth variant='contained' onClick={login}>Sign in</Button>
    //             </Stack>
    //         </FormControl>
    //         </div>
    );
}