import { Switch } from "./ui/switch";

const Header = () => {
  const handleThemeChange = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between p-2">
      <h1 className="logo">
        {/* <img
          src="/assets/images/link_stream_transparent.png"
          className="h-20 w-20"
        /> */}
        Link Stream
      </h1>
      <Switch className="bg-accent" onCheckedChange={handleThemeChange} />
    </div>
  );
};

export default Header;
