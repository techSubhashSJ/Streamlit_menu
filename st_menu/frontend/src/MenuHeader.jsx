import React from "react";
import { styled, useStyletron } from "baseui";

const MenuHeader = (props) => {
  const { appLogo, appName, styles } = props;

  const [css] = useStyletron();

  return (
    <Logo
      justify={styles?.justify}
      fontFamily={styles?.fontFamily}
      color={styles?.color}
    >
      <img
        className={css({
          width: "2rem",
          height: "2rem",
          marginRight: "0.5rem",
        })}
        src={`data:image/png;base64, ${appLogo}`}
        alt="logo"
      />
      {appName}
    </Logo>
  );
};

export default MenuHeader;

const Logo = styled("div", (props) => ({
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: props.justify ? props.justify : "start",
  fontFamily: props.fontFamily
    ? props.fontFamily
    : '"Times New Roman", Times, serif',
  fontSize: "1.25rem",
  fontWeight: "bold",
  boxSizing: "border-box",
  background: "none",
  color: props.color && props.color !== "" ? props.color : "black",
}));
