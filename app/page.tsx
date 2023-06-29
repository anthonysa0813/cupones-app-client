"use client"; //
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import toast, { Toaster } from "react-hot-toast";
import { saveRegisterCoupon } from "./utils/apis";

interface FormI {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  store: string;
  typeDocument: string;
  numberDocument: string;
  cuopon: string;
}

const HomePage = () => {
  const [form, setForm] = useState<FormI>({} as FormI);
  const notifyWarning = () => toast.error("Existe un campo vacío");
  const {
    cuopon,
    email,
    lastName,
    name,
    numberDocument,
    phone,
    store,
    typeDocument,
  } = form;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      [
        cuopon,
        email,
        lastName,
        name,
        numberDocument,
        phone,
        store,
        typeDocument,
      ].includes("")
    ) {
      console.log("hay un campo vacio");
      notifyWarning();
      return;
    }
    const result = await saveRegisterCoupon(form);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Toaster />
      </div>
      <form className="p-10 rounded-2xl bg-white" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-center mb-10">
          Registra tu cupón
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombres
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              name="name"
              // required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Vargas"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              name="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label
              htmlFor="typeDocument"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccione el tipo de documento
            </label>
            <select
              id="typeDocument"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="typeDocument"
              onChange={handleChange}
            >
              <option value="DNI">DNI</option>
              <option value="C.EXTRANJERIA">C.Extranjeria</option>
              <option value="PASAPORTE">Pasaporte</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="numberDocument"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Número de documento
          </label>
          <input
            type="tel"
            id="numberDocument"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="12212211"
            name="numberDocument"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="store"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Selecciona la tienda
          </label>
          <select
            id="store"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="store"
            onChange={handleChange}
          >
            <option value="tienda 1">Tienda 1</option>
            <option value="tienda 2">Tienda 2</option>
            <option value="tienda 3">Tienda 3</option>
            <option value="tienda 4">Tienda 4</option>
            <option value="tienda 5">Tienda 5</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@gmail.com"
            required
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="cuopon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cupón
          </label>
          <input
            type="text"
            id="cuopon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-sky-500"
            required
            name="cuopon"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <Image
            src={logo}
            alt={"Logo de CrediVargas"}
            height={100}
            width={150}
            className=""
          />
        </div>
      </form>
    </div>
  );
};

export default HomePage;
