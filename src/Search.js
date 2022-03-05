import React, { useState } from "react";
import "./Search.css";
import Card from "./Card";

function Search() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => {
        return result.json();
      })
      .then((values) => {
        setData(values);
      });
  };

  return (
    <div className="search">
      <form className="search__form" action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Github Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>Search</button>
      </form>
      {data.login ? (
        <>
          <div className="search__results">
            <Card
              AvatarImage={data.avatar_url}
              Username={data.login}
              Name={data.name}
              PublicRepos={data.public_repos}
              PublicGists={data.public_gists}
              CreateTime={data.created_at.slice(0, 10)}
            />
          </div>
        </>
      ) : (
        <>
          <p>Please enter valid username.</p>
        </>
      )}
    </div>
  );
}

export default Search;
