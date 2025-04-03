"use client";

import DeleteCard from "@/app/components/CardComponent/DeleteCard";
import { useState, useEffect } from "react";

const DeleteProjectMenu = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  //   const getTheData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://portfolio-backend-chi-nine.vercel.app/getAll`
  //       );
  //       const resData = await response.json(); // Convert response to JSON
  //       return resData.data;
  //     } catch (error) {
  //       return null;
  //     }
  //   };
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
    <div className="bg-white text-black dark:bg-black dark:text-white flex flex-wrap mx-10 my-10 ml-24">
      {
        // <EarthWithSatellites />
        apiData.map((eachData) => (
          <DeleteCard
            imageSrc={`${eachData.mainImage}`}
            key={`${eachData["_id"]}`}
            goto={`/Projects/${eachData._id}`}
            del={`${eachData._id}`}
            title={`${eachData.projectName} `}
            description={`${eachData.projectDescription}`}
            link={`${eachData.links}`}
            githublink={`${eachData.githubLink}`}
            allData={`${eachData}`}
            clickedOnIt={`${eachData["_id"]}`}
          />
        ))
      }
      {/* {[7].map(() => (
      // <Card goto={"./Projects/thisiduniqueid"} />
    ))} */}
    </div>
  );
};

export default DeleteProjectMenu;
