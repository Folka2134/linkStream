import { groups } from "@/lib/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useGroup } from "@/hooks/useGroup";

const Nav = () => {
  const { setSelectedGroup } = useGroup();

  return (
    <div className="flex h-full w-24 justify-center">
      <ul className="mt-5 flex flex-col gap-2">
        {groups.map((group) => (
          <TooltipProvider key={group.id}>
            <Tooltip>
              <TooltipTrigger onClick={() => setSelectedGroup(group.name)}>
                <img src={group.image} alt={group.name} className="h-10 w-10" />
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <p>{group.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
