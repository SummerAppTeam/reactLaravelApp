const GetEventEmoji = (event) => {
  switch (event?.trim()) {
    case "Outdoor & Nature":
      return "🌿";
    case "Food & Social":
      return "🥗";
    case "Hobbies & DIY":
      return "🎨";
    case "Learning & Networking":
      return "📝";
    case "Health & Wellness":
      return "🌸";
    case "Music & Entertainment":
      return "🎤 ";
    case "Markets & Swaps":
      return "🛍️";
    case "Family & Kids":
      return "🧸";
    case "Sports & Games":
      return "🏀";
    case "Parties & Celebration":
      return "🎉";
    default:
      return "🗓️";
  }
};

export default GetEventEmoji;
