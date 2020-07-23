import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Link to='/dashboard'>
        <button>Connexion</button>
      </Link>
    </div>
  );
}
