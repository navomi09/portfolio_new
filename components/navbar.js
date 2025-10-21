export default function NavBar({ setSelectedComponent }) {
  return (
    <nav className="mt-6  md:w-40 font-bold opacity-90">
      <ul className="flex flex-row md:flex-col flex-nowrap space-x-3 md:space-x-0 md:space-y-3 text-sm font-mono overflow-x-auto">

        {['About Me', "Tech Stack", 'Projects'].map((item) => (
          <li
            key={item}
            className="border-2 border-gray-500 p-2 cursor-pointer hover:border-[#ffc1cc]"
            onClick={() => setSelectedComponent(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
