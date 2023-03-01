import React from "react";
import swal from "sweetalert";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function MovieInformationDiv({
  movie,
  provider,

  getUserInformation,
}) {
  let navigate = useNavigate();
  const [user, setuser] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getUserInformation();
  }, []);

  getUserInformation = async () => {
    
    let id = this.state.movie_id;
    if (id !== undefined) {
      try {
        let response = await axios.post(
          "http://localhost:8000/users/individual",
          {},
          {
            headers: {
              authorization: `token ${localStorage.getItem("moviesToken")}`,
            },
          }
        );

        let results = response.data.user;
      
        user.push(results);
        // currentuser.push(results);

        setuser(results);

        // this.setState({ provider: results[Object.keys(results)[0]] });
      } catch (error) {}
    }

  };
  // let inwatchlist =
  //   user && user[0].watchlist.some((item) => item.originalId === parseInt(id));


  async function updateLikes() {
    let token = localStorage.getItem("moviesToken");
    let url = "http://localhost:8000/users/updateLikes";
    let tmovie = {
      movieName: movie.original_title,
      movieRating: movie.vote_average,
      movieBackdropPath: movie.backdrop_path,
      originalId: id,
    };
    let response = await axios.post(
      url,
      { movie: tmovie },
      {
        headers: {
          authorization: `token ${token}`,
        },
      }
    );
    if (response) {
      if (response.status === 200) {
        swal("Success", response.data.message, "success");
      }
    }
  }
  async function updateDislikes() {
    let token = localStorage.getItem("moviesToken");
    let url = "http://localhost:8000/users/updateDislikes";
    let tmovie = {
      movieName: movie.original_title,
      movieRating: movie.vote_average,
      movieBackdropPath: movie.backdrop_path,
      originalId: id,
    };
    let response = await axios.post(
      url,
      { movie: tmovie },
      {
        headers: {
          authorization: `token ${token}`,
        },
      }
    );
    if (response) {
      if (response.status === 200) {
        swal("Success", response.data.message, "success");
      }
    }
  }
  async function updateWatchlist() {
    let token = localStorage.getItem("moviesToken");
    let url = "http://localhost:8000/users/updateWatchlist";
    let tmovie = {
      movieName: movie.original_title,
      movieRating: movie.vote_average,
      movieBackdropPath: movie.backdrop_path,
      originalId: id,
    };
    let response = await axios.post(
      url,
      { movie: tmovie },
      {
        headers: {
          authorization: `token ${token}`,
        },
      }
    );
    if (response) {
      if (response.status === 200) {
        swal("Success", response.data.message, "success");
        getUserInformation();
      }
    }
  }

  const [optionAmongFour, setOptionAmongFour] = useState("overview");
  const [watchMode, setWatchMode] = useState("rent");
  const handleSelectChange = (event) => {
    setWatchMode(event.target.value);
  };
  return (
    <div className="  px-2 lg:px-8">
      <div className=" mt-3 mb-5 text-start  ">
        <span className="text-3xl md:text-5xl text-blue-900 md:text-black font-sans font-semibold block ">
          {movie.original_title}
        </span>
        <span className="font-sans text-lg mt-3 text-gray-500 block ">
          {movie.tagline}
        </span>
      </div>
      <div className="text-start my-3 ">
        <span
          onClick={() => {
            updateLikes();
          }}
          className="text-5xl mx-3 text-red-500 border rounded-full  filled hover:scale-105 duration-100 cursor-pointer inline-block "
        >
          <ion-icon name="heart-outline"></ion-icon>
        </span>
        <span
          onClick={() => {
            updateDislikes();
          }}
          className="text-5xl mx-3 text-black hover:scale-105 duration-100 cursor-pointer inline-block "
        >
          <ion-icon name="heart-dislike-outline"></ion-icon>
        </span>
        <span
          onClick={() => {
            updateWatchlist();
          }}
          className={`mx-3 text-gray-500 hover:scale-105 duration-100 cursor-pointer inline-block      `}
        >
          {/* ${            inwatchlist ? "text-xl  " : "text-5xl "          } */}
          <ion-icon name="bookmark-outline"></ion-icon>
        </span>
      </div>
      <div>
        <div className="flex justify-start">
          <span
            onClick={() => {
              setOptionAmongFour("overview");
            }}
            className={` my-3 font-semibold  mr-2 capitalize text-base md:text-2xl   duration-500 cursor-pointer ${
              optionAmongFour === "overview" && "border-b-2 pb-1 border-red-600"
            } `}
          >
            Overview
          </span>
          <span
            onClick={() => {
              setOptionAmongFour("cast");
            }}
            className={` my-3 mx-2 font-semibold md:mx-5 capitalize  text-base md:text-2xl   duration-500 cursor-pointer ${
              optionAmongFour === "cast" && "border-b-2 pb-1 border-red-600"
            } `}
          >
            cast
          </span>
          <span
            onClick={() => {
              setOptionAmongFour("moreinfo");
            }}
            className={`my-3  ${
              optionAmongFour === "moreinfo" && "border-b-2 pb-1 border-red-600"
            } mx-2 md:mx-5 capitalize  text-base md:text-2xl   duration-500 cursor-pointer font-semibold`}
          >
            more info
          </span>
          <span
            onClick={() => {
              setOptionAmongFour("wheretowatch");
            }}
            className={`my-3     ${
              optionAmongFour === "wheretowatch" &&
              "border-b-2 pb-1 border-red-600"
            }   mx-2 md:mx-5 capitalize  text-base md:text-2xl   duration-500 cursor-pointer font-semibold`}
          >
            where to watch{" "}
          </span>
        </div>
        <div className="text-start ">
          {optionAmongFour === "wheretowatch" &&
            (provider.hasOwnProperty("rent") ||
            provider.hasOwnProperty("buy") ? (
              <div className=" pt-5 duration-5000  grid grid-cols-5 ">
                <div className="col-span-2 ">
                  <span className="block mb-3 text-2xl capitalize ">
                    select mode
                  </span>
                  <select
                    className=" px-2 py-1  text-lg border rounded "
                    value={watchMode}
                    onChange={handleSelectChange}
                  >
                    <option value="rent">Rent</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
                <div className="  col-span-3  w-full ">
              
                  <span className="block  text-2xl  capitalize  ">
                    {watchMode} options{" "}
                  </span>
                  <div className="py-3 inline-block  w-full  grid grid-cols-3">
                    {(provider.hasOwnProperty("rent") ||
                      provider.hasOwnProperty("buy")) &&
                      provider[watchMode].map((name, index) => {
                        return (
                          <div
                            className={` my-3 inline-block cursor-pointer hover:scale-105 duration-300    ${
                              index % 3 !== 0 && "mx-6 "
                            }`}
                          >
                            <img
                              className=" h-8  w-8 rounded-full"
                              src={`https://image.tmdb.org/t/p/original${
                                name && name.logo_path
                              }`}
                            />
                            <span className="text-sm text-gray-500 mt-2 block duration-100">
                              {name.provider_name}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {provider.hasOwnProperty("flatrate") && (
                  <div className="grid grid-cols-3 ">
                    {" "}
                    <div className="col-span-1">Flatrate </div>
                    <div className="col-span-2">Flatrate </div>
                  </div>
                )}
              </div>
            ))}
          {optionAmongFour === "cast" && <div className="px-5 my-5">Cast</div>}
          {optionAmongFour === "moreinfo" && (
            <div className=" ">
              {movie.adult && (
                <span className=" block text-white bg-red-500 inline-block  px-3  py-1 rounded-full">
                  Adult Content
                </span>
              )}
              <div className="mt-3">
                <span className="block text-lg font-bold mb-1 capitalize">
                  Production Company
                </span>
                <div className="grid grid-cols-3">
                  {movie.production_companies.map((company, index) => {
                    return (
                      <span
                        className={`block col-span-1 my-1 py-1 px-3 inline-block mx-1 text-sm  duration-300 text-gray-500 cursor-pointer  hover:scale-105 border border-gray-200`}
                      >
                        {company.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="mt-3">
                <span className="block text-lg font-bold mb-1 capitalize">
                  Production Country
                </span>
                {movie.production_countries.map((country, index) => {
                  return (
                    <span
                      className={`block py-1 px-3 inline-block ${
                        index >= 1 && "mx-2 "
                      }  duration-300 text-gray-500 cursor-pointer  hover:scale-105 border border-gray-200`}
                    >
                      {country.name}
                    </span>
                  );
                })}
              </div>
              <div className="mt-3">
                <span className="block text-lg font-bold mb-1 capitalize">
                  Vote Count
                </span>
                <span className="block text-lg text-gray-500 mb-1 capitalize">
                  {movie.vote_count}
                </span>
              </div>
            </div>
          )}
          {optionAmongFour === "overview" && (
            <div className=" my-5">
              <div>
                <span className="block text-lg font-bold mb-1 ">Genre</span>
                {movie.genres.map((genre, index) => {
                  return (
                    <span
                      onClick={() => {
                        navigate(`/movies/genre/${genre.id}`);
                      }}
                      className={`inline-block py-1 px-3 duration-300 text-gray-500 cursor-pointer  hover:scale-105 border border-gray-200 ${
                        index >= 1 ? "mx-2" : ""
                      }`}
                    >
                      {genre.name}
                    </span>
                  );
                })}
              </div>
              <div className="mt-3">
                <span className="block text-lg font-bold mb-1 ">Plot</span>

                <span
                  className={`inline-block py-1  duration-300 text-gray-600 `}
                >
                  {movie.overview}
                </span>
              </div>
              <div className="grid grid-cols-3 mt-3">
                <div className="mt-3">
                  <span className="block text-lg font-bold mb-1  capitalize ">
                    runtime
                  </span>

                  <span
                    className={`inline-block py-1  duration-300 text-gray-500 cursor-pointer  hover:scale-105 `}
                  >
                    {movie.runtime} min
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-lg font-bold mb-1  capitalize ">
                    rating
                  </span>

                  <span
                    className={`inline-block py-1  duration-300 text-gray-500 cursor-pointer  hover:scale-105 `}
                  >
                    {movie.vote_average}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="block text-lg font-bold mb-1  capitalize ">
                    Release Year
                  </span>

                  <span
                    className={`inline-block py-1  duration-300 text-gray-500 cursor-pointer  hover:scale-105 `}
                  >
                    {movie.release_date}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}