import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { getUsers,deleteUser } from "../service/api";
import { Link,useNavigate } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background-color: #000000;
  & > th {
    color: white;
    font-size: 20px;
  }
`;
const TableRowStyled = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const navigate=useNavigate()

  const getAllUsers = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };
 
  const deleteuser=async (id)=>{
    console.log("api called")
    await deleteUser(id);
getAllUsers()
  }

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user,_id) => {
          return (
            <TableRowStyled key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:"30px"}}  component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color="secondary"onClick={()=>deleteuser(user._id)}>Delete</Button>
              </TableCell>
            </TableRowStyled>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
