import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://192.168.8.102:2222/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <div className="create">
            <h2>Create New Blog</h2>
            <form id="form" onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog Body</label>
                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog Author</label>
                <select name="" id="" value={author} onChange={(e) => setAuthor(e.target.value)} required>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Yann Willson">Yann Willson</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;