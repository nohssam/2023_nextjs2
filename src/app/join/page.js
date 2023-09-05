"use client"
import { Button, FormControl,  Stack, TextField, Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Join() {
    const router = useRouter();
    const API_URL = '/member/join';
    const [uvo, setUvo] = useState({
      m_id:"",
      m_pw:"",
      m_name:"",
      m_age:"",
  });

  function changeUvo(e){
    setUvo({
        ...uvo,
        [e.target.name]:e.target.value
    });
  };

    const goServer = () => {
      axios.post(
          API_URL, null,
          { params:{m_id:uvo.m_id, m_pw:uvo.m_pw, m_name:uvo.m_name, m_age:uvo.m_age} }
      ).then(json=> {           
        if(json.data.data.success){
          alert(json.data.data.message);
          router.push("/login");
        }else{
          alert(json.data.data.message);   
          return;           
         }            
      })
    }
    return(
         <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
                 <FormControl autocomplete="off">
                     <Stack direction="column" spacing={1} alignItems='center'>
                        <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} src="/broken-image.jpg"/>
                        <TextField type='text' label='아이디' name='m_id'  onChange={changeUvo}/>
                        <TextField type='password' label='패스워드' name='m_pw'  onChange={changeUvo}/>
                        <TextField type='text' label='이  름' name='m_name'  onChange={changeUvo}/>
                        <TextField type='number' label='나  이' name='m_age'  onChange={changeUvo}/>
                        <Button fullWidth variant='contained' onClick={goServer}>join</Button>
                     </Stack>
                 </FormControl>
           </div>
    );
}