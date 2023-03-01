import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: window.location.href.split("/")[5],
      genre_movies: [],
    };
  }
  getMoviesByGenre = async () => {
    const randomNum = Math.floor(Math.random() * 4);
    let id = this.state.genre;
    if (this.state.genre !== undefined) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${this.state.genre}&page=${randomNum}`;
      if (id !== undefined) {
        try {
          let response = await axios.get(`${url}`);

          this.setState({ genre_movies: response.data.results });
        } catch (error) {}
      }
    }
  };
  loadMore = async () => {
    const randomNum = Math.floor(Math.random() * 5) + 5;
    let id = this.state.genre;
    if (this.state.genre !== undefined) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=${this.state.genre}&page=${randomNum}`;
      if (id !== undefined) {
        try {
          let response = await axios.get(`${url}`);

          let first = this.state.genre_movies;
          response.data.results.map((movie, index) => {
            first.push(movie);
          });
          this.setState({ genre_movies: first });
        } catch (error) {}
      }
    }
  };
  componentDidMount() {
    this.getMoviesByGenre();
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.genre_movies.length > 0 ? (
          <div className=" text-start px-1 my-8 mx-1">
            <span className="capitalize font-semibold  text-4xl  block px-3">
              More thriller movies
            </span>
            <span className="px-8 mt-3 block  ">
              {/* Movies similar to - {movie.original_title} */}
            </span>
            <div className="py-3  px-3 grid grid-cols-5 ">
              {this.state.genre_movies.map((reco, index) => {
                return (
                  <div
                    className={` col-span-4 md:col-span-2 lg:col-span-1 h-96 brightness-50 mx-0.5 my-0.5 bg-cover cursor-pointer  duration-100 bg-center bg-no-repeat rounded shadow-lg bg-[url(https://image.tmdb.org/t/p/original${
                      reco && reco.backdrop_path
                    })]  `}
                    onClick={() => {
              
                      window.location.href = `http://localhost:3000/movie/${reco.id}`;
                      // navigate(`/movie/${reco.id}`);
                    }}
                  >
                    <div className="flex flex-col h-full">
                      {" "}
                      <div className="flex justify-between px-2 mt-1 font-semibold text-white ">
                        <span className=" brightness-200 hover:bg-gray-100 hover:px-3 hover:py-1 duration-200 hover:brightness-125 hover:rounded-full hover:text-black">
                          {reco.original_title}
                        </span>
                        <span className="text-sm brightness-200 hover:bg-gray-100 hover:px-3 hover:py-1 duration-200 hover:brightness-125 hover:rounded-full hover:text-black">
                          {reco.vote_average}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                onClick={() => {
                  this.loadMore();
                }}
                className={`flex items-center hover:scale-105  justify-center h-72 brightness-50 mx-0.5 my-0.5 bg-cover cursor-pointer  duration-100 bg-center bg-no-repeat rounded shadow-lg bg-gray-100 `}
              >
                <span className="block">load more</span>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
