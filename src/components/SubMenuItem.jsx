const SubMenuItem = ({ item, onMouseEnter, isActive }) => {
  return (
    <li
      key={item.title}
      className={`flex transform transition-transform duration-300 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={onMouseEnter}
      style={{
        transitionDelay: `${isActive ? 0 : 50}ms`,
      }}
    >
      {item.link ? (
        <a
          href={item.link}
          className="px-4 py-2 text-base text-gray hover:text-white hover:bg-gray-100 cursor-pointer rounded-sm w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      ) : (
        <span className="px-4 py-2 text-base text-gray hover:text-white hover:bg-gray-100 cursor-pointer rounded-sm w-full">
          {item.title}
        </span>
      )}
    </li>
  );
};

export default SubMenuItem;
