import { FaDownload } from "react-icons/fa";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const Social_Media = () => {
  return (
    <div className="space-y-2">
      <div className="relative inline-flex group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a>
          <button className="relative inline-flex items-center justify-center gap-2 p-2 text-xs font-semibold text-white transition-all duration-200 bg-slate-700 font-pj rounded-lg focus:outline-none">
            <FaDownload /> Download Resume
          </button>
        </a>
      </div>
      <p className="">Find me on</p>
      <div className="flex items-center gap-3">
        <BsLinkedin className="bg-slate-700 text-white p-2 rounded-full" size={36} />
        <BsGithub className="bg-slate-700 text-white p-2 rounded-full" size={36} />
        <BsFacebook className="bg-slate-700 text-white p-2 rounded-full" size={36} />
      </div>
    </div>
  );
};

export default Social_Media;
