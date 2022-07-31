import React,{useEffect,useState} from "react";
import axios from "axios";

function Pages() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        const fetchposts = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
            console.log(response.data);
        };
        fetchposts()
    },[]);
    return <div>Pagination</div>;
}

export default Pages;
