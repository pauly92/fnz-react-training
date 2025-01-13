import { useEffect, useState } from "react";
import Post, { PostType } from "./Post";

const Blog: React.FC = () => {
    const [currentPostId, setCurrentPostId] = useState(1);
    const [post, setPost] = useState<PostType | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}`);
                // debugger;
                const data = await response.json();
                console.log(data);
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();

    }, [currentPostId])

    return (
        <>
            <button onClick={() => setCurrentPostId(currentPostId + 1)}>Get Next Post</button>
            <Post post={post}></Post>
        </>
    );
};

export default Blog;