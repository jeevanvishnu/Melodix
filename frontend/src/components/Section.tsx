import Cards from "./Cards";
import './Section.css'
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

      <div className="card-section ml-3 overflow-x-scroll" >
        <div className="flex gap-4 py-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Section;
