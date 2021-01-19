import React, {useState} from "react";

function ListingCard({post, showDelete}) {
  //no price??
  // "id": 1,
  // "description": "heater",
  // "image": "./images/heater.jpg",
  // "location": "BROOKLYN"

  const [favorite, setFavorite] = useState(true);


  function handleFav(event){
    setFavorite(!favorite)
  }

  function handleDelete(event){

    fetch(`http://localhost:6001/listings/${post.id}`, {
        method: 'DELETE', 
        })
    .then(r => r.json())
    .then(deletedListing => showDelete(post))

    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={post.image} alt={post.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{post.description}</strong>
        <span> · {post.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
