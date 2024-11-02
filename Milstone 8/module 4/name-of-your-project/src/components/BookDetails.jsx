import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookId}=useParams();
    const id = parseInt(bookId);
    const data=useLoaderData();

    const {bookName,image}=data.find(book =>book.bookId==id)
    
    return (
        <div>
            <h1> Book id :{id} </h1>
            <h1> Book name :{bookName} </h1>
            <img src={image} alt="alto" />
        </div>
    );
};

export default BookDetails;