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
      <h1 className="font-bold text-xl text-center mt-4 mb-4">BOOK</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {allData.map((data) => (
          <Book data={data}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
