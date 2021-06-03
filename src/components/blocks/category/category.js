import React from "react";
import { IoMdAlert } from "react-icons/io";
import { RiTimeFill, RiEmotionFill, RiMentalHealthFill } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import "./../styles.scss";

function Category(props) {
  let iconCategory = props.category;

  const iconSize = "3.5em";

  let icon = "";

  if (iconCategory === "interest") {
    icon = <IoMdAlert size={iconSize} />;
  } else if (iconCategory === "location") {
    icon = <MdLocationOn size={iconSize} />;
  } else if (iconCategory === "time") {
    icon = <RiTimeFill size={iconSize} />;
  } else if (iconCategory === "mood") {
    icon = <RiEmotionFill size={iconSize} />;
  } else if (iconCategory === "health") {
    icon = <RiMentalHealthFill size={iconSize} />;
  } else {
    icon = <FaMap size={iconSize} />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center block block-category">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: .3 }}>
      {icon}
      </motion.div>
    </div>
  );
}
export default Category;
