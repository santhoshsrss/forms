import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const userApi = 'https://jsonplaceholder.typicode.com/users'

const SearchItem = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    useEffect(() => {
        axios.get(userApi)
        .then(res => {
            setData(res.data)
            setSearch(res.data)
        })
        .catch(err => console.log(err));
    }, []) 

    const Filter = (event)=>{
        setSearch(data.filter(filter => filter.name.toLowerCase().includes(event.target.value)))
    } 


  return (
    <div className='p-5 bg-light'>
        <input type="text" 
           placeholder='search here' className='form-control' onChange={Filter}/>
        <div className='bg-white shadow border'>
            <table className='table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {search.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>        
    </div>
  )
}

export default SearchItem