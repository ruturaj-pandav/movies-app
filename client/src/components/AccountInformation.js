import React from "react";
import moment from "moment";
export default function AccountInformation({ accountinformation }) {
  return (
    <div className="px-10 ">
      <div className="block text-start text-3xl  w-1/2 mx-auto ">
        <div className="my-4 ">
          <span className="text-[#E50914] block text-lg  my-1 ">
            First name
          </span>
          <span>{accountinformation.firstName}</span>
        </div>

        <div className="my-4 ">
          <span className="text-[#E50914] block text-lg  my-1 ">Last name</span>
          <span>{accountinformation.lastName}</span>
        </div>
        <div className="my-4 ">
          <span className="text-[#E50914] block text-lg  my-1 ">Age</span>
          <span>{accountinformation.age}</span>
        </div>

        <div className="my-4 ">
          <span className="text-[#E50914] block text-lg  my-1 ">
            Created at
          </span>
          <span>{moment(accountinformation.createdAt).format('DD MMMM YYYY')}</span>
        </div>
        <div className="my-4 ">
          <span className="text-[#E50914] block text-lg  my-1 ">Email </span>
          <span>{accountinformation.email}</span>
        </div>
        <div className="my-4 grid grid-cols-2 ">
          <div>
            <span className="text-[#E50914] block text-lg  my-1 ">
              Liked movies{" "}
            </span>
            <span>{accountinformation.likes.length}</span>
          </div>
          <div className="my-4 ">
            <span className="text-[#E50914] block text-lg  my-1 ">
              Movies in watchlist{" "}
            </span>
            <span>{accountinformation.watchlist.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
