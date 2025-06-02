const GetEventEmoji = (event) =>{
    switch(event){
    case "Music":
    return "🎸";
     case "Sports":
    return "🏀";
      case "Party":
    return "🎉";
      case "Workshop":
    return "📝";
      case "Networking":
    return "🤝";
      case "Exhibition	":
    return "🎨";
    default: 
    return"🗓️";
}};

export default GetEventEmoji;


