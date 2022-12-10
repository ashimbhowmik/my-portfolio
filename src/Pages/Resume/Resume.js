import React from "react";
import call from "../../assests/Logo/call.png";
import linkedin from "../../assests/Logo/linkedin (1).png";
import git from "../../assests/Logo/github.png";
import dot from "../../assests/Logo/record-button.png";

const Resume = () => {
  return (
    <div>
      <section className="mt-40 mb-20 w-[70%] mx-auto shadow-md py-12">
        <div className="ml-32">
          <h1 className="text-4xl font-bold">ASHIM BHOWMIK AMIT</h1>
          <p className=" font-bold mt-1 mb-9">FRONT-END DEVELOPER</p>
          <section className="flex gap-10">
            <div className="w-[40%]">
              <div>
                <h1 className="text-xl font-bold">CONTACT DETAILS</h1>
                <div className="ml-6 mt-5">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                    <p>ashimbhowmik239@gmail.com</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={call} className="w-4 h-4 mr-2" alt="" />
                    <p>+8801770012828</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={linkedin} className="w-4 h-4 mr-2" alt="" />
                    <a href="#">ashim.com/ashimbhowmik</a>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={git} className=" w-4 h-4 mr-2" alt="" />
                    <a href="#">github.com/ashimbhowmik</a>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
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
                    <p>Dhaka,Bangladesh</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-5">SKILLS</h1>
                <div className="ml-6 mt-5">
                  <div className="flex">
                    <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                    <p>
                      Comfortable: HTML5, CSS3, Tailwind, JavaScript(ES6),
                      React.js, React Router(V6), Bootstrap, C
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                    <p>Familiar: MongoDB, Express.js, Machine Learning.</p>
                  </div>
                  <div className="flex mt-2">
                    <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                    <p>
                      Tools: VS Code, Firebase, Netlify, Vercel, Code Blocks
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-xl font-bold">EDUCATION</h1>
                <div className="ml-6 mt-5 flex">
                  <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                  <div>
                    <p>B. Sc in Computer Science and Engineering.</p>
                    <p className="mt-1">Daffodil International University</p>
                    <p className="mt-1">January, 2020 – Present</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-5">LANGUAGE</h1>
                <div className="ml-6">
                  <div className="flex mt-5 items-center">
                    <img src={dot} className="w-3 h-3 mr-2" alt="" />
                    <p>Bangla - Native</p>
                  </div>
                  <div className="flex mt-2 items-center">
                    <img src={dot} className="w-3 h-3 mr-2" alt="" />
                    <p>English - Basic</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-5">HOBBIES</h1>
                <div className="mt-5 ml-6">
                  <div className="flex items-center">
                    <img src={dot} className="w-3 h-3 mr-2" alt="" />
                    <p>Traveling</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={dot} className="w-3 h-3 mr-2" alt="" />
                    <p>Sports</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <img src={dot} className="w-3 h-3 mr-2" alt="" />
                    <p>Listening to music</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="w-[80%]">
                <div>
                  <h1 className="text-xl font-bold">SUMMARY</h1>
                  <p className="mt-5 ml-6">
                    Knows how to code and manage projects within a given time.
                    Looking forward to achieving my future goals.
                  </p>
                </div>
                <div className="mt-5 ">
                  <div>
                    <h1 className="text-xl font-bold">PROJECT</h1>
                    <div className="mt-5 ml-6">
                      <h4 className="font-bold">Photography Services</h4>
                      <div className="ml-2 mt-3">
                        <div className="flex">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The users can sign up and log in to this website
                            using google or Email and password.
                          </p>
                        </div>
                        <div className="flex mt-1">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The user can give feedback regarding any services
                            which he has taken and he can also update his
                            feedback and delete this .
                          </p>
                        </div>
                        <div className="flex mt-1">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The user can add any service according to his
                            demand.
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-3 justify-between font-bold">
                        <p>Live Link</p>
                        <p>GitHub(Client Side)</p>
                        <p>GitHub(Server Side)</p>
                      </div>
                    </div>
                    <div className="ml-6 mt-4">
                      <h4 className="font-bold">Learning Platform</h4>
                      <div className="mt-5 ml-2">
                        <div className="flex">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The users can sign up and log in to this website
                            using google or Email and password.
                          </p>
                        </div>
                        <div className="mt-1 flex">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The user can buy premium access to any courses he
                            likes.
                          </p>
                        </div>
                        <div className="mt-1 flex">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The user can see full details of the courses and
                            also can download it as a pdf.
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-3 justify-between font-bold">
                        <p>Live Link</p>
                        <p>GitHub(Client Side)</p>
                        <p>GitHub(Server Side)</p>
                      </div>
                    </div>
                    <div className="ml-6 mt-4">
                      <h4 className="font-bold">Quiz Contest</h4>
                      <div className="mt-5 ml-2">
                        <div className="flex ">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>User can attempt quiz on programming languages.</p>
                        </div>
                        <div className="flex mt-1">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The user can see either his answer is right or
                            wrong.
                          </p>
                        </div>
                        <div className="flex mt-1">
                          <img src={dot} className="w-3 h-3 mt-1 mr-2" alt="" />
                          <p>
                            The user can see full statistics of total quizzes.
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-3 justify-between font-bold">
                        <p>Live Link</p>
                        <p>GitHub(Client Side)</p>
                        <p>GitHub(Server Side)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Resume;
