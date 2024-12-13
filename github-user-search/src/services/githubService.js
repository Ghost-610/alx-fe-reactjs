import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

// Optional: Add a personal access token for rate limits
const GITHUB_API_KEY = import.meta.env.REACT_APP_GITHUB_API_KEY;

// Create an Axios instance for GitHub API calls
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: GITHUB_API_KEY ? `Bearer ${GITHUB_API_KEY}` : null,
  },
});

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data; // Returns the fetched user data
  } catch (error) {
    console.error("Error fetching GitHub user data:", error.message);
    throw error; // Propagate the error for error handling in components
  }
};
