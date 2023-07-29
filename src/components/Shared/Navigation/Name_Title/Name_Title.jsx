import Theme from "../Theme/Theme";

const Name_Title = () => {
  return (
    <div className="flex justify-between items-center mx-8 md:mx-20 my-4">
      <h2 className="customFont bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-pink-700 text-3xl">
        Rohan haque
      </h2>
      <Theme />
    </div>
  );
};

export default Name_Title;
