import React from "react";
import {
  Typography
} from "@material-tailwind/react";

function NavItem({ children, url }) {
    return (
      <li>
        <Typography
          as="a"
          href={url}
          variant="paragraph"
          color="blue-gray"
          className="text-blue-gray-700 flex items-center gap-2 font-medium ml-5"
        >
          {children && children}
        </Typography>
      </li>
    );
  }

  export default NavItem;