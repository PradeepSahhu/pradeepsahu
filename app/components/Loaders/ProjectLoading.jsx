import "../../Projects/loadingScreen.css";

const ProjectLoading = () => {
  return (
    <div>
      <div className={`container`}>
        <div className={`box `}></div>

        <div className="absolute top-80 left-80">
          <p className="text-white">Project Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLoading;
