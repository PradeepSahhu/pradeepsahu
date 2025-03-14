"use client";
import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: "NFT Marketplace Canvas",
    projectDescription: "NFT Marketplace Canvas is a decentralized platform...",
    githubLink: "https://github.com/PradeepSahhu/CodeAnt_AI",
    date: new Date().toISOString().split("T")[0],
    links: "https://codeant-ai-plum.vercel.app/",
    tags: "Solidity, React, Next.JS, Javascript, Etherlink",
  });

  const [projectImages, setProjectImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProjectImagesChange = (e) => {
    if (e.target.files) {
      setProjectImages(Array.from(e.target.files));
    }
  };

  const handleMainImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMainImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Project images:", projectImages);
    console.log("Main image:", mainImage);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Project Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Name */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              projectName
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">Text</div>
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
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="projectDescription"
              className="block text-sm font-medium text-gray-700"
            >
              projectDescription
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">Text</div>
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
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="projectImages"
              className="block text-sm font-medium text-gray-700"
            >
              ProjectImages
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">File</div>
          <div className="flex-grow">
            <div className="flex items-center">
              <input
                type="file"
                id="projectImages"
                name="projectImages"
                multiple
                onChange={handleProjectImagesChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="ml-2 text-yellow-500">
                {projectImages.length > 0
                  ? `${projectImages.length} files`
                  : "Select files"}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="githubLink"
              className="block text-sm font-medium text-gray-700"
            >
              githubLink
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">Text</div>
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
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              date
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">Text</div>
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
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="links"
              className="block text-sm font-medium text-gray-700"
            >
              links
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">Text</div>
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
          <div className="w-8 h-8 mr-4 flex-shrink-0">
            <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4">
            <label
              htmlFor="mainImage"
              className="block text-sm font-medium text-gray-700"
            >
              mainImage
            </label>
          </div>
          <div className="w-1/4 text-sm text-gray-500">File</div>
          <div className="flex-grow">
            <input
              type="file"
              id="mainImage"
              name="mainImage"
              onChange={handleMainImageChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="mt-1 text-sm text-gray-500">
              {mainImage ? mainImage.name : "Select files"}
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center">
            <div className="w-8 h-8 mr-4 flex-shrink-0">
              <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="w-1/4">
              <label htmlFor="tags" className="block">
                Tags
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
