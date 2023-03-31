// import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Bloglist from "./Bloglist";

const Home = () => {
    const { data: blogs, isPending } = useFetch('http://192.168.8.102:2222/blogs');
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs !!!" />}
        </div>
    );
}

export default Home;