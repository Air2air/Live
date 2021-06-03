import React from "react";
import { motion } from "framer-motion";
import "./../styles.scss";

const Confidence = (props) => (

  <motion.div
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ ease: "easeOut", duration: .2, delay: .3 }}>
  <div className="d-flex flex-column align-items-center justify-content-end block block-confidence">
    <div className="align-items-center justify-items-center value p-0">
      {props.level}
      <span>%</span>
    </div>
    <div className="align-items-center justify-items-center label p-0">Confidence</div>
  </div>
  </motion.div>
);

export default Confidence;
