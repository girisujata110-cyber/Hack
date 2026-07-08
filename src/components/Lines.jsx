import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
Navbar
const Lines = () => {
  const [data, setData] = useState([]);

  const getchdata = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/quotes");
      setData(res.data.quotes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getchdata();
  }, []);

  return (
    
    <div className="flex flex-wrap gap-4 p-4 bg-gradient bg-fuchsia-200">
    <table className="">
        <thead className="">
            <tr className="border p-2> ID">
                <tr className="border p-2>firstName">
                    <tr className="border p-2>lastName">

                    </tr>

                </tr>

            </tr>
        </thead>
        {data.map((Lines) =>(
            <tr key={Lines.id} className="text-center">
                <td classsName="border p-2>{Lines.ID}">
                    <td>
                        <td className="border p-2>{Lines.firstName}">

                        </td>
                        <td className="border p-2{Lines.lastName}">

                        </td>
                    </td>
                </td>


            </tr>

        ))}

        
    </table>
        
        </div>
      
    
  );
};

export default Lines;