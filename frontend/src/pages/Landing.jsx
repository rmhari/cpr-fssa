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
  const [resetData, setResetData] = useState({
    username: "",
    newPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetInputChange = (e) => {
    const { name, value } = e.target;
    setResetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("Reset password attempt:", resetData);
      setIsLoading(false);
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
          <div className="text-2xl text-black">
            {clicked ? "FSSA Academy" : "Reset Your Password"}
          </div>
        </div>

        {clicked ? (
          <>
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
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                  content={isLoading ? "Waiting" : "Sign In"}
                ></Button>
              </div>
            </form>
            <div className="text-right mt-1">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
                onClick={() => setClicked(false)}
              >
                Forgot password?
              </button>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleReset} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={resetData.username}
                  onChange={handleResetInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="newPassword"
                  placeholder="Reset New Password"
                  value={resetData.newPassword}
                  onChange={handleResetInputChange}
                  required
                />
              </div>
              <div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                  content={isLoading ? "Reset Password" : "Waiting"}
                ></Button>
              </div>
            </form>
            <div className="text-right mt-1">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
                onClick={() => setClicked(true)}
              >
                Back to login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Landing;
