"use client";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    let formIsValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (name.trim() === "") {
      newErrors.name = "Name field cannot be empty";
      formIsValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email field cannot be empty";
      formIsValid = false;
    }

    if (message.trim() === "") {
      newErrors.message = "Message field cannot be empty";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      // Clear the error messages after 5 seconds
      setTimeout(() => {
        setErrors({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
      return;
    }

    // Perform form submission logic here
    // e.g., send the form data to a server

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="xl:flex gap-8">
      <h2 className="w-[311px] md:w-[500px] font-bold text-[48px] md:text-[72px] leading-[52px] md:leading-[64px] tracking-[-1.714px] md:tracking-[-2px] text-zinc-900">
        Connect <br className="md:hidden" /> With Us
      </h2>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-start font-medium pt-[42px] relative"
      >
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className={`h-[44px] border-b-[1px] outline-none placeholder:text-gray-300 min-w-[311px] md:w-[572px] pl-8 ${
              errors.name ? "error" : ""
            }`}
          />
          {errors.name && <span className="error-message">Can't be empty</span>}
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className={`h-[44px] border-b-[1px] outline-none placeholder:text-gray-300 min-w-[311px] md:w-[572px] pl-8 ${
              errors.email ? "error" : ""
            }`}
          />
          {errors.email && (
            <span className="error-message">Can't be empty</span>
          )}
        </div>

        <div className="input-wrapper">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={`h-[92px] border-b-[1px] outline-none placeholder:text-gray-300 min-w-[311px] md:w-[572px] pl-8 ${
              errors.message ? "error" : ""
            }`}
          />
          {errors.message && (
            <span className="error-message">Can't be empty</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-zinc-900 h-20 w-20 flex items-center justify-center absolute right-[-10px] md:right-[-60px] lg:right-[80px] xl:right-0 bottom-[-50px]"
        >
          <AiOutlineArrowRight fill="#fff" size={27} />
        </button>
      </form>
    </div>
  );
};
export default Form;
