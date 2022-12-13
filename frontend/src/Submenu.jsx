import React, { useState } from "react";
import { styled } from "baseui";
import { useStyletron } from "styletron-react";
import ChevronDown from "baseui/icon/chevron-down";
import ChevronUp from "baseui/icon/chevron-up";
import { Streamlit } from "streamlit-component-lib";

const Submenu = ({
  title,
  children,
  child,
  collapsable,
  setActiveMenuId,
  activeMenuId,
  submenuStyle,
  mainMenuStyle,
}) => {
  const [css] = useStyletron();
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledSubMenuParent
        title={title}
        mainMenuStyle={mainMenuStyle}
        onClick={() => setOpen((flag) => !flag)}
        open={open}
        collapsable={collapsable}
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
            display: collapsable === "true" ? "block" : "none",
          })}
        >
          {collapsable === "true" && open ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </div>
      </StyledSubMenuParent>
      <div
        className={css({
          display: open || !(collapsable === "true") ? "flex" : "none",
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
            submenuStyle={submenuStyle}
            key={index}
            onClick={() => {
              Streamlit.setComponentValue(title);
              setActiveMenuId(id);
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
  fontFamily: props.mainMenuStyle?.fontFamily
    ? props.mainMenuStyle?.fontFamily
    : "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
  fontWeight: "600",
  borderLeft: "4px solid transparent",
  color: props.mainMenuStyle.color ? props.mainMenuStyle.color : "black",
  cursor: props.collapsable === "true" ? "pointer" : "",
  ":hover": {
    color:
      props.collapsable === "true"
        ? props.mainMenuStyle?.hover?.color
          ? props.mainMenuStyle?.hover?.color
          : "blue"
        : "",
  },
}));

const StyledSubMenuItem = styled("div", (props) => ({
  padding: "1.25rem 0.8rem",
  fontFamily: props.submenuStyle?.fontFamily
    ? props.submenuStyle?.fontFamily
    : "inherit",
  background: props.$active
    ? props.submenuStyle?.activeSubMenu?.backgroundColor
      ? props.submenuStyle?.activeSubMenu?.backgroundColor
      : "#b4cdf0"
    : "none",
  color: props.$active
    ? props.submenuStyle?.activeSubMenu?.color
      ? props.submenuStyle?.activeSubMenu?.color
      : "blue"
    : props?.submenuStyle?.color
    ? props?.submenuStyle?.color
    : "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: "1rem",
  cursor: "pointer",
  width: "100%",
  borderLeft: "4px solid transparent",
  ":hover": {
    background: props.submenuStyle?.hover?.backgroundColor
      ? props.submenuStyle?.hover?.backgroundColor
      : "#b4cdf0",
    color: props.submenuStyle?.hover?.color
      ? props.submenuStyle?.hover?.color
      : "blue",
    borderLeft: `4px solid ${
      props.submenuStyle?.hover?.color
        ? props.submenuStyle?.hover?.color
        : "blue"
    }`,
  },
}));
