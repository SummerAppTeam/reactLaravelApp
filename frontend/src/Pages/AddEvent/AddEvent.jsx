import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import "./AddEvent.css";

const AddEvent = ({ onEventAdded }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    type: "",
    description: "",
    long_description: "",
    price: "",
    image: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        ...form,
        price: form.price ? Number(form.price) : 0,
        image: form.image || "https://via.placeholder.com/600x400.png?text=Default+Event+Image",
        long_description: form.long_description || form.description || "No long description provided",
      };

      const response = await axios.post("http://localhost:8000/api/events", dataToSend);
      console.log("Event added:", response.data);

      setSuccessMessage("✅ Event successfully added!");

      onEventAdded?.(response.data);

      setTimeout(() => {
        navigate("/EventList"); 
      }, 1000);

      setForm({
        name: "",
        date: "",
        location: "",
        type: "",
        description: "",
        long_description: "",
        price: "",
        image: "",
      });
    } catch (err) {
      console.error("Error adding event:", err.response?.data || err.message);
      alert("Error adding event: " + (err.response?.data?.message || err.message));
    }
  };

  return (
   
    <form onSubmit={handleSubmit} className="addEventForm">
    <h2 className="formHeader">Add New Event</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Event Name" required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
      <select name="type" value={form.type} onChange={handleChange} required>
        <option value="">-- Select Category --</option>
        <option value="Festival">🎉 Festival</option>
        <option value="Concert">🎵 Concert</option>
        <option value="Sport">⚽ Sport</option>
        <option value="Performance">🎭 Performance</option>
        <option value="Exhibition">🖼️ Exhibition</option>
        <option value="Comedy">🎤 Comedy</option>
      </select>

      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      {/* <textarea
        name="long_description"
        value={form.long_description}
        onChange={handleChange}
        placeholder="Long Description"
      /> */}
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        type="url"
      />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price (€)" />
      <button type="submit">Add Event</button>

      {successMessage && <p className="successMessage">{successMessage}</p>}
    </form>
  );
};

export default AddEvent;
