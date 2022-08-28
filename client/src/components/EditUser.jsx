import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";

import React from "react";
import { useState } from "react";
import {getUser ,editUser} from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Container = styled(FormGroup)`
  
  width:50%;
  
  margin:20px auto 20px auto;
  & > div {
     margin-top:20px;
  }
  
  )
  `;
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [data, setData] = useState(defaultValue);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);

    setData(response.data);
    console.log(response.data);
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editUserHandler = async () => {
    await editUser(data,id);

    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
        value={data.name || ""}
        
          name="name"
          onChange={(e) => onValueChange(e)}
          
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
        
          name="username"
          value={data.username || ""}
          onChange={(e) => onValueChange(e)}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
         
          name="email"
          value={data.email || ""}
          onChange={(e) => onValueChange(e)}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
       
          name="phone"
          value={data.phone || ""}
          onChange={(e) => onValueChange(e)}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={editUserHandler}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
