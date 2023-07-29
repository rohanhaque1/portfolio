import { CiHome, CiUser } from "react-icons/ci";
import { BsInfoCircle, BsGraphUpArrow } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

const Nav_menu = () => {
  return (
    <>
      <div className="w-full md:w-8 bg-pink-900 bg-opacity-75 text-white my-auto p-3 rounded-t-2xl md:rounded-full shadow-2xl fixed bottom-0 md:left-0 md:bottom-1/4 z-20">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <CiHome size={22} />
          <BsInfoCircle size={22} />
          <GiSkills size={22} />
          <BsGraphUpArrow size={22} />
          <BiMessageRounded size={22} />
          <CiUser size={22} />
        </div>
      </div>
    </>
  );
};

export default Nav_menu;
