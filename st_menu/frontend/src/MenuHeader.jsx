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
      background={styles?.background}
      flex_direction={styles?.flexDirection}
      fontSize={styles?.fontSize}
      height={styles?.height}
    >
      <img
        className={css({
          width: `${styles?.logo?.width ? styles?.logo?.width : "2rem"}`,
          height: `${styles?.logo?.height ? styles?.logo?.height : "2rem"}`,
          marginRight: "0.5rem",
          borderRadius: `${styles?.logo?.borderRadius ? styles?.logo?.borderRadius : "0"}`,
        })}
        src={`data:image/png;base64, ${appLogo}`}
        alt="logo"
      />
     <p className={css({ margin: "0"})}> {appName}</p>
    </Logo>
  );
};

export default MenuHeader;

const Logo = styled("div", (props) => ({
  padding: "1rem 1rem",
  height: props.height ? props.height : "4rem",
  display: "flex",
  flexDirection: props.flex_direction ? props.flex_direction : "row",
  alignItems: "center",
  justifyContent: props.justify ? props.justify : "start",
  fontFamily: props.fontFamily
    ? props.fontFamily
    : '"Times New Roman", Times, serif',
  fontSize: props.fontSize ? props.fontSize : "1.7rem",
  fontWeight: "bold",
  boxSizing: "border-box",
  background: props.background ? props.background : "none",
  color: props.color && props.color !== "" ? props.color : "black",
}));
