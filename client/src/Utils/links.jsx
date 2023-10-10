//import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";

const links = [
  {
    text: "add job",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    text: "stats",
    path: "stats",
    icon: <IoBarChartSharp />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <RiAdminFill />,
  },
];

export default links;
