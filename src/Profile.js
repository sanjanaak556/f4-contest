import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on the ID from local storage
    const id = JSON.parse(localStorage.getItem('user')).id;

    axios.get(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        // Save user data to state
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>ID: {user.id}</p>
          {/* Display other user information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
