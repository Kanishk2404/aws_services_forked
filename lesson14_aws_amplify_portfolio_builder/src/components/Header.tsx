import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-gray-300">Skills</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-300">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
