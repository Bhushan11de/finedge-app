import React from "react";
import Register from "../register/Register"; // ✅ Correct import path

function Signup() {
  return <Register />; // Register component ko render kar raha hai
}

export default Signup;
