import { MagnifyingGlass } from "@medusajs/icons";

const InputSearch = () => {
  return (
    <label
      className="flex items-center justify-center space-x-1"
      htmlFor="search"
    >
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlass className="w-5 h-5 text-primary" />
        </span>
        <input
          type="search"
          placeholder="Search Here..."
          className="block  pl-10 pr-3 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 bg-secondary focus:ring-primary "
          name="search"
          id="search"
        />
      </div>
    </label>
  );
};

export default InputSearch;
