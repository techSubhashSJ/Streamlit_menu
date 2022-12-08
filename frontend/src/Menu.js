import { useEffect } from "react";
import * as React from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";

const Menu = () => {
  useEffect(() => {
    Streamlit.setFrameHeight(600);
  }, []);

  return <div>Hello World</div>;
};

export default withStreamlitConnection(Menu);
