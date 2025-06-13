const GetEventImage = (event) => {
  if (event === "Outdoor & Nature")
    return "https://images.pexels.com/photos/6407175/pexels-photo-6407175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Food & Social")
    return "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Hobbies & DIY")
    return "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1600";
  if (event === "Learning & Networking")
    return "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Health & Wellness")
    return "https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Music & Entertainment")
    return "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Markets & Swaps")
    return "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Family & Kids")
    return "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Sports & Games")
    return "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Parties & Celebration")
    return "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
};

export default GetEventImage;
