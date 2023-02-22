import Hamburber from "../Hamburger";
export default function Navbar() {
  return (
    <nav className="flex p-8 text-4xl font-Jaldi bg-slate-800">
      <Hamburber />
      <div className="LARGE NAV hidden lg:flex flex-1">
        <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
          DM
        </p>
        <div className="flex ml-auto gap-12">
          <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
            PORTFOLIO
          </p>
          <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
            SKILLS
          </p>
          <p className="text-white cursor-pointer hover:border-b-2 hover:-mb-2 hover:border-teal-600">
            CONTACT
          </p>
        </div>
      </div>
    </nav>
  );
}
