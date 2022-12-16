import { useEffect } from "react";
import * as React from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import { styled, useStyletron } from "baseui";
import MenuBody from "./MenuBody";
import { StyledDivider, SIZE } from "baseui/divider";
import MenuHeader from "./MenuHeader";

const Menu = (props) => {
  const [activeMenuId, setActiveMenuId] = React.useState(null);
  const [submenuParaentColor, setSubmenuParaentColor] = React.useState(null);

  const {
    menuHeader,
    menuData,
    menuWrapperStyle,
    menuHeaderStyle,
    mainMenuStyle,
    submenuStyle,
  } = props.args.menu;

  useEffect(() => {
    Streamlit.setFrameHeight(1000);
  }, []);

  const [css] = useStyletron();

  return (
    <MenuWrapper
      backgroundcolor={menuWrapperStyle.backgroundColor}
      color={menuWrapperStyle.text}
    >
      <MenuHeader
        appLogo={menuHeader.logo}
        appName={menuHeader.title}
        styles={menuHeaderStyle}
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

      {menuData.map(({ icon, title, children, id }, index) => (
        <MenuBody
          key={index}
          active={id === activeMenuId}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          title={title}
          children={children}
          id={id}
          collapsible={props.args.collapsible}
          submenuStyle={submenuStyle}
          mainMenuStyle={mainMenuStyle}
          submenuParaentColor={submenuParaentColor}
          setSubmenuParaentColor={setSubmenuParaentColor}
          icon={icon}
        />
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
  background: props.backgroundcolor
    ? props.backgroundcolor
    : "rgb(250, 250, 250)",
}));
