import React from "react";

function JobCard({
  logo,
  company,
  latest,
  featured,
  position,
  postedAt,
  contract,
  location,
  tags,
  addFilter,
}) {
  return (
    <div className="bg-white flex flex-col md:flex-row md:items-center gap-[24px] py-[32px] px-[40px] rounded-lg shadow-xl shadow-custom-cyan-300 relative">
      <img
        src={logo}
        width={88}
        height={88}
        className="absolute -top-[20px] w-[50px] md:static md:w-[88px]"
      />
      <div className="mt-4 md:m-0 border-b-2 md:border-0 pb-4 md:pb-0">
        <div className="flex items-center mb-1">
          <p className="text-primary text-[15px] md:text-lg font-bold">
            {company}
          </p>
          {latest && (
            <span className="ml-4 font-bold text-white text-sm bg-primary px-2 rounded-xl">
              NEW
            </span>
          )}
          {featured && (
            <span className="ml-2 font-bold text-white text-sm bg-custom-cyan-700 px-2 rounded-xl">
              FEATURED
            </span>
          )}
        </div>
        <h3 className="text-[15px] md:text-[22px] font-bold text-custom-cyan-700 mb-1 hover:text-primary transition cursor-pointer">
          {position}
        </h3>
        <ul className="text-custom-cyan-500 text-[16px] md:text-lg flex gap-2 lg:gap-4">
          {" "}
          <li>{postedAt}</li> &middot; <li>{contract}</li> &middot;{" "}
          <li>{location}</li>
        </ul>
      </div>
      <ul className="md:ml-auto flex flex-wrap gap-[16px]">
        {tags &&
          tags.map((i, k) => (
            <li
              key={k}
              className="p-2 bg-custom-cyan-100 text-[16px] font-semibold rounded-md text-primary hover:text-white hover:bg-primary transition cursor-pointer"
              onClick={() => addFilter(i)}
            >
              {i}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default JobCard;
