"use client";
import React, { useEffect, useState } from "react";
import TableList from "../components/TableList";
import { CuponI } from "../interfaces";
import { generateExcelFile } from "../utils/generateXlsx";

const CuponesPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://cupona-app-server-production.up.railway.app/api/v1/cupon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cupons);
        setData(data.cupons);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  // const getInfo = async () => {
  //   try {
  //     console.log(`${process.env.NEXT_PUBLIC_DB_URL}cupon`);
  //     const response = await fetch(`http://localhost:5050/api/v1/cupon`);
  //     const data = await response.json();
  //     return data.cupons;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const downloadFile = () => {};

  return (
    <div className="h-screen overflow-y-auto ">
      <div className="container flex justify-between mx-auto mt-10">
        <h1>Cupones</h1>
        <div className="">
          <button onClick={() => generateExcelFile(data)}>
            descargar cupones
          </button>
        </div>
      </div>
      <main>
        <div className="container mx-auto mt-10">
          <TableList cupones={data} />
        </div>
      </main>
    </div>
  );
};

export default CuponesPage;
