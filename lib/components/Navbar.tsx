import Button, { ButtonProps } from './Button';

export interface NavbarProps {
  primaryButtonProps?: ButtonProps;
  logo?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ primaryButtonProps, logo }) => {
  return (
    <nav className="p-4 flex items-center justify-between border-bottom h-16 shadow-md mb-4">
      <div className="text-neutral-500 text-lg font-bold">
        <p className="font-bold text-20">{logo}</p>
      </div>

      <div className="flex-grow flex justify-center">
        <a href="#" className="text-neutral-500 mx-4 hover:text-primary-500">
          Home
        </a>
        <a href="#" className="text-neutral-500 mx-4 hover:text-primary-500">
          About
        </a>
        <a href="#" className="text-neutral-500 mx-4 hover:text-primary-500">
          Services
        </a>
        <a href="#" className="text-neutral-500 mx-4 hover:text-primary-500">
          Pricing
        </a>
        <a href="#" className="text-white mx-4 hover:text-blue-500">
          Contact
        </a>
      </div>

      <div className="flex justify-end">
        <Button {...primaryButtonProps} />
      </div>
    </nav>
  );
};

export default Navbar;
