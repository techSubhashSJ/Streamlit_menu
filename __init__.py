import assets.app_logo.logo
import assets.menu_data.menu
from register import register_callback, init

from main import _component_func, _RELEASE

# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.

init()

def getMenu(menu, collapsable="true", key=None, on_select=None, args: tuple = ()):
    register_callback(key, on_select, *args)

    component_value = _component_func(menu=menu,
                                      collapsable=collapsable, key=key, default=0)
    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value


# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run my_component/__init__.py`
if not _RELEASE:
    import streamlit as st

    st.subheader("Menu Component")

    # # Create an instance of our component with a constant `name` arg, and

    logo = assets.app_logo.logo.logo
    title = "Gmail"

# light theme
    menuHeader = {"data": {"logo": logo, "title": title}}

    menuWrapperStyle = {}

    menuData = assets.menu_data.menu.menuData

    submenuStyle = {}

    mainMenuStyle = {}

# dark theme
    # menuHeader = {"data": {"logo": logo, "title": title},
    #               "styles": {"justify": "start", "fontFamily": '"Times New Roman", Times, serif', "color": "white"}}

    # menuWrapperStyle = {"backgroundColor": "black"}

    # menuData = assets.menu_data.menu.menuData

    # submenuStyle = {"color": "white", "fontFamily": '"Times New Roman", Times, serif',"hover": {
    #     "color": "blue", "backgroundColor": "#b4cdf0"}, "activeSubMenu": {"color": "blue", "backgroundColor": "#b4cdf0"}}

    # mainMenuStyle = {"color": "white", "fontFamily": '"Times New Roman", Times, serif', "hover": {
    #     "color": "blue", "backgroundColor": "#b4cdf0"}, "activeMenu": {"color": "blue", "backgroundColor": "#b4cdf0"}}

    menu = {"menuWrapperStyle": menuWrapperStyle,
            "menuHeader": menuHeader, "menuData": menuData, "submenuStyle": submenuStyle, "mainMenuStyle": mainMenuStyle}

    def on_menu_select(widgetkey):
        # print(st.session_state[widgetkey])
        pass

    # Overridden inbuilt streamlit css 
    with open("style.css") as stylefile:
        st.markdown(f"<style>{stylefile.read()}</style>",
                    unsafe_allow_html=True)

    column_left, column_center, column_right = st.columns(3)

    with column_center:
        getMenu(menu, collapsable="true",
               key="sidemenu", on_select=on_menu_select, args=("sidemenu",))

    with column_left:
        st.write('You have selected: ', st.session_state["sidemenu"])

    with column_right:
        st.write("right side")
