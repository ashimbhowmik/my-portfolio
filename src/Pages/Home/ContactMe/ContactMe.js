import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Email Send Sucsefully");

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv03ux9",
        "template_ewj5c01",
        form.current,
        "Cn9zFEVULtku_SvM4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="my-20">
      <div className="bg-black py-16 px-56 text-white">
        <h1 className="text-center text-4xl font-bold">Contact Me</h1>
        <div className="flex gap-7 mt-12 items-center">
          <div className="w-[60%]">
            <h1 className="text-2xl mb-8 font-bold">Contact Me</h1>
            <div className="ml-3">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <h1>ADDRESS</h1>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex mt-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <div>
                  <h1>PHONE</h1>
                  <p>+8801770012828</p>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <div>
                  <h1>Email</h1>
                  <p>ashimbhowmik239@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] bg-white rounded-lg mx-auto py-16">
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-[70%] mx-auto shadow-lg bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="input input-bordered text-black"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="input input-bordered text-black"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      className="border rounded-lg p-3 w-full text-black"
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <input
                    onClick={notify}
                    className="px-6 py-3 font-semibold rounded btn btn-accent text-black mt-2"
                    type="submit"
                    value="Send"
                  />
                  <Toaster />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
