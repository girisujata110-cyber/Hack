import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash,WalletCards } from 'lucide-react';
const Users = () => {
  const [data, setData] = useState([]);
  const[message, setMessage]= useState(0);
const increase= ()=>{
  
setMessage(message+1)
}
  const getchdata = async () => {
    try {
      const ns = await axios.get("https://dummyjson.com/users");
      setData(ns.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getchdata();
    console.log("run vayo");
    
  }, [message]);

  return (
    <div className="p-4 text-center">
     {message}
      <button onClick={increase} >
           increase
          </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-fuchsia-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.firstName}</td>
              <td className="border p-2">{user.lastName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.age}</td>
              <td className="border p-2"> <p className="flex"><p><Trash className="text-red-500" /></p> <p><WalletCards className="text-blue-400" /></p></p></td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Users;