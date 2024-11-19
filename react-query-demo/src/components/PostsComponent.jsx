import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const PostsComponent = () => {
    // Use the new useQuery API (v5+)
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"], // Unique key for this query
        queryFn: fetchPosts, // Function to fetch the data
    });

    if (isLoading) return <div>Loading...</div>;

    // Correct error handling using isError
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};
//new code added.
export default PostsComponent;
