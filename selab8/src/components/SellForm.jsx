import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function SellForm(props) {
  const email = localStorage.getItem("email");
  const [formData, setFormData] = useState({
    Images: [],
    Address: "",
    Price: "",
    Bedrooms: "",
    Bathrooms: "",
    Ares: "",
    AboutHome: "",
    Email: email,
    catagoryName: "sell",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const uploadedLinks = [];
    setUploading(true);

    try {
      for (const file of files) {
        // Example: Upload to Cloudinary
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);
        uploadFormData.append("upload_preset", "propertyHub");
        uploadFormData.append("cloud_name", "dpujtctka");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dpujtctka/image/upload",
          uploadFormData
        );

        uploadedLinks.push(response.data.secure_url);
      }

      setFormData((prevData) => ({
        ...prevData,
        Images: [...prevData.Images, ...uploadedLinks],
      }));
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://property-hub-backend.vercel.app/api/upload",
        formData
      );
      if (res.status === 200) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Property Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBedrooms">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of bedrooms"
              name="Bedrooms"
              value={formData.Bedrooms}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBathrooms">
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number of bathrooms"
              name="Bathrooms"
              value={formData.Bathrooms}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formArea">
            <Form.Label>Area (Square Feet)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter area in square feet"
              name="Ares"
              value={formData.Ares}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAboutHome">
            <Form.Label>About Home</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe the home"
              name="AboutHome"
              value={formData.AboutHome}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImages">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
            {uploading && <p>Uploading images...</p>}
          </Form.Group>

          {formData.Images.length > 0 && (
            <div>
              <h5>Uploaded Images:</h5>
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
