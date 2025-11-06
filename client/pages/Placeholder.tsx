import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 border-b border-[#E0E0E0] bg-white flex items-center justify-between px-20">
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        <Link to="/">
          <Button className="bg-black hover:bg-black/90 text-white rounded-lg px-4 h-10">
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-md space-y-4">
          <h2 className="text-3xl font-semibold text-black">{title}</h2>
          <p className="text-base text-[#828282]">
            {description || `This is a placeholder for the ${title} page. Continue prompting to build out this section.`}
          </p>
          <Link to="/">
            <Button className="mt-6 bg-black hover:bg-black/90 text-white rounded-lg px-6 h-10">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
