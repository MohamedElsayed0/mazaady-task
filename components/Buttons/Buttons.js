import React from 'react'
import styles from "@/styles/Buttons.module.css";

export const Button = ({kind, btnText,withIcon ,type}) => {
  const checkBG = () => {
    switch (kind) {
      case "transparent":
        return styles.transparenBtn;
      case "gradient":
        return styles.gradient;

      case "circle":
        return styles.circleFull;

      default:
        return styles.transparenBtn;
    }
  };

  return (
    <button type={type} className={`${styles.transparenBtn} btn ${checkBG()}`}>
      {withIcon ? <i className={withIcon}></i> : btnText}
    </button>
  );
};
