import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ data }) => {
  // console.log(data);
  const {
    bookName,
    author,
    image,
    rating,
    publisher,
    totalPages,
    yearOfPublishing,
    tags,
    bookId,
  } = data || {};
  return (
    <Link to={`/bookDtails/${bookId}`}>
      <div className="mb-2 p-2 m-4  border-2 border-gray-600 mt-4 rounded-xl shadow-xl shadow-gray-700 ">
        <div className=" rounded-2xl bg-gray-200 flex justify-center">
          <img className="h-[300px]  w-[250px] mt-4 mb-4" src={image} alt="" />
        </div>
        {/* tags */}
        <div className="flex justify-around font-semibold text-[18px] mt-2">
          {tags.map((tag) => (
            <button key={tag} className="btn h-8">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="mt-1 font-bold text-xl">
          <span>Book Name : </span>
          {bookName}
        </h2>
        <p className="font-semibold text-[18px]">By: {author}</p>
        <div className="border-1 border-dashed mt-2 text-gray-500"></div>
        <div className=" flex justify-between items-center mt-3 ">
          <span className="font-semibold">Publisher: {publisher}</span>
          <div className="mr-5 flex gap-2  items-center">
            <span className=" font-bold">{rating}</span>
            <span>
              {" "}
              <FaStarHalfAlt />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 ">
          <span className="font-semibold">Publishing: {yearOfPublishing}</span>
          <span className="mr-6 font-bold"> Page: {totalPages}</span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
