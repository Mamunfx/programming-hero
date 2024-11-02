import { Link } from "react-router-dom";

const BookCards = ({data}) => {
  const {bookId,image,bookName,author,rating}=data;
  return (
    <Link to={`/book/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={bookName}
          className="rounded-xl h-[160px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
       <p>{rating}</p>
      </div>
    </div>
    </Link>
  );
};

export default BookCards;
