import { Switch } from "./ui/switch";

const Header = () => {
  const handleThemeChange = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between p-2">
      <h1 className="logo">LinkStream</h1>
      <Switch className="bg-accent" onCheckedChange={handleThemeChange} />
    </div>
  );
};

export default Header;
