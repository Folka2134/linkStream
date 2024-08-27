import { useGroup } from "@/hooks/useGroup";
import Group from "./Group";
import DirectMessage from "./DirectMessage";

const ActiveWindow = () => {
  const { selectedGroup } = useGroup();

  return (
    <div className="w-full rounded-tl-xl bg-secondary p-3">
      {selectedGroup === "Direct Messages" ? (
        <DirectMessage />
      ) : (
        <Group name={selectedGroup} />
      )}
    </div>
  );
};

export default ActiveWindow;
