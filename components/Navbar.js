import  Link  from "next/link";

import { useState } from "react";
const Navbar = () => {
  const [toggleShow, setToggleShow] = useState(false);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler btn-collapses mx-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setToggleShow(!toggleShow);
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${toggleShow ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-3">
            <Link className="nav-link" href="#">
              الرئيسية <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" href="#">
              التصنيفات
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" href="#">
              مشترياتي
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" href="#">
              حسابي
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-3">
        <button className="btn my-2 text-white" type="submit">
          <i className="fas fa-heart"></i>
        </button>
        <button className="btn my-2 text-white" type="submit">
          <i className="fas fa-bell"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
