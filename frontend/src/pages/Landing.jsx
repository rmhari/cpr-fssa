import React, { useState } from "react";
import Image from "../components/Image";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/logo.svg";

function Landing() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", formData);
      setIsLoading(false);
      // Add your login logic here
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-1/4 max-w-sm">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <Image
              imageSrc={logo}
              altName="My Academy Logo"
              className="h-36 w-36"
            />
          </div>
          <div className="text-2xl text-black">FSSA Academy</div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Logging in..." : "Sign In"}
            </Button>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="text-right mt-1">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
