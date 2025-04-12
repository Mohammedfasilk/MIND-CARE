import React, { use, useEffect, useState } from "react";
import LibraryCard from "../../Component/Patient/LibraryCard";
import useScrolltoTop from "../../Custom Hooks/useScrolltoTop";
import axios from "axios";
import Searchbar from "../../Component/Patient/Searchbar";

function Library() {
  useScrolltoTop();

  const [articles, setArticles] = useState([]);
  const [slice, setSlice] = useState(9);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setArticles(res.data.slice(0, slice));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slice]);

  return (
    <main>
      <section className="pt-20">
        <div className="p-5 lg:p-10 text-2xl sm:text-3xl font-bold text-center w-full">
          Library
        </div>
              <Searchbar />
        <section className="flex flex-col items-center p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {articles?.map((items, index) => (
              <LibraryCard key={index} items={items}/>
            ))}
          </div>
          <div className="p-10 font-semi-bold">
            <button onClick={() => setSlice(slice + 9)}>
              View More
              <i className="bi bi-arrow-right align-middle text-lg"></i>
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Library;
