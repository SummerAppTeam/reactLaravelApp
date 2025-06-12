const EditEvent = ({
  editedEvent,
  onHandleInputChange,
  onSave,
  onCancel,
  onDelete,
  loading,
  currentDate,
}) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedEvent.name}
        onChange={onHandleInputChange}
      />
      <input
        type="date"
        name="date"
        value={editedEvent.date}
        onChange={onHandleInputChange}
        min={currentDate}
        required
      />
      <input
        type="text"
        name="location"
        value={editedEvent.location}
        onChange={onHandleInputChange}
      />
      <select
        name="type"
        value={editedEvent.type}
        onChange={onHandleInputChange}
      >
        <option value="">-- Select Category --</option>
        <option value="Outdoor & Nature">🌿 Outdoor & Nature</option>
        <option value="Food & Social">🥗 Food & Social</option>
        <option value="Hobbies & DIY">🎨 Hobbies & DIY</option>
        <option value="Learning & Networking">📝 Learning & Networking</option>
        <option value="Health & Wellness">🌸 Health & Wellness</option>
        <option value="Music & Entertainment">🎤 Music & Entertainment</option>
        <option value="Markets & Swaps">🛍️ Markets & Swaps</option>
        <option value="Family & Kids">🧸 Family & Kids</option>
        <option value="Sports & Games">🏀 Sports & Games</option>
        <option value="Parties & Celebration">🎉 Parties & Celebration</option>
      </select>
      <input
        type="text"
        name="description"
        value={editedEvent.description}
        onChange={onHandleInputChange}
      />
      <input
        type="number"
        name="price"
        value={editedEvent.price}
        onChange={onHandleInputChange}
      />
      <input
        type="text"
        name="long_description"
        placeholder="Long description"
        value={editedEvent.long_description}
        onChange={onHandleInputChange}
      />
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditEvent;
