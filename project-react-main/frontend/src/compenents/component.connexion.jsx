import { useState } from "react";
import { Link } from "react-router-dom";

export function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="form-group">
            <button className="btn-login" type="submit">Sign In</button>
          </div>
        </form>

        <div className="text-center forgot-password">
          <Link to="#" className="forgot-link">Forgot your password?</Link>
        </div>

        <div className="text-center create-account">
          <span>Don't have an account?</span>
          <Link to="#" className="create-link">Create one here</Link>
        </div>
      </div>
    </div>
  );
}
