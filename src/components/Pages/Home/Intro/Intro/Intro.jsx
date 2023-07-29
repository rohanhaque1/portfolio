import Intro_Title from "../Intro_Title/Intro_Title";
import Social_Media from "../Social_Media/Social_Media";

const Intro = () => {
  return (
    <div className="h-screen my-10 space-y-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="w-full">
          <img
            src="/src/assets/Rohan.jpg"
            className="w-full h-80 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="space-y-10 md:col-span-2">
          <Intro_Title />
          <Social_Media />
        </div>
      </div>
    </div>
  );
};

export default Intro;
