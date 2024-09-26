  import React, { useState, useEffect, useContext } from "react";
  import image from "../assets/images/homeImg.svg";
  import { useLocation, Link, Navigate } from "react-router-dom";
  import Card from "./Card.jsx";
  import Shimmer from "./Shimmer.jsx"; // Import Shimmer component
  import { features } from "../constants.jsx";
  import axios from "../axiosConfig.js";
  import LoggedInContext from "../context/LoggedInContext.js";
  import Tilt from "react-parallax-tilt";

  const Body = () => {
    let { pathname } = useLocation();
    const { LoggedIn, setLoggedIn } = useContext(LoggedInContext);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
      console.log(axios.defaults.baseURL);
      
      axios
        .get(axios.defaults.baseURL+"/api/auth/authMiddleware")
        .then((response) => {
          if (response.status === 200) {
            setLoggedIn(true);
            setUserId(response.data.id);
          } else {
            setLoggedIn(false);
            setUserId(null);
          }
          setLoading(false); // Stop loading
        })
        .catch(() => {
          setLoggedIn(false);
          setUserId(null);
          setLoading(false); // Stop loading on error
        });
    }, [pathname]);

    if (loading) {
      return <Shimmer className="h-screen w-screen" />; // Show shimmer while loading
    }

    return pathname === "/" ? (
      <div className=" bg-gradient-to-br from-sky-600 via-teal-500 to-cyan-800 bg-opacity-80 w-screen h-screen flex justify-center items-center box-border text-[#e8fff7]">
        <div className="flex items-center justify-evenly w-full">
          <div className="flex flex-col items-start m-2 gap-4">
            <h2 className="text-[19px] font-bold">ExamPrep Central</h2>
            <h1 className="text-[56px] max-w-sm font-nunito font-bold">
              Experience excellence with us.
            </h1>
            <p className="text-[21px]">Enhance your exam preparation.</p>
            <Link to={LoggedIn ? "/home" : "/login"}>
              <button className="bg-[#1a2529] text-white hover:text-black hover:font-normal text-xl px-4 py-2 rounded-full hvr-bounce-to-right">
                Let's get started
              </button>
            </Link>
          </div>
          <img src={image} alt="Exam Preparation" className="h-[650px]" />
        </div>
      </div>
    ) : LoggedIn ? (
      <div className="p-4 bg-gradient-to-br from-sky-600 via-teal-500 to-cyan-800 bg-opacity-80">
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-[45px] font-nunito stroke-black font-bold bg-gradient-to-br from-[#1db8cd] via-[#fff] to-[#1db8cd] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-[18px] max-w-[50vw]">
            Welcome to ExamPrep Central! We offer lecture notes, video lectures,
            e-books, assignments, past exam papers, and interactive quizzes to
            enhance your exam preparation. Engage in forums, explore career
            resources, and make your study sessions efficient and effective. Join
            us today!
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly p-4 gap-4 ">
          {features.map((feature, index) => {
            const isExternal =
              feature.redirect.startsWith("http://") ||
              feature.redirect.startsWith("https://");

            return isExternal ? (
              <a
                href={feature.redirect}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Tilt>
                  <Card>
                    <div className="p-4 max-w-96 aspect-[5/4] rounded-lg flex flex-col items-start gap-4">
                      <img
                        src={feature.titleImg}
                        alt={feature.title}
                        className="max-w-12 w-full"
                      />
                      <h2 className="font-nunito font-bold text-2xl text-[#1db8cd]">
                        {feature.title}
                      </h2>
                      <p className="font-nunito text-white text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </Tilt>
              </a>
            ) : (
              <Link to={feature.redirect} key={index}>
                <Tilt>
                  <Card>
                    <div className="p-4 max-w-96 aspect-[5/4] rounded-lg flex flex-col items-start gap-4">
                      <img
                        src={feature.titleImg}
                        alt={feature.title}
                        className="max-w-12 w-full"
                      />
                      <h2 className="font-nunito font-bold text-2xl text-[#1db8cd]">
                        {feature.title}
                      </h2>
                      <p className="font-nunito text-white text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </Tilt>
              </Link>
            );
          })}
        </div>
      </div>
    ) : (
      <Navigate to="/login" />
    );
  };

  export default Body;
