import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center gap-3 w-[405px] h-10 px-4 pl-3 border border-[#E0E0E0] bg-white rounded-lg">
      <Search className="h-6 w-6 text-[#828282]" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 text-base text-[#828282] bg-transparent border-none outline-none placeholder:text-[#828282]"
      />
    </div>
  );
}
