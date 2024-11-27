import { useState } from "react";
import { data } from "./data.js";
import JobCard from "./assets/components/JobCard.jsx";
import Filter from "./assets/components/Filter.jsx";

function App() {
  const [filters, setFilters] = useState([]);

  function addFilter(filter) {
    if (filters.indexOf(filter) != -1) return;
    setFilters((prev) => {
      return [...prev, filter];
    });
  }

  function removeFilter(filter) {
    let newArray = filters.filter((_, i) => i != filters.indexOf(filter));
    setFilters(newArray);
  }

  function clearFilters() {
    setFilters([]);
  }

  return (
    <>
      <div className="bg-custom-bg-mobile sm:g-custom-bg-desktop bg-primary bg-cover bg-center h-[156px]"></div>
      <main className={`max-w-[1110px] mx-auto mt-[75px] pb-[75px] ${filters.length > 0 ? "-translate-y-28" : ""} px-6 xl:px-0`}>
        {filters.length > 0 && (
          <div className="flex bg-white mb-10 px-[40px] py-[24px] rounded-md shadow-xl shadow-custom-cyan-300">
            <div className="flex flex-wrap gap-4 mr-auto">
              {filters.map((f, k) => {
                return (
                  <Filter removeFilter={removeFilter} filterName={f} key={k} />
                );
              })}
            </div>
            <button
              className="font-bold text-custom-cyan-700 hover:text-primary hover:underline transition"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>
        )}
        <div className="flex gap-[40px] md:gap-[24px] flex-col">
          {data.map((d) => {
            return (
              <JobCard
                key={d.id}
                logo={d.logo}
                company={d.company}
                latest={d.new}
                position={d.position}
                featured={d.featured}
                postedAt={d.postedAt}
                contract={d.contract}
                location={d.location}
                tags={[d.role, d.level, ...d.languages, ...d.tools]}
                addFilter={addFilter}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
