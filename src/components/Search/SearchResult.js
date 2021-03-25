import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { StayPrimaryLandscapeOutlined } from "@material-ui/icons";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="search-result">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="search-result-heart" />
      <div className="search-result-info">
        <div className="search-result-infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="search-result-infoBottom">
          <div className="search-result-stars">
            <StarIcon className="search-result-star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="search-result-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
