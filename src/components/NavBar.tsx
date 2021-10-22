import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/Logo.svg";

export const NavBar = () => {
  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
        <Link to="/" className="transition duration-500 ease-in-out">
          <Logo height={32} width={32} />
        </Link>
      </div>
    </div>
  );
};
