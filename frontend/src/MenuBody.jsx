import React, { useState } from "react";
import { styled } from "baseui";
import Submenu from "./Submenu";
import { Streamlit } from "streamlit-component-lib";

const MenuBody = ({
  title,
  children,
  child,
  id,
  collapsable,
  activeMenuId,
  setActiveMenuId,
  active,
  submenuStyle,
  mainMenuStyle,
}) => {
  return (
    <>
      {child !== "None" ? (
        <Submenu
          title={title}
          children={children}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          child={child}
          collapsable={collapsable}
          submenuStyle={submenuStyle}
          mainMenuStyle={mainMenuStyle}
        />
      ) : (
        <StyledMenuItem
          $active={active}
          title={title}
          mainMenuStyle={mainMenuStyle}
          onClick={() => {
            Streamlit.setComponentValue(title);
            setActiveMenuId(id);
          }}
        >
          {children}
          {title}
        </StyledMenuItem>
      )}
    </>
  );
};

export default MenuBody;

const StyledMenuItem = styled("div", (props) => ({
  padding: "1.25rem 2rem",
  fontFamily: props.mainMenuStyle?.fontFamily
    ? props.mainMenuStyle?.fontFamily
    : "inherit",
  background: props.$active
    ? props.mainMenuStyle?.activeMenu?.backgroundColor
      ? props.mainMenuStyle?.activeMenu?.backgroundColor
      : "#b4cdf0"
    : "none",
  color: props.$active
    ? props.mainMenuStyle?.activeMenu?.color
      ? props.mainMenuStyle?.activeMenu?.color
      : "blue"
    : props.mainMenuStyle?.color
    ? props.mainMenuStyle?.color
    : "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  width: "100%",
  borderLeft: "4px solid transparent",
  ":hover": {
    background: props.mainMenuStyle?.hover?.backgroundColor
      ? props.mainMenuStyle?.hover?.backgroundColor
      : "#b4cdf0",
    color: props.mainMenuStyle?.hover?.color
      ? props.mainMenuStyle?.hover?.color
      : "blue",
    borderLeft: `4px solid ${
      props.mainMenuStyle?.hover?.color
        ? props.mainMenuStyle?.hover?.color
        : "blue"
    }`,
  },
}));
