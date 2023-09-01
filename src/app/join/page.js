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
          { params:{m_id:uvo.m_id, m_pw:uvo.m_pw} }
      ).then(data=> {           
           console.log(data);
           alert(data.data.id + ","+data.data.pw)
      })

    }

    return(
         <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
                 <FormControl>
                     <Stack direction="column" spacing={1} alignItems='center'>
                     <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} src="/broken-image.jpg"/>
                     
                     <TextField label='아이디' name='m_id' autoComplete='email' 
                         fullWidth autoFocus onChange={changeUvo}/>
                     
                     <TextField type='password' label='패스워드' name='m_pw' autoComplete='pwd' 
                         fullWidth onChange={changeUvo}/>
                     
                     <Button fullWidth variant='contained' onClick={goServer}>Sign in</Button>
                     </Stack>
                 </FormControl>
           </div>
    );
}