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
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["posts"], // Unique key for this query
        queryFn: fetchPosts, // Function to fetch the data
        cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
        staleTime: 60 * 1000, // Data is fresh for 1 minute
        refetchOnWindowFocus: false, // Do not refetch when the window is focused
        keepPreviousData: true, // Show previous data while fetching new data
    });

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button
                onClick={() => refetch()}
                style={{ marginBottom: "20px", padding: "10px 15px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
                Refetch Posts
            </button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
