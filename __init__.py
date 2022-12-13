import os
import streamlit.components.v1 as components
import assets.app_logo.logo
import assets.menu_data.menu
from register import register_callback, init

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = False

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.

if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("my_component"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "Menu",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3000",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("Menu", path=build_dir)

# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.

init()


def myFunc(menu, collapsable="true", key=None, on_select=None, args: tuple = ()):
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

    with open("style.css") as stylefile:
        st.markdown(f"<style>{stylefile.read()}</style>",
                    unsafe_allow_html=True)

    with st.sidebar:
        if "sidemenu" in st.session_state:
            # st.write(f"""Hi {st.session_state["sidemenu"]}""", )
            pass

        myFunc(menu, collapsable="true",
               key="sidemenu", on_select=on_menu_select, args=("sidemenu",))

    st.write('You have selected: ', st.session_state["sidemenu"])
