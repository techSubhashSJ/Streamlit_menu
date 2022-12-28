import { useStyletron } from "baseui";
import React from "react";

const MenuIcon = ({ icon }) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1.5rem",
        height: "1.5rem",
        marginRight: "0.5rem",
      })}
    >
      <i className={icon} />
    </div>
  );
};

export default MenuIcon;
