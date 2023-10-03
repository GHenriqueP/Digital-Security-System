"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UsersProps {
  id: number;
  name: string;
}

export default function Home() {
  const [selected, setSelected] = useState("");
  const [users, setUsers] = useState<UsersProps[]>([] as UsersProps[]);
  const { push } = useRouter();

  async function getData() {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/`);

      if (!data.ok) {
        console.error("Internal Server Error");
        return;
      }

      const users = await data.json();

      setUsers(users);
    } catch (err) {
      console.error(err);
    }
  }

  function handleSelectUser(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(event.target.value);
  }

  function handleRedirectSubmit() {
    if (selected) {
      push(`/${selected.replace(" ", "-")}`);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col pt-40">
      <h1 className="text-5xl mb-10 font-bold">Login</h1>

      <select
        name="users"
        id="users"
        onChange={handleSelectUser}
        className="border-solid border-2 rounded-xl p-2 w-64 h-10"
      >
        <option value="">default</option>
        {users?.map(({ id, name }) => (
          <option key={`${id}`} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={handleRedirectSubmit}
        disabled={!selected}
        className="bg-slate-200 p-4 rounded-full mt-4"
      >
        Manter Sistema
      </button>
    </div>
  );
}
