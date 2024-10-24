const Blog = ({blog}) => {
    const {id,title,cover,hashtags}=blog;
    return (
        <div>
            <h1>{title}</h1>
            <h1>{id}</h1>
            <img src={cover} alt="" />
            <p>
                {
                    hashtags.map((hash , idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;