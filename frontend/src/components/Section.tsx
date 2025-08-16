import Cards from "./Cards";

const Section = () => {
  return (
    <div className="w-full  bg-gray-900 pt-5">
      <h1
        className="ml-8 text-white font-bold text-2xl"
        style={{ fontFamily: "Montserrat " }}
      >
        Weekly
        <span className="text-pink-500"> Top</span>
      </h1>

      <div className="ml-3 overflow-x-auto  snap">
        <div className="flex gap-4 py-4">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Section;
