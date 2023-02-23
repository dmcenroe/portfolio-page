import Hamburber from "../Hamburger";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex p-8 text-4xl font-Jaldi font-bold bg-slate-800">
      <Hamburber />
      <div className="LARGE NAV hidden lg:flex flex-1">
        <Link href={"/"}>
          <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
            DM
          </p>
        </Link>
        <div className="flex ml-auto gap-12">
          <Link href={"/portfolio"}>
            <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
              PORTFOLIO
            </p>
          </Link>
          <Link href={"/skills"}>
            <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
              SKILLS
            </p>
          </Link>
          <Link href={"/contact"}>
            <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
              CONTACT
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
