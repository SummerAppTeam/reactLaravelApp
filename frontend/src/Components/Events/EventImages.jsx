const GetEventImage = (event) => {
  if (event === "Party")
    return "https://images.pexels.com/photos/341858/pexels-photo-341858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  if (event === "Conference")
    return "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&w=1600";
  if (event === "Workshop")
    return "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return "https://images.pexels.com/photos/5156589/pexels-photo-5156589.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"; // this is default
};

// If we wanna add changing image depending on event type (Optional)

export default GetEventImage;
