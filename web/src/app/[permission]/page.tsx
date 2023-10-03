"use client";

import SearchIcon from "@mui/icons-material/Search";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FileOpenIcon from "@mui/icons-material/FileOpen";

import SearchBox from "./components/searchBox";

import { useState } from "react";

interface CompanyProps {
  id: number;
  userId: number;
  description: string;
  acronym: string;
  email: string;
  url: string;
  modJustify: string;
  isActive: boolean;
}

export default function Admin() {
  const [formData, setFormData] = useState({
    description: "",
    acronym: "",
    email: "",
  });
  const [company, setCompany] = useState<CompanyProps[]>([] as CompanyProps[]);

  async function handleSearch() {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/systems?description=${formData.description}&acronym=${formData.acronym}&email=${formData.email}`
      );

      if (!data.ok) {
        console.error("Internal Server Error");
        return;
      }

      const companyData = await data.json();
      setCompany(companyData);
    } catch (err) {
      console.error(err);
    }
  }

  function handleClear() {
    setFormData({
      description: "",
      acronym: "",
      email: "",
    });
    setCompany([]);
  }

  async function handleNewData() {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/system`, {
        method: "POST",
        body: JSON.stringify({
          acronym: formData?.acronym,
          description: formData?.description,
          email: formData?.email,
          url: "http://localhost:3001/",
          userId: 1,
        }),
      });

      alert("Dados Cadastrados com Sucesso");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full max-w-5xl border-2 border-gray-300 rounded-md p-4 mt-6">
        <h1 className="bg-white px-2 ml-5 text-green-600 font-bold mt-[-28px] w-fit">
          Filtro de consulta
        </h1>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col md:flex-row w-full justify-between gap-6">
            <label
              htmlFor="description"
              className="block text-gray-600 border-b w-full"
            >
              Descrição
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="border border-gray-300 rounded-md p-2 w-[600px]"
              onChange={(event) => {
                setFormData({ ...formData, description: event.target.value });
              }}
              value={formData?.description}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between gap-6">
            <label
              htmlFor="acronym"
              className="block text-gray-600 border-b w-full"
            >
              Sigla
            </label>
            <input
              type="text"
              id="acronym"
              name="acronym"
              className="border border-gray-300 rounded-md p-2 w-[600px]"
              value={formData?.acronym}
              onChange={(event) => {
                setFormData({ ...formData, acronym: event.target.value });
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between gap-6">
            <label
              htmlFor="email"
              className="block text-gray-600 border-b w-full"
            >
              Email de Atendimento do Sistema
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 w-[600px]"
              value={formData?.email}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-[60px] bg-slate-300 justify-end items-center pr-4 mt-6 space-x-4">
        <button
          type="button"
          className="flex items-center bg-slate-200 p-4 rounded-full space-x-2 w-min h-9"
          onClick={handleSearch}
        >
          <p className="flex-grow text-green-700 font-bold">Pesquisar</p>
          <SearchIcon />
        </button>
        <button
          type="button"
          className="flex items-center bg-slate-200 p-4 rounded-full space-x-2 w-min h-9"
          onClick={handleClear}
        >
          <p className="flex-grow text-green-700 font-bold">Limpar</p>
          <FileOpenIcon />
        </button>
        <button
          type="button"
          className="flex items-center bg-slate-200 p-4 rounded-full space-x-2 w-auto h-9"
          onClick={handleNewData}
        >
          <p className="flex-grow text-green-700 font-bold">Novo Sistema</p>
          <NoteAddIcon />
        </button>
      </div>

      {company.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Sigla
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Descrição
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                email
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Ativo
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                url
              </th>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                modJustify
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
            {company.map(
              (
                { acronym, description, email, isActive, url, modJustify },
                index
              ) => (
                <tr key={index}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {acronym}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {description}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {email}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {isActive}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {url}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {modJustify}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
