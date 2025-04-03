import Link from "next/link";

export default function ProjectMenu() {
  return (
    <div className="flex gap-5 py-10 mx-10">
      <button className="px-5 py-2 bg-gray-700 rounded-md">Edit Project</button>
      <Link
        className="px-5 py-2 bg-gray-700 rounded-md"
        href={`./DeleteProject`}
      >
        Delete Project
      </Link>
      <Link href={`./UploadProject`} className="px-5 py-2">
        Add Project Project
      </Link>
    </div>
  );
}
