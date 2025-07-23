import { FaPenAlt } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function ResumeCardItem({ title, features }) {
  return (
    <div className="relative group rounded-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-gray-200 via-gray-300 to-blue-600 mb-6">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4 transition-transform duration-300 group-hover:translate-x-[10px] group-hover:translate-y-[10px]">
        <FaPenAlt className="text-green-500 text-6xl bg-green-100 rounded-full p-3" />
        {title && (
          <h3 className="text-2xl text-black font-semibold flex items-center gap-2">
            <IoIosCheckmarkCircleOutline className="text-green-600 text-xl" />
            {title}
          </h3>
        )}
        {features.map((item, i) => (
          <div key={i} className="text-black flex items-center gap-2">
            <IoIosCheckmarkCircleOutline className="text-green-600 text-xl" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ResumeCardItem;