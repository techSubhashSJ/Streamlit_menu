import React from "react";
import { styled } from "baseui";
import Submenu from "./Submenu";
import { Streamlit } from "streamlit-component-lib";

const MenuBody = ({
  title,
  children,
  child,
  id,
  collapsible,
  activeMenuId,
  setActiveMenuId,
  active,
  submenuStyle,
  mainMenuStyle,
  submenuParaentColor,
  setSubmenuParaentColor
}) => {

  return (
    <>
      {child ? (
        <Submenu
          title={title}
          children={children}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          child={child}
          collapsible={collapsible}
          submenuStyle={submenuStyle}
          mainMenuStyle={mainMenuStyle}
          submenuParaentColor={submenuParaentColor}
          setSubmenuParaentColor={setSubmenuParaentColor}
        />
      ) : (
        <StyledMenuItem
          $active={active}
          title={title}
          main_menu_style={mainMenuStyle}
          onClick={() => {
            Streamlit.setComponentValue(title);
            setActiveMenuId(id);
            setSubmenuParaentColor(null);
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
  fontFamily: props.main_menu_style?.fontFamily
    ? props.main_menu_style?.fontFamily
    : "inherit",
  // background: props.$active
  //   ? props.main_menu_style?.activeMenu?.backgroundColor
  //     ? props.main_menu_style?.activeMenu?.backgroundColor
  //     : "#b4cdf0"
  //   : "none",
  color: props.$active
    ? props.main_menu_style?.activeMenu?.color
      ? props.main_menu_style?.activeMenu?.color
      : "blue"
    : props.main_menu_style?.color
    ? props.main_menu_style?.color
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
    background: props.main_menu_style?.hover?.backgroundColor
      ? props.main_menu_style?.hover?.backgroundColor
      : "#b4cdf0",
    color: props.main_menu_style?.hover?.color
      ? props.main_menu_style?.hover?.color
      : "blue",
    borderLeft: `4px solid ${
      props.main_menu_style?.hover?.color
        ? props.main_menu_style?.hover?.color
        : "blue"
    }`,
  },
}));
