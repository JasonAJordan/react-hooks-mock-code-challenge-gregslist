import React, {useState, useEffect}  from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListing from "./NewListing"

function App() {

  const [listing, setListing] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAlphabet, setIsAlphabet] =useState(false);

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(response => setListing(response))
  }, [])


  function DeleteListing(deletedPost){
    //console.log(deletedPost)

    const updatedListing = listing.filter((post) => (
       post.id !== deletedPost.id
    ))
    setListing(updatedListing)
  }


  function handleAlpSort(){
    setIsAlphabet(!isAlphabet)
  }

  function newListing(newPost){
    //console.log(newPost)

    setListing([...listing, newPost])
  }

  //const sorttedSearch = listing.sort()

  const filterSearch = listing.filter((post) => (
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  ))
  .sort((function(a, b) {   //I FOUND THIS ON STACKOVER FLOW IT'S FAIR GAME!!!
    if(isAlphabet) {        //https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
    var textA = a.location.toUpperCase();
    var textB = b.location.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    }))


  return (
    <div className="app">
      <Header 
      setSearchTerm={setSearchTerm}
      />
      
      <NewListing 
      newListing={newListing}
      />
      <br></br>
      <br></br>
      <button onClick={handleAlpSort}> Sort Alphabetically! </button>
      <ListingsContainer 
      listing={filterSearch}
      showDelete={DeleteListing}
      />
    </div>
  );
}

export default App;
