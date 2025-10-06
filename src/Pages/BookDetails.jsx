import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStarHalfAlt } from "react-icons/fa";
import { addToStore } from "../Utility/assToBD";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const idd = parseInt(id);
  //   console.log(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === idd);
  // console.log(singleBook);

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
    category,
    review,
  } = singleBook;
  //   console.log(data.bookId);
  // Local Store
  const handleReedMark = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    addToStore(id);
  };
  return (
    <div className=" mx-auto md:w-[700px] mb-2 p-2 m-4  border-2 border-gray-700 mt-4 rounded-xl shadow-xl shadow-blue-400 ">
      <div className=" rounded-2xl bg-gray-200 flex justify-center">
        <img className="h-[300px]  w-[250px] mt-4 mb-4" src={image} alt="" />
      </div>

      <h2 className="mt-1 font-bold text-xl">
        <span>Book Name : </span>
        {bookName}
      </h2>
      <p className="font-semibold text-[18px]">By: {author}</p>
      {/* next */}
      <p className="font-semibold text-[18px]"> {category}</p>
      <p className="font-semibold text-[16px] text-gray-600">
        <span className="font-bold text-black">Review: </span>
        {review}
      </p>
      {/* tags */}
      <div className="flex justify-around font-semibold text-[18px] mt-2">
        {tags.map((tag) => (
          <button key={tag} className="btn text-green-500 h-8">
            {tag}
          </button>
        ))}
      </div>
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
      {/* button */}
      <div className="flex justify-end mr-8 mt-4 gap-8 mb-4 ">
        <button onClick={() => handleReedMark(id)} className="btn">
          Read
        </button>
        <button className="btn">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
