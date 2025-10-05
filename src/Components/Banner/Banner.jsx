import React from "react";
import bookImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="md:flex justify-baseline items-center mx-auto   md:w-[1000px] p-8 m-4">
      <div className="md:w-[50%] md:text-left text-center">
        {" "}
        <p className="md:font-bold md:text-[44px] font-semibold text-[30px]">
          Books to freshen up your bookshelf
        </p>
        <button className="btn rounded-2xl text-white md:text-xl bg-gradient-to-r to-orange-600 from-pink-600  md:bg-[#23BE0A] mt-4">
          View The List
        </button>
      </div>
      <div className="md:w-[50%] mt-4">
        <img className="rounded-2xl" src={bookImg} alt=" Book Img" />
      </div>
    </div>
  );
};

export default Banner;
