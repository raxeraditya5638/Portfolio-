import CallAction from "@/pages/CallAction";
import Features from "@/pages/Features";

const Herochild = () => {
  return (
    <div className="px-5">
      <div className=" bg-cover bg-no-repeat bg-fixed mx-auto my-auto">
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-[5vw] sm:text-[2vw] font-bold mb-2 text-black">
            Learn DSA To Create Generative Ai
          </h2>
          <h3 className="text-[4vw] sm:text-[1.5vw] mb-8 text-gray-800 capitalize">
            Learn about dsa to learn about data science and machile learning to
            create a own projucts and learn more how generative ai works.
          </h3>
          {/* <button className="bg-white font-bold rounded-full sm:py-1 sm:px-1 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">
            Generative Ai
          </button> */}
        </div>
      </div>

      <Features />

      <CallAction />
    </div>
  );
};

export default Herochild;
