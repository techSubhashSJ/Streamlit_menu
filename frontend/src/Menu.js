import { useEffect } from "react";
import * as React from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import { styled, useStyletron } from "baseui";
import MenuBody from "./MenuBody";
import { StyledDivider, SIZE } from "baseui/divider";
import MenuHeader from "./MenuHeader";

const Menu = (props) => {
  const [activeMenuId, setActiveMenuId] = React.useState(null);

  const {
    menuWrapperStyle,
    menuHeader,
    submenuStyle,
    mainMenuStyle,
    menuData,
  } = props.args.menu;

  useEffect(() => {
    Streamlit.setFrameHeight(1000);
  }, []);

  const [css] = useStyletron();

  return (
    <MenuWrapper
      backgroundColor={menuWrapperStyle.backgroundColor}
      color={menuWrapperStyle.text}
    >
      <MenuHeader
        appLogo={menuHeader.data.logo}
        appName={menuHeader.data.title}
        styles={menuHeader.styles}
      />

      <div>
        <StyledDivider
          $size={SIZE.section}
          className={css({
            marginLeft: "1rem",
            marginRight: "1rem",
          })}
        />
      </div>

      {menuData.map(({ icon, title, child, id }, index) => (
        <MenuBody
          key={index}
          active={id == activeMenuId}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          title={title}
          child={child}
          id={id}
          collapsable={props.args.collapsable}
          submenuStyle={submenuStyle}
          mainMenuStyle={mainMenuStyle}
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
        </MenuBody>
      ))}
    </MenuWrapper>
  );
};

export default withStreamlitConnection(Menu);

const MenuWrapper = styled("div", (props) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  background: props.backgroundColor ? props.backgroundColor : "rgb(250, 250, 250)",
}));
