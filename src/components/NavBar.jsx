function NavBar() {
  return (
    <>
      <nav>
        <div className="flex shadow-sm p-6 ">
          <ul className="flex gap-10 text-gray-700 text-m font-sans font-semibold hover:text-gray-900 cursor-pointer">
            <li>Resume</li>
            <li>Pricing</li>
            <li>Cover Letter</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
