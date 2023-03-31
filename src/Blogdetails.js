import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://192.168.8.102:2222/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://192.168.8.102:2222/blogs/' + id, {
            method: 'DELETE'
        }).then((res => {
            return res.json();
        })).then((data => {
            alert(data.message);
            navigate('/');
        })).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;