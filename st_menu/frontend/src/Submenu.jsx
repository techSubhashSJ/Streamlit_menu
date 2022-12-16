import React, { useState } from "react";
import { styled } from "baseui";
import { useStyletron } from "styletron-react";
import { Streamlit } from "streamlit-component-lib";

const Submenu = ({
  title,
  children,
  child,
  collapsible,
  setActiveMenuId,
  activeMenuId,
  submenuStyle,
  mainMenuStyle,
  setSubmenuParaentColor,
  submenuParaentColor,
}) => {
  const [css] = useStyletron();
  const [open, setOpen] = useState(false);

  const checkParent = () => {
    let children_ids = child.map((obj) => obj.id);
    return children_ids.includes(activeMenuId);
  };

  return (
    <>
      <StyledSubMenuParent
        title={title}
        main_menu_style={mainMenuStyle}
        onClick={() => setOpen((flag) => !flag)}
        open={open}
        collapsible={collapsible.toString()}
        submenu_parent_color={checkParent() ? submenuParaentColor : null}
      >
        <div
          className={css({
            display: "flex",
          })}
        >
          {children}
          {title}
        </div>
        <div
          className={css({
            display: collapsible ? "block" : "none",
          })}
        >
          {collapsible && open ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </div>
      </StyledSubMenuParent>
      <div
        className={css({
          display: open || !collapsible ? "flex" : "none",
          paddingLeft: "30px",
          flexDirection: "column",
          overflow: "hidden",
          "@media (max-width: 768px)": {
            margin: "0 1.5rem",
          },
        })}
      >
        {child?.map(({ icon, title, id }, index) => (
          <StyledSubMenuItem
            $active={id === activeMenuId}
            title={title}
            submenu_style={submenuStyle}
            key={index}
            onClick={() => {
              Streamlit.setComponentValue(title);
              setActiveMenuId(id);
              setSubmenuParaentColor(mainMenuStyle?.hover?.color || "blue");
            }}
          >
            <div
              className={css({
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              })}
            >
              <i className={icon} />
            </div>
            {title}
          </StyledSubMenuItem>
        ))}
      </div>
    </>
  );
};

export default Submenu;

const StyledSubMenuParent = styled("div", (props) => ({
  padding: "1.25rem 2rem",
  fontFamily: props.main_menu_style?.fontFamily
    ? props.main_menu_style?.fontFamily
    : "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
  fontWeight: "600",
  borderLeft: "4px solid transparent",
  color: props.submenu_parent_color
    ? props.submenu_parent_color
    : props.main_menu_style.color
    ? props.main_menu_style.color
    : "black",
  cursor: props.collapsible === "true" ? "pointer" : "",
  ":hover": {
    color:
      props.collapsible === "true"
        ? props.main_menu_style?.hover?.color
          ? props.main_menu_style?.hover?.color
          : "blue"
        : "",
  },
}));

const StyledSubMenuItem = styled("div", (props) => ({
  padding: "1.25rem 0.8rem",
  fontFamily: props.submenu_style?.fontFamily
    ? props.submenu_style?.fontFamily
    : "inherit",
  // background: props.$active
  //   ? props.submenu_style?.activeSubMenu?.backgroundColor
  //     ? props.submenu_style?.activeSubMenu?.backgroundColor
  //     : "#b4cdf0"
  //   : "none",
  color: props.$active
    ? props.submenu_style?.activeSubMenu?.color
      ? props.submenu_style?.activeSubMenu?.color
      : "blue"
    : props?.submenu_style?.color
    ? props?.submenu_style?.color
    : "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: "1rem",
  cursor: "pointer",
  width: "100%",
  borderLeft: "4px solid transparent",
  ":hover": {
    background: props.submenu_style?.hover?.backgroundColor
      ? props.submenu_style?.hover?.backgroundColor
      : "#b4cdf0",
    color: props.submenu_style?.hover?.color
      ? props.submenu_style?.hover?.color
      : "blue",
    borderLeft: `4px solid ${
      props.submenu_style?.hover?.color
        ? props.submenu_style?.hover?.color
        : "blue"
    }`,
  },
}));
