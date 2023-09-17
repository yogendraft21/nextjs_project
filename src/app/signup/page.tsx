"use client";

import Link from "next/link";
import { useState } from "react";
export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSignup = async () => {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <p className="block text-gray-700 text-2xl font-bold mb-2">SignUp</p>
      <div className="flex flex-col justify-center w-80">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="p-2 border mt-2 mb-2"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="p-2 border mt-2 mb-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="p-2 border mt-2 mb-2"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="m-2 p-3 bg-orange-500 text-teal-50 rounded-full"
        onClick={handleSignup}
        >
          Signup Here
        </button>
        <p className="text-sm text-gray-500 text-center">
          If already have an account ?{" "}
          <Link href="./login">
            {" "}
            <span className="text-sm text-blue-500 cursor-pointer">
              login here
            </span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
