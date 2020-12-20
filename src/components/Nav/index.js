import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Sarah Gambles
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

// function Nav(props) {

//     // useEffect(() => {
//     //     document.title = capitalizeFirstLetter(currentCategory.name);
//     // }, [currentCategory]);

//     // const {
//     //     categories = [],
//     //     setCurrentCategory,
//     //     currentCategory,
//     // } = props;

//     return (
//         <header className="flex-row px-1">
//             <h2>
//                 <a data-testid="link" href="/">
//                 <img src={coverImage} className="my-2" style={{ width: "35%" }} alt="cover" />
//                 </a>
//             </h2>
//             <nav>
//             <ul className="flex-row">
//                 <li className="mx-2">
//                     <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
//                         About me
//                     </a>
//                 </li>
//                 <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                
//                     <span onClick={() => setContactSelected(true)}>Contact</span>
//                 </li>
//                 {categories.map((category) => (
//                     <li
//                     className={`mx-1 ${
//                         currentCategory.name === category.name && !contactSelected && 'navActive'
//                     }`}
//                     key={category.name}
//                     >
//                         <span
//                         onClick={() => {
//                             setCurrentCategory(category);
//                             setContactSelected(false);
//                         }}
//                         >
//                             {capitalizeFirstLetter(category.name)}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//             </nav>
//         </header>
//     );
// }

export default Nav;