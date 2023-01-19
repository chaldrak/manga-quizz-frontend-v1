import { NavLink } from "react-router-dom";

export default function BaseCard({ id, name, image }) {
  return (
    <NavLink
      to={`/${name}/game`}
      state={{ id: id }}
      className="group flex h-56 w-96 cursor-pointer items-center justify-center bg-white hover:bg-blue-gray-200"
    >
      <img
        src={image}
        loading="lazy"
        alt="Naruto logo"
        className="group-hover:scale-110 group-hover:transition-all group-hover:duration-500 group-hover:ease-linear"
      />
    </NavLink>
  );
}
