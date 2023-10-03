interface SearchBoxProps {
  description?: string;
  acronym?: string;
  email?: string;
}
export default function SearchBox({
  description = "",
  acronym = "",
  email = "",
}: SearchBoxProps) {
  return (
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
            value={description}
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
            value={acronym}
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
            value={email}
          />
        </div>
      </div>
    </div>
  );
}
