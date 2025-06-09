const GetEventEmoji = (event) => {
  switch (event?.trim()) {
    case "Music":
    case "Concert":
      return "🎵";
    case "Sports":
    case "Sport":
      return "🏀";
    case "Party":
    case "Festival":
      return "🎉";
    case "Workshop":
      return "📝";
    case "Networking":
      return "🤝";
    case "Exhibition":
      return "🖼️";
    case "Performance":
      return "🎭";
    case "Comedy":
      return "🎤";
    default:
      return "🗓️";
  }
};

export default GetEventEmoji;



