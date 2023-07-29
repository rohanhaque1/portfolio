import { Typewriter } from "react-simple-typewriter";

const Intro_Title = () => {
  const message = [
    "Front-end Developer",
    "MERN Stack Developer",
    "React Developer",
    "Web Designer",
  ];

  return (
    <div className="space-y-5">
      <div>
        <h4 className="italicFont text-lg font-medium">Hey! its me,</h4>
        <h2 className="text-4xl font-extrabold">Rohan Haque</h2>
        <h3 className="text-xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-500">
            <Typewriter
              words={message}
              loop={true}
              cursor={true}
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
      </div>
      <p className="text-sm text-gray-500">
        I can provide clean code and pixel perfect design. I also make website
        more & more interactive with web animations.
        I can provide clean code and pixel perfect design. I also make website
        more & more interactive with web animations.
      </p>
    </div>
  );
};

export default Intro_Title;
