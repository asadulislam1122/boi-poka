import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("booksData.json").then((res) =>
      res.json().then((data) => {
        setAllData(data);
      })
    );
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-4 mb-4">
        <span className="text-red-600">B</span>
        <span className="text-green-700">O</span>
        <span className="text-blue-600">O</span>
        <span className="text-pink-600">K</span>
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {allData.map((data) => (
          <Book key={data.bookId} data={data}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
