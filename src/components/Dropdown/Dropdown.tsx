import { useState } from "react";

type DropdownProps = React.PropsWithChildren & {};
type DropdownComponent = React.FC<DropdownProps> & {
  Item: DropdownItemComponent;
};

const Dropdown: DropdownComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDropdownClick = () => setIsOpen((state) => !state);

  // TODO: dropdown list should hide when user clicks outside of the dropdown
  return (
    <div className="relative">
      <button onClick={onDropdownClick} className="p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="5">
          <path
            fill="#BBC0FF"
            fillRule="evenodd"
            d="M2.5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-20 right-0">
          <ul
            className="p-5 flex flex-col bg-blue-light rounded whitespace-nowrap"
            role="menu"
          >
            {children}
          </ul>
        </div>
      )}
    </div>
  );
};

type DropdownItemProps = React.PropsWithChildren & {};
type DropdownItemComponent = React.FC<DropdownItemProps>;

const DropdownItem: DropdownItemComponent = ({ children }) => (
  <li className="text-blue-pale py-2 first:pt-0 last:pb-0 hover:text-white">
    {children}
  </li>
);

Dropdown.Item = DropdownItem;

export default Dropdown;
