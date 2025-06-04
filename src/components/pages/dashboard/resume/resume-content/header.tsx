import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Copy, Download, Home, Trash } from "lucide-react";
import Link from "next/link";


type NavigationHeaderProps = {
  title: string;
};

export const NavigationHeader = ({ title }: NavigationHeaderProps) => {


  return (
    <header className="absolute w-full left-0 top-0 z-10 p-2 bg-background border-b border-muted flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Tooltip content="Back to dashboard">
          <Link href="/dashboard/resumes" passHref>
            <Button
              variant="secondary"
              className="w-8 h-8 bg-transparent"
              size="icon"
            >
              <Home size={18} />
            </Button>
          </Link>
        </Tooltip>

        <span className="text-muted-foreground">/</span>

        <p className="text-lg font-title font-bold ml-1">{title}</p>
      </div>

      <div className="flex gap-1">

        <Tooltip content="Download PDF">
          <Button
            variant="secondary"
            className="w-8 h-8 bg-transparent"
            size="icon"
            onClick={() => console.log('Download PDF clicked') /* Implement download functionality here */ }
          >
            <Download size={18} />
          </Button>
        </Tooltip>
      </div>
    </header>
  );
};