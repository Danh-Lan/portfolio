import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <nav className="bg-gray-100 text-black p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to={`/`} className="hover:text-blue-500 transition-colors duration-300">Portfolio</Link>
        </div>
        <div className="flex gap-8">
          <a href={`${baseUrl}/CV.pdf`} className="font-bold hover:text-blue-500 transition-colors duration-300">CV</a>
          <Link to={`/about-me`} className="font-bold hover:text-blue-500 transition-colors duration-300">À propos de moi</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;