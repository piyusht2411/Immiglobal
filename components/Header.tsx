"use client";

import React, { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

const Header = () => {
  const [hideTopbar, setHideTopbar] = useState(false);
  return (
    <>
      <AnnouncementBar setDismissed={setHideTopbar} dismissed={hideTopbar} />
      <Navbar isTopbarVisible={hideTopbar} />
    </>
  );
};

export default Header;
