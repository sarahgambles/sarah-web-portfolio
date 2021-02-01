import React from 'react';
import coverImage from "../assets/cover/cover-image.png";

function Header() {
    return (
        <div>
    <div className="container-fluid">
     <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
   </div>
   </div>
    )
}

export default Header;
     
     