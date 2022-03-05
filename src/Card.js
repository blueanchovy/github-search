import React from "react";
import "./Card.css";

function Card({
  AvatarImage,
  Username,
  Name,
  PublicRepos,
  PublicGists,
  CreateTime,
}) {
  return (
    <div className="card">
      <img src={AvatarImage} alt="" />
      <div className="card__info">
        <h5>Username : {Username}</h5>
        <h5>Name : {Name}</h5>
        <h5>No. of Public Repositories : {PublicRepos}</h5>
        <h5>No. of Public Gists : {PublicGists}</h5>
        <h5>Profile created at : {CreateTime}</h5>
      </div>
    </div>
  );
}

export default Card;
