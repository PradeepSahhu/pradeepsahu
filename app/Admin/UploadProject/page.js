"use client";
import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setformData] = useState({
    projectName: "",
    projectDescription: "",
    githubLink: "",
    date: new Date().toISOString().split("T")[0],
    links: "",
    tags: "",
    projectImages: [],
    mainImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: name === "mainImage" ? files[0] : Array.from(files),
    }));
  };

  const handleSubmit = async (e) => {
    // merging not working
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Project images:", projectImages);
    console.log("Main image:", mainImage);

    const data = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      if (key !== "projectImages" && key !== "mainImage") {
        data.append(key, formData[key]);
      }
    });

    // Ensure projectImages is always an array
    if (formData.projectImages && formData.projectImages.length > 0) {
      formData.projectImages.forEach((file) => {
        data.append("ProjectImages", file);
      });
    } else {
      data.append("ProjectImages", ""); // Handle empty case
    }

    // Append main image
    if (formData.mainImage) {
      data.append("mainImage", formData.mainImage);
    }
    // for (let [key, value] of data.entries()) {
    //   console.log(`${key} : `, value);
    // }
    // for (let [key, value] of data.entries()) {
    //   console.log(`${key}:`, value);
    // }

    try {
      const res = await fetch(`${process.env.API}addNewProject`, {
        // const res = await fetch(`http://localhost:8000/addNewProject`, {
        method: "POST",
        credentials: "include",
        body: data, // No need to set Content-Type
      });

      if (!res.ok) {
        console.error("Error adding project");
      } else {
        console.log("Project added successfully");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md text-black mt-10 dark:bg-black dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Project Details</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-white dark:shadow-2xl"
      >
        {/* Project Name */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              projectName
            </label>
          </div>

          <div className="flex-grow">
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="projectDescription"
              className="block text-sm font-medium text-gray-700"
            >
              projectDescription
            </label>
          </div>

          <div className="flex-grow">
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Project Images */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="projectImages"
              className="block text-sm font-medium text-gray-700"
            >
              ProjectImages
            </label>
          </div>

          <div className="flex-grow">
            <div className="flex items-center">
              <input
                type="file"
                id="projectImages"
                name="projectImages"
                multiple
                onChange={handleFileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="ml-2 text-black dark:text-white">
                {formData.projectImages.length > 0
                  ? `${formData.projectImages.length} files`
                  : "Select files"}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="githubLink"
              className="block text-sm font-medium text-gray-700"
            >
              githubLink
            </label>
          </div>

          <div className="flex-grow">
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              date
            </label>
          </div>

          <div className="flex-grow">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="links"
              className="block text-sm font-medium text-gray-700"
            >
              links
            </label>
          </div>

          <div className="flex-grow">
            <input
              type="url"
              id="links"
              name="links"
              value={formData.links}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="mainImage"
              className="block text-sm font-medium text-gray-700"
            >
              mainImage
            </label>
          </div>

          <div className="flex-grow">
            <input
              type="file"
              id="mainImage"
              name="mainImage"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="mt-1 text-sm text-gray-500">
              {formData.mainImage ? formData.mainImage.name : "Select files"}
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="flex items-center">
          <div className="w-1/4">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
          </div>

          <div className="flex-grow">
            <input
              type="text"
              id="tags"
              name="tags"
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </form>

      <button
        className="px-5 py-2 dark:bg-[#86de22] font-bold text-white  dark:text-black rounded-xl bg-[#86de22]"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ProjectForm;
