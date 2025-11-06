import { MoreHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <div className="h-16 border-b border-[#E0E0E0] bg-white flex items-center justify-between px-20">
      <h1 className="text-xl font-semibold tracking-tight">Dashboard app</h1>
      
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="icon"
          className="bg-[#EEE] hover:bg-[#E0E0E0] rounded-lg"
        >
          <MoreHorizontal className="h-6 w-6" />
        </Button>
        
        <Button className="bg-black hover:bg-black/90 text-white rounded-lg px-4 h-10">
          Share
        </Button>
        
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f3f2c9e4d5b67c936095e6f0b0169168087a38a8?width=80"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown className="h-6 w-6 text-[#828282]" />
        </div>
      </div>
    </div>
  );
}
