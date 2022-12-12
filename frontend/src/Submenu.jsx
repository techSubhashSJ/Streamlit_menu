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
  console.log(submenuStyle);
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
            alignItems: "center",
          })}
        >
          {children}
          {title}
        </div>
        <div
          className={css({
            display: collapsable === "true" ? "flex" : "none",
            color: "black",
            paddingLeft: "30px",
            flexDirection: "column",
            overflow: "hidden",
          })}
        >
          {collapsable === "true" && open ? (
            <ChevronDown
              size={25}
              className={css({
                backgroundColor: `${
                  mainMenuStyle?.color ? mainMenuStyle?.color : "none"
                }`,
              })}
            />
          ) : (
            <ChevronUp
              size={25}
              className={css({
                backgroundColor: `${
                  mainMenuStyle?.color ? mainMenuStyle?.color : "none"
                }`,
              })}
            />
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
            <img
              className={css({
                width: "1rem",
                height: "1rem",
                marginRight: "0.5rem",
                color: "red",
              })}
              src={`data:image/png;base64, ${icon}`}
              alt="logo"
            />
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
