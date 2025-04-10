import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
  <ul>
<li>
<NavLink to="/">Home</NavLink>
</li>
<li>
  <NavLink to="/fruits/new">Enter a Fruit</NavLink>
  </li>
<li>
  <NavLink to="/fav-fruit">Favorite Fruit</NavLink>
</li>
<li>
  <NavLink to= "/set-fav-fruit">Set Favorite Fruit</NavLink>

</li>
</ul>
  </nav>

  );
};

export default Navigation;