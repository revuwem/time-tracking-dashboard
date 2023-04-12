type NavProps = React.PropsWithChildren & {};
type NavComponent = React.FC<NavProps> & {
  Item: NavItemComponent;
};

const Nav: NavComponent = ({ children }) => {
  return (
    <nav className="p-8 pt-12 bg-blue-pale dark:bg-blue-dark rounded">
      <ul className="flex justify-center md:flex-col gap-5">{children}</ul>
    </nav>
  );
};

type NavItemProps = React.PropsWithChildren & { active?: boolean };
type NavItemComponent = React.FC<NavItemProps> & {};

const NavItem: NavItemComponent = ({ active = false, children }) => {
  return (
    <li
      className={`hover:text-black dark:hover:text-white hover:cursor-pointer ${
        active ? "text-black dark:text-white" : "text-blue-desaturated"
      } `}
    >
      {children}
    </li>
  );
};

Nav.Item = NavItem;

export default Nav;
