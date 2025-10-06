import React from "react";
import { LogIn } from "lucide-react"; // Lucide icon

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-card">
        <LogIn className="login-icon" size={42} />
        <h2>Welcome Back</h2>
        <p>Login to manage your reservations and orders</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
