import React from "react";

const Book = ({ data }) => {
  console.log(data);
  const {
    bookName,
    author,
    image,
    rating,
    publisher,
    totalPages,
    yearOfPublishing,
  } = data;
  return (
    <div className="mb-2 p-2 m-4  border-2 border-gray-600 mt-4 rounded-xl shadow-xl shadow-gray-700 ">
      <div className=" rounded-2xl bg-gray-200 flex justify-center">
        <img className="h-[300px]  w-[250px] mt-4 mb-4" src={image} alt="" />
      </div>
      <h2 className="mt-4 font-bold text-xl">
        <span>Book Name : </span>
        {bookName}
      </h2>
      <p className="font-semibold text-[18px]">Author: {author}</p>
      <div className="flex justify-between items-center mt-3 ">
        <span className="font-semibold">Publisher: {publisher}</span>
        <span className="mr-6 font-bold"> {rating} ⭐</span>
      </div>
      <div className="flex justify-between items-center mt-3 ">
        <span className="font-semibold">Publishing: {yearOfPublishing}</span>
        <span className="mr-6 font-bold"> Page: {totalPages}</span>
      </div>
    </div>
  );
};

export default Book;
