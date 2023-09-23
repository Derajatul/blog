import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <nav className="container mx-auto max-w-5xl px-4 pt-[71px] pb-[56px] flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/dera-avatar.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="text-lg">Dera</h3>
      </div>

      <ModeToggle />
    </nav>
  );
};
export default Nav;
