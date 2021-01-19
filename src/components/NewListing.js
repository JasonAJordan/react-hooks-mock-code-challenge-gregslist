import React, {useState} from "react";

function NewListing ({newListing}) {

    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })


    function handleFormChange(event){

        setFormData({...formData,
        [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        
        fetch(`http://localhost:6001/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(newPost => newListing(newPost))
    }


    return (
        <div >
            <h3>New Listing!</h3>

            <form onSubmit={handleSubmit}>
                <h4>Description</h4>
                <input type="text" name="description" 
                value={formData.description}
                onChange={handleFormChange}
                />
                <h4>Image</h4>
                <input type="text" name="image" 
                onChange={handleFormChange}
                value={formData.image}
                />
                <h4>Location</h4>
                <input type="text" name="location" 
                onChange={handleFormChange}
                value={formData.location}
                />
                
            <button type="submit">Add Listing</button>
            </form>

        </div>
    )
}

export default NewListing;