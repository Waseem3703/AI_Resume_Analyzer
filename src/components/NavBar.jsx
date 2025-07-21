function NavBar() {
  return (
    <>
      <nav>
        <div className="flex shadow-sm p-6 ">
          <ul className="flex gap-10 text-gray-800 dark:text-gray-300 text-lg cursor-pointer">
            <li className="hover:text-[#5f4dc7]">Resume</li>
            <li className="hover:text-[#5f4dc7]">Pricing</li>
            <li className="hover:text-[#5f4dc7]">Cover Letter</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
