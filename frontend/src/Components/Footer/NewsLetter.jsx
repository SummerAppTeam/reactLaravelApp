import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState(""); //store
  const [isEmailValid, setIsEmailValid] = useState(true); //check if valid

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) { //check if empty or doesn't match an email address 
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert("Thank you for subscribing with us!");
      setEmail("");
    }
  }

  return (
    <>
      <h2>Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address please"
          value={email}
          onChange={handleInput}
        />
        <button
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </>
  );
}

export default Newsletter;