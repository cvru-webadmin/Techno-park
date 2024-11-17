import React, { useContext, useState } from "react";
import FireBaseProvider, { FireContext } from "../Context/context";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {LoginAdmin}=useContext(FireContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Admin loging..");
    // Add create user call for login here
    const Admin = await LoginAdmin(email,password);
    alert(Admin)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <div className="shadow-sm bg-red-600 rounded-lg text-white p-1 w-"><svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.95">
		<path stroke-dasharray="36" stroke-dashoffset="36" d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0" />
		</path>
		<path stroke-dasharray="14" stroke-dashoffset="14" d="M9 12h11.5">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0" />
		</path>
		<path stroke-dasharray="6" stroke-dashoffset="6" d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0" />
		</path>
	</g>
</svg></div>
        </form>

        {/* Forgot Password Link */}
        {/* <div className="text-center mt-4">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default AdminLogin;
