import axios from "axios";
import { useEffect, useState } from "react"
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
//import { Add } from "./Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';




export const CrudOpration = () => {
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState({
    username: "",
    title: ""
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data));
  }, []);

  function handleDlt(id) {
    let data1 = data.filter(i => i.id !== id);
    setData(data1);
  }

  function handleSearch(e) {
    const { name, value } = e.target;
    setSearchdata(prevState => ({
      ...prevState,
      [name]: value.toLowerCase()
    }));
  }

  function saveData(e) {
    e.preventDefault();
    const newEntry = { id: (data.length + 1), username: searchdata.username, email: searchdata.title };
    setData(prevData => [...prevData, newEntry]);
  }
console.log(data);

  
  let filteredData = data.filter(i =>
    i.username.toLowerCase().includes(searchdata.username) &&
    i.email.toLowerCase().includes(searchdata.title)
  );

  
  let displayData = searchdata.username || searchdata.title ? filteredData : data;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Api Crud
          </Typography>
        </Toolbar>
      </AppBar>

      <form action="#" onSubmit={saveData}>
        <input
          type="text"
          onChange={handleSearch}
          name='username'
          placeholder="Name or Search…" /><SearchIcon /><br />
        <input
          type="text"
          onChange={handleSearch}
          name='title'
          placeholder="Email" />
        <br />
        <button type="submit"><AddIcon /></button>
      </form>

      <table border={"2"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map(i => (
            <tr key={i.id}>
              <td>{i.username}</td>
              <td>{i.email}</td>
              <td>
                <button><EditIcon /></button>
                <button onClick={() => handleDlt(i.id)}><DeleteIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
