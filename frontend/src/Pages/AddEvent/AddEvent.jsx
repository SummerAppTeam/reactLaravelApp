import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEvent.css";
import useAxios from "../../hooks/useAxios";
import { DotLoader } from "react-spinners";


const currentDate = new Date().toISOString().split("T", 1)[0];

const AddEvent = ({ onEventAdded }) => {
  const { post } = useAxios();
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
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const dataToSend = {
        ...form,
        price: form.price ? Number(form.price) : 0,
        image:
          form.image ||
          "https://via.placeholder.com/600x400.png?text=Default+Event+Image",
        long_description:
          form.long_description ||
          form.description ||
          "No long description provided",
      };

      const response = await post("api/events", dataToSend);
      console.log("Event added:", response.data);

      setSuccessMessage("✅ Event successfully added!");

      onEventAdded?.(response.data);

      setTimeout(() => {
        navigate("/events");
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
      alert(
        "Error adding event: " + (err.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <DotLoader size={60} />
      ) : (
        <form onSubmit={handleSubmit} className="addEventForm">
          <h2 className="formHeader">Add New Event</h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Event Name"
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            min={currentDate}
            required
          />
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="Outdoor & Nature">🌿 Outdoor & Nature</option>
            <option value="Food & Social">🥗 Food & Social</option>
            <option value="Hobbies & DIY">🎨 Hobbies & DIY</option>
            <option value="Learning & Networking">
              📝 Learning & Networking
            </option>
            <option value="Health & Wellness">🌸 Health & Wellness</option>
            <option value="Music & Entertainment">
              🎤 Music & Entertainment
            </option>
            <option value="Markets & Swaps">🛍️ Markets & Swaps</option>
            <option value="Family & Kids">🧸 Family & Kids</option>
            <option value="Sports & Games">🏀 Sports & Games</option>
            <option value="Parties & Celebration">
              🎉 Parties & Celebration
            </option>
          </select>

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            name="long_description"
            value={form.long_description}
            onChange={handleChange}
            placeholder="Add a longer Description"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            type="url"
          />
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (€)"
          />
          <button type="submit">Add Event</button>

          {successMessage && <p className="successMessage">{successMessage}</p>}
        </form>
      )}
    </>
  );
};

export default AddEvent;
