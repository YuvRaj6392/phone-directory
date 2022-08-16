import React, { useEffect, useState } from "react";

export default function App() {
    const [data, setData] = useState({});
    const [profileName, setProfileName] = useState("mojombo");
  
    useEffect(() => {
      fetch(`https://api.github.com/users/${profileName}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [profileName]);
  
    return (
      <div className="container">
        <input
          name="profilename"
          className="profile-name"
          onChange={(e) => setProfileName(e.target.value)}
        />
        <div className="users-name">{data.name}</div>
        <div className="users-company">{data.company}</div>
        <div className="users-repos">{data.public_repos}</div>
      </div>
    );
};
