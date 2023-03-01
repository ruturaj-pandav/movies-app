import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Navbar from "./Navbar";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function UpcomingMovies({ now_playing }) {
  let navigate = useNavigate();

  return (
    <>
      {now_playing.length > 0 ? (
        <>
          <Carousel responsive={responsive}>
            {now_playing.map((upcoming, index) => {
              return (
                <div
                  className={` h-[500px] brightness-125  bg-cover cursor-pointer  duration-100 bg-center bg-no-repeat rounded shadow-lg bg-[url(https://image.tmdb.org/t/p/original${
                    upcoming && upcoming.backdrop_path
                  })]  `}
                  onClick={() => {
                 
                    window.location.href = `http://localhost:3000/movie/${upcoming.id}`;
                    // navigate(`/movie/${reco.id}`);
                  }}
                >
                  <div className="flex flex-col justify-between text-start h-full">
                    <div className="text-white text-5xl mx-3 my-2">
                      Now Playing
                    </div>
                    <div className="text-white bg-gradient-to-r w-fit  ">
                      <span className="block text-3xl mx-2 my-3 ">{upcoming.original_title}</span>
                      <span className="block text-3xl mx-2 my-3 ">{upcoming.vote_average}  &#9733;</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </>
      ) : (
        "loading"
      )}
    </>
  );
}

export default UpcomingMovies;
