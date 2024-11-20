import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams(); // Accessing the dynamic route parameter
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id]); // Re-fetch when id changes

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default BlogPost;
