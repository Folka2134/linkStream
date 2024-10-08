import { useGroup } from "@/hooks/useGroup";
import Group from "./Group";
import DirectMessage from "./DirectMessage";

const ActiveWindow = () => {
  const { selectedGroup } = useGroup();

  return (
    <div className="w-full">
      {selectedGroup === "Direct Messages" ? (
        <DirectMessage />
      ) : (
        <Group name={selectedGroup} />
      )}
    </div>
  );
};

export default ActiveWindow;
