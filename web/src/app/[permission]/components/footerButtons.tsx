import SearchIcon from "@mui/icons-material/Search";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FileOpenIcon from "@mui/icons-material/FileOpen";

interface FooterButtonsProps {
  handleSearch: () => void;
  handleClear: () => void;
  handleNewData: () => void;
}
export default function FooterButtons({
  handleSearch,
  handleClear,
  handleNewData,
}: FooterButtonsProps) {
  return (
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
  );
}
