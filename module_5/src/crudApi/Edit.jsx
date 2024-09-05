import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

import axios from 'axios';

function Edit() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        username: '',
       
    });
useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/${id}")
            .then(response => {
                setFormData({
                    title: response.data.title,
                    username: response.data.username.toString(),
                   
                });
            })
            .catch(error => console.error(error.message));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        axios.patch("https://jsonplaceholder.typicode.com/users/${id}", {
            title: formData.title,
            username: formData.username,
            
        })
        .then(response => {
            console.log('Product updated:', response.data);
          
        }) 
        .catch(error => console.error(error.message));
    };

    return (
        <div><form action="#" onSubmit={handleEdit}>
    <input type="text" onChange={handleInputChange}
       name='username'     placeholder=" Name or Search…" /><SearchIcon/><br />
<input type="text" onChange={handleInputChange}
       name='title'   placeholder="email" />
            <br />
    
    <button type="submit" ><EditIcon/></button>
    </form></div>
    );
}

export default Edit;