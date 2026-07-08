import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Other = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap gap-4 p-4 bg-gradient bg-fuchsia-200">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-64 border rounded-lg p-4 shadow"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-40 object-cover"
          />

          <h2 className="font-bold text-xl mt-2">
            {item.title}
          </h2>

          <p className="text-green-600 font-semibold">
            ${item.price}
          </p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Other;