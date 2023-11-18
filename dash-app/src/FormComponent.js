import React, { useState } from "react";
import "./styles2.css";

const FormComponent = (props) => {
  const initialFormData = {
    Image1: "Elephant",
    Image2: "Monkey",
    Image3: "Astrounaut",
    Image4: "Banyan Tree",
    Image5: "Banana in Space",
    Image6: "Elephant in Space",
    Image7: "Space Ship",
    Image8: "Satelite",
    Image9: "Space Station",
    Image10: "Solar System",
  };

  // State to manage form data
  const [formData, setFormData] = useState(initialFormData);

  // Function to update form data on input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    // Add your logic here for handling form submission
    // You can access form data using event.target elements or via form references
    console.log("Form submitted");
    //for loop on initialFormData
    //for each key, get value
    //push value to textInputs
    for (const key in initialFormData) {
      console.log(initialFormData[key]);
      fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
            headers: {
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({"inputs" : initialFormData[key]}),
        }
      ).then((response) => { 
        response.blob().then((blob) => {
          const imageUrl = URL.createObjectURL(blob);
          console.log(imageUrl);
          const num = parseInt(key.substring(5));
          let imageUrls = props.imageUrls;
          imageUrls[num] = imageUrl;
          props.setImageUrls(imageUrls);
        })
      }).catch((error) => {
        console.error("Error:", error);
      });
    }
  };

  return (
    <div className="container">
      <form id="textForm" onSubmit={handleSubmit}>
        <div className="column">
          <label htmlFor="Image1">Image 1:</label>
          <input
            type="text"
            id="Image1"
            name="Image1"
            value={formData.Image1}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image2">Image 2:</label>
          <input
            type="text"
            id="Image2"
            name="Image2"
            value={formData.Image2}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image3">Image 3:</label>
          <input
            type="text"
            id="Image3"
            name="Image3"
            value={formData.Image3}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image4">Image 4:</label>
          <input
            type="text"
            id="Image4"
            name="Image4"
            value={formData.Image4}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image5">Image 5:</label>
          <input
            type="text"
            id="Image5"
            name="Image5"
            value={formData.Image5}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="column">
          <label htmlFor="Image6">Image 6:</label>
          <input
            type="text"
            id="Image6"
            name="Image6"
            value={formData.Image6}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image7">Image 7:</label>
          <input
            type="text"
            id="Image7"
            name="Image7"
            value={formData.Image7}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image8">Image 8:</label>
          <input
            type="text"
            id="Image8"
            name="Image8"
            value={formData.Image8}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image9">Image 9:</label>
          <input
            type="text"
            id="Image9"
            name="Image9"
            value={formData.Image9}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="Image10">Image 10:</label>
          <input
            type="text"
            id="Image10"
            name="Image10"
            value={formData.Image10}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <button type="submit">Generate Comic</button>
      </form>
    </div>
  );
};

export default FormComponent;
