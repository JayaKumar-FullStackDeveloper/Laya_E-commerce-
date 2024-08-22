import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function Customer() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${apiUrl}/user`)
      .then((result) => {
        setData(result.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [apiUrl])


  const handeleOnDelete = (id) => {
    const confirmDelete = window.confirm("Do you sure to Delete?");
    if (confirmDelete) {
      axios.delete(`${apiUrl}/user/${id}`)
        .then((result) => {
          alert("Record Deleted Sucessfully!",result)

          axios.get(`${apiUrl}/user`)
            .then((result) => {
              setData(result.data);
            }).catch((err) => {
              console.log(err);
            });
        })
        .catch((err) =>
          console.log('Error on Deleting:', err)
        );
    }
  };
  const [searchQuery, setSearchQuery]= useState("")
  const handleSearch = (e)=>{
    setSearchQuery(e.target.value);
  }

  const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("Fillter", filteredData);
  


  return (
    <>
      <div className="bg-gray-100 p-10 fixed m-2 h-screen">
        <div className="container mx-auto">
          <div className='flex justify-between text-center'>
          <h1 className="text-3xl font-bold mb-6">User List</h1>
          <Link to={"/"}><button className="text-blue-500 hover:text-blue-700 ">
            Create
          </button>
          </Link>
          </div>
          <div className="relative">
        <input type="text" className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." value={searchQuery} onChange={handleSearch}  />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.9 14.32a7.5 7.5 0 1 1 1.42-1.42l4.38 4.38a1 1 0 0 1-1.42 1.42l-4.38-4.38zm-6.4-5.82a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" clipRule="evenodd"></path>
            </svg>
        </div>
    </div>
        
          <table className="min-w-full bg-white mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray text-left">Id</th>
                <th className="py-2 px-4 border-b-2 border-gray text-left">Name</th>
                <th className="py-2 px-4 border-b-2 border-gray text-left">Email</th>
                <th className="py-2 px-4 border-b-2 border-gray text-left">Phone Number</th>
                <th className="py-2 px-4 border-b-2 border-gray text-left">Password</th>
                <th className="py-2 px-4 border-b-2 border-gray text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.map((d, i) => (
                <tr key={i}>
                  <td className="py-2 px-4 border-b border-gray- text-left">{d.id}</td>
                  <td className="py-2 px-4 border-b border-gray- text-left">{d.name}</td>
                  <td className="py-2 px-4 border-b border-gray- text-left">{d.email}</td>
                  <td className="py-2 px-4 border-b border-gray- text-left">{d.phoneNumber}</td>
                  <td className="py-2 px-4 border-b border-gray- text-left">{d.password}</td>
                  <td className="py-2 px-4 border-b border-gray- text-left">
                    <Link to={`/edit/${d.id}`}><button className="text-blue-500 hover:text-blue-700 pr-4">
                      <FontAwesomeIcon icon={faEdit} />
                    </button></Link>
                    <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => handeleOnDelete(d.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default Customer;