"use client";
import React, { useState } from "react";

export const WaitListModal = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeModal = () => {
    const element = document.getElementById("join-waitlist-modal");
    if (element) {
      element.classList.add("hidden");
      document.documentElement.style.overflow = "auto";
    }
    setError("");
    setEmail("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://webhook.latenode.com/1194/prod/90c88543-8f80-4b56-9c45-b3bfaa995e79",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (response.ok) {
        setSubmitted(true); // Switch to thank-you message
      } else {
        setError(
          "There was a problem submitting your request. Please try again.",
        );
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="join-waitlist-modal"
      className="fixed inset-0 z-40 flex hidden items-center justify-center bg-black bg-opacity-70"
      onClick={closeModal} // Close modal on background click
    >
      <div
        className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing modal
      >
        {submitted ? (
          // Thank-you message after submission
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Thank you!
            </h2>
            <p className="mb-6 text-gray-600">
              We remember your email now and will send the link to the app when
              it is ready.
            </p>

            <button
              onClick={closeModal}
              className="mt-6 w-full rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
            >
              Close
            </button>
          </div>
        ) : (
          // Form content before submission
          <>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Join the Waitlist
            </h2>
            <p className="mb-6 text-gray-600">
              Enjoy a free month when the app launches! We will send you just
              one email with the link to it.
            </p>

            {/* Email Input Field */}
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="mail@example.com"
              className="mb-2 w-full rounded border border-gray-300 bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            />

            {/* Error Message */}
            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="mt-6 w-full rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Join Now"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const openWaitListModal = () => {
  const element = document.getElementById("join-waitlist-modal");
  if (element) {
    element.classList.remove("hidden");
    document.documentElement.style.overflow = "hidden";
  }
};
