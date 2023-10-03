"use client";

import { useSearchParams } from "next/navigation";
import SearchBox from "./components/searchBox";
import FooterButtons from "./components/footerButtons";

export default function Admin() {
  const searchParams = useSearchParams();

  const user = searchParams.get("user");
  return (
    <div className="flex flex-col w-full items-center">
      <SearchBox />
      <FooterButtons />
    </div>
  );
}
