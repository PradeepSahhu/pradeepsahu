import { Nav } from "./heading.js";
import Link from "next/link.js";

export default function Heading() {
  return (
    <div className="mt-3 fixed bg-black">
      <div className="flex gap-x-5 bg-black">
        {Nav.map((eachItem) => (
          <Link
            href={`${eachItem.link}`}
            className={`px-3 py-2 bg-gradient-to-br from-blue-600 to-green-600 bg-blue-600 rounded-xl duration-300 transition-all ease-in-out hover:scale-110 `}
          >
            {eachItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
