import { formatNumber } from "@/utils/helpers";
import { FiSettings } from "react-icons/fi";

const Header = ({ total }: { total: number }) => {
  return (
    <header className="w-full flex items-center justify-between">
      <div>
        <h1 className="text-white font-bold text-2xl md:text-3xl">
          Social Media Dashboard
        </h1>
        <p className="text-gray-one md:text-lg font-medium">
          Total followers: {formatNumber(total)}
        </p>
      </div>

      <div className="bg-white p-2 rounded-md cursor-pointer">
        <FiSettings className="text-black w-6 h-6" />
      </div>
    </header>
  );
};

export default Header;
