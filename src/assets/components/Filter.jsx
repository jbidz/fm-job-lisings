import React from "react";

function Filter({ filterName, removeFilter }) {
  return (
    <div className="flex bg-custom-cyan-100 rounded-sm overflow-hidden">
      <span className="px-2 rounded-md font-bold text-primary">
        {filterName}
      </span>
      <button
        className="bg-primary text-white px-2 hover:bg-custom-cyan-700 transition"
        onClick={() => removeFilter(filterName)}
      >
        x
      </button>
    </div>
  );
}

export default Filter;
