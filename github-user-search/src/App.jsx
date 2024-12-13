import { useState } from "react";
import { fetchUserData } from "./services/githubService";
import Search from "./components/Search";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      setError(null); // Clear previous errors
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data); // Update state with user data
    } catch  {
      setError("User not found or an error occurred."); // Handle errors
    }
  };

  return (
    <div>
      <h1 className="text-xl text-blue-800">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name || userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
        </div>
      )}
    </div>
  );
};

export default App;
