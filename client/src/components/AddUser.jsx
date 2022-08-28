import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { addUser } from '../service/api'
import {useNavigate} from"react-router-dom"

const Container = styled(FormGroup)`

width:50%;

margin:20px auto 20px auto;
& > div {
   margin-top:20px;
}

)
`



const AddUser = () => {

  const [data,setData]=useState({
    name:"",
    username:"",
    email:"",
    phone: ""
  
  })

  const navigate=useNavigate()

const adduserHandler=async ()=>{



await addUser(data)

navigate("/all")





}

  console.log(data)
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>setData({...data,name:e.target.value})} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>setData({...data,username:e.target.value})} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>setData({...data,email:e.target.value})} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>setData({...data,phone:e.target.value})} />
      </FormControl>
      <FormControl>
       <Button variant="contained" onClick={adduserHandler}>
        Add User
       </Button>
      </FormControl>

    </Container>
  );
};

export default AddUser;
