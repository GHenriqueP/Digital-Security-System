import SearchIcon from "@mui/icons-material/Search";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FileOpenIcon from "@mui/icons-material/FileOpen";

export default function FooterButtons() {
  return (
    <div className="flex w-full h-[60px] bg-slate-300 justify-end items-center pr-4 mt-6 space-x-4">
      <button
        type="button"
        className="flex items-center bg-slate-200 p-4 rounded-full space-x-2 w-min h-9"
      >
        <p className="flex-grow text-green-700 font-bold">Pesquisar</p>
        <SearchIcon />
      </button>
      <button
        type="button"
        className="flex items-center bg-slate-200 p-4 rounded-full space-x-2 w-min h-9"
      >
        <p className="flex-grow text-green-700 font-bold">Limpar</p>
        <FileOpenIcon />
      </button>
      <button
        type="button"
        className="flex items-center bg-slate-200 p-4 rounded-full space-x-2 w-auto h-9"
      >
        <p className="flex-grow text-green-700 font-bold">Novo Sistema</p>
        <NoteAddIcon />
      </button>
    </div>
  );
}
