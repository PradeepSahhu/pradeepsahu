"use client";

import { useEffect, useState } from "react";
import Card from "../components/CardComponent/Card";
import NavigationBar from "../components/Navigation/NavigationBar";
import ProjectLoading from "../components/Loaders/ProjectLoading";

export default function Project() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://portfolio-backend-chi-nine.vercel.app/getAll`
        );
        const resData = await response.json(); // Convert response to JSON
        setApiData(resData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <NavigationBar />

      {/* <div className="">
        <button className="bg-slate-700 px-5 py-2">Sort by Name </button>
      </div> */}

      <div className="dark:text-white ml-24 m-10 flex  gap-x-10">
        <button className="dark:bg-orange-600 text-lg rounded-xl px-8 py-2">
          Filter
        </button>
      </div>
      <div className="bg-white text-black dark:bg-black dark:text-white flex flex-wrap mx-10 my-10 ml-24">
        {loading ? (
          <ProjectLoading />
        ) : (
          // <EarthWithSatellites />
          apiData.map((eachData) => (
            <Card
              imageSrc={`${eachData.mainImage}`}
              key={`${eachData["_id"]}`}
              goto={`/Projects/${eachData._id}`}
              title={`${eachData.projectName} `}
              description={`${eachData.projectDescription}`}
              link={`${eachData.links}`}
              githublink={`${eachData.githubLink}`}
              allData={`${eachData}`}
              clickedOnIt={`${eachData["_id"]}`}
            />
          ))
        )}
        <p>This section is undermaintenance</p>
        {/* {[7].map(() => (
          // <Card goto={"./Projects/thisiduniqueid"} />
        ))} */}
      </div>
    </div>
  );
}
