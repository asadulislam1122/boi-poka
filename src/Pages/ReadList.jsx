import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { gatSB } from "../Utility/assToBD";
import Book from "./Book";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const handleSwite = () => {
  MySwal.fire({
    title: "Open..",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
  });
};

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    const storeBookData = gatSB();
    // console.log(storeBookData);
    const convert = storeBookData.map((id) => parseInt(id));
    // console.log(convert);
    const myReadList = data.filter((book) => convert.includes(book.bookId));
    setReadList(myReadList);
  }, []);
  return (
    <div className="">
      <h1 className="mt-4 font-bold text-2xl text-center">
        {" "}
        <span className="text-red-600">R</span>
        <span className="text-blue-600">e</span>
        <span className="text-green-600">a</span>
        <span className="text-red-600 ">d</span>
        <span className="text-blue-600 ml-2">L</span>
        <span className="text-green-600">is</span>
        <span className="text-blue-600">t...</span>
      </h1>
      <Tabs>
        <TabList>
          <Tab onClick={handleSwite}>Read Book List</Tab>
          <Tab onClick={handleSwite}>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2> Read Book: {readList.length}</h2>
          <div className="grid md:grid-cols-2 grid-cols-1">
            {readList.map((b) => (
              <Book key={b.bookId} data={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
