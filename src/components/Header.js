import React from "react";
import { Nav } from "./Nav";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-10  sticky top-0">
      <div></div>
      <Nav
        containerStyles="hidden xl:flex gap-x-5 items-center text-xl justify-center font-bold static"
        linkStyles=""
        underlineStyles=""
      />
      {/* shopping cart */}
      <ShoppingCartIcon className="w-10 h-10 cursor-pointer hover:text-red-700" />
    </div>
  );
};
