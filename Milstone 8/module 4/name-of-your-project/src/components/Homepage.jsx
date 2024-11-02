import { useEffect, useState } from "react";
import BookCards from "./BookCards"
const Homepage = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("../../data/booksData.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-center m-12">
        BOOKS
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-4 shadow-xl ">
        {
          books.map(data=> <BookCards key={data.bookId} data={data} ></BookCards>)
        }
      </div>

    </div>
  );
};

export default Homepage;
