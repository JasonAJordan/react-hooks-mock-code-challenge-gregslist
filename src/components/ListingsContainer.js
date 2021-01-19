import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, showDelete}) {


  // console.log(listing)
  const listingMapped = listing.map((post) => (
    <ListingCard 
    post={post}
    key={post.id}
    showDelete={showDelete}
    />
  ))


  return (
    <main>
      <ul className="cards">
        {listingMapped}
      </ul>
    </main>
  );
}

export default ListingsContainer;
