import React from "react";
import Register from "../register/Register"; // ✅ Absolute path use karein

function Signup() {
  return <Register />; // Register component ko render kar raha hai
}

export default Signup;
