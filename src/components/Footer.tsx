import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="text-green-400 flex items-center justify-around px-4 py-6">
      <Link
        className="transition duration-500 ease-in-out hover:text-gray-400"
        to="https://github.com/djacoshenk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiGithub size={32} />
      </Link>
      <Link
        className="transition duration-500 ease-in-out hover:text-gray-400"
        to="https://github.com/djacoshenk"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FiLinkedin size={32} />
      </Link>
      <Link className="transition duration-500 ease-in-out hover:text-gray-400" to="mailto:hello@dannyjaco.me">
        <FiMail size={32} />
      </Link>
    </div>
  );
};
