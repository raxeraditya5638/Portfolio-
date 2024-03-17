import React from "react";

const CallAction = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-[2vw] font-bold text-center text-black">
            Headquarters personnel
          </h2>
          <h3 className="my-4 text-[1.4vw] text-black">
            Report to command center. Take it easy.
          </h3>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">
            Report
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallAction;
