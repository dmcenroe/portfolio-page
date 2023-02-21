export default function Navbar() {
  return (
    <nav className="flex gap p-8 text-4xl font-Jaldi">
      <p className="cursor-pointer hover:border-b hover:-mb-px">DM</p>
      <div className="flex ml-auto gap-12">
        <p className="cursor-pointer hover:border-b hover:-mb-px">PORTFOLIO</p>
        <p className="cursor-pointer hover:border-b hover:-mb-px">SKILLS</p>
        <p className="cursor-pointer hover:border-b hover:-mb-px">CONTACT</p>
      </div>
    </nav>
  );
}
