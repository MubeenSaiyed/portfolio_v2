import React from "react";

function DisplayParts() {
  return (
    <>
      <section className=" hidden md:flex fixed top-0  w-screen min-h-screen bg-greyLight">
        <div className="w-col-1 border-[#e8e8e8] border-r"></div>
        <div className="w-col-2 border-[#e8e8e8] border-r"></div>
        <div className="w-col-1 border-[#e8e8e8] border-r"></div>
        <div className="w-col-2 border-[#e8e8e8] border-r"></div>
        <div className="w-col-4 border-[#e8e8e8] border-r"></div>
        <div className="w-col-1 border-[#e8e8e8] border-r"></div>
        <div className="w-col-1"></div>
      </section>
      {/* mobile */}
      <section className=" flex md:hidden fixed top-0  w-screen min-h-screen bg-greyLight">
        <div className="w-col-1 border-[#e8e8e8] border-r"></div>
        <div className="w-col-2 border-[#e8e8e8] border-r"></div>
        <div className="w-col-1 border-[#e8e8e8] border-r"></div>
        <div className="w-col-2 border-[#e8e8e8] border-r"></div>
        <div className="w-col-3 border-[#e8e8e8] border-r"></div>
        <div className="w-col-1 border-[#e8e8e8] border-r"></div>
        <div className="w-col-1"></div>
      </section>
    </>
  );
}

export default DisplayParts;
