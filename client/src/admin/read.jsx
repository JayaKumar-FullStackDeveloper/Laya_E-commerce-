import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function UsersList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/getalluser` )
      .then((result) => {
        console.log(result);
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

const handleOnDelete = (id)=>{
  console.log(id , "Deleted Id");//
  axios.delete(`http://localhost:4000/deleteById/${id}` )
  .then((result) => {
    console.log(result);
    console.log(result.data.message);
    const filterdata = data.filter((e)=> e._id !== id)
    setData(filterdata)
    
  })
  .catch((err) => {
    console.log(err);
  });
}

  return (
    <>
      <div className="bg-gray-100 p-10 h-screen w-dvw">
        <div className="container mx-auto">
          <div className='flex justify-between text-center'>
            <h1 className="text-3xl font-bold mb-6">User Information Table</h1>
            <Link to={"/userregistration"}>
              <button className="text-blue-500 hover:text-blue-700">
                Create
              </button>
            </Link>
          </div>

          <table className="min-w-full bg-white mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Id</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">userName</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Email</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Phone Number</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Password</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td className="py-2 px-4 border-b border-gray-200 text-left">{d._id}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-left">{d.userName}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-left">{d.email}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-left">{d.phoneNumber}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-left">{d.password}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-left">
                    <Link to={`/update/${d._id}`}>
                      <button className="text-blue-500 hover:text-blue-700 pr-4">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>
                    <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => handleOnDelete(d._id)}>
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
  );
}

export default UsersList;
