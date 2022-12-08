import os
import streamlit.components.v1 as components
# from register import register_callback,init

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
        "App",
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
    _component_func = components.declare_component("App", path=build_dir)


# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.
# init()
def myFunc(options=[], key=None, on_select=None, args:tuple=()):
    # register_callback(key, on_select, *args)

    component_value = _component_func(options=options, key=key, default=0)
    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value


# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run my_component/__init__.py`
if not _RELEASE:
    import streamlit as st

    st.subheader("Menu Component")

    # menu = [
    #     {
    #         "id": 1,
    #         "label": "Inbox",
    #         "icon": "https://img.freepik.com/free-icon/inbox_318-565945.jpg?w=2000",
    #         "child": [
    #             {
    #                 "id": 2,
    #                 "label": "Starred",
    #                 "icon": "none",
    #                 "child": "none"
    #             },
    #             {
    #                 "id": 3,
    #                 "label": "Sent",
    #                 "icon": "https://toppng.com/uploads/preview/email-send-icon-11549825116mekvlqcvjt.png",
    #                 "child": "none"
    #             }
    #         ]
    #     },
    #     {
    #         "id": 4,
    #         "label": "Settings",
    #         "icon": "none",
    #         "child": [
    #             {
    #                 "id": 5,
    #                 "label": "Profile",
    #                 "icon": "none",
    #                 "child": "none"
    #             },
    #             {
    #                 "id": 6,
    #                 "label": "Theme",
    #                 "icon": "none",
    #                 "child": "none"
    #             }
    #         ]
    #     },
    #     {"id": 7, "label": "Draft", "icon": "https://img.freepik.com/free-icon/inbox_318-565945.jpg?w=2000", "child": "none"},
    #     {"id": 8, "label": "Bin", "icon": "https://img.freepik.com/free-icon/inbox_318-565945.jpg?w=2000", "child": "none"},
    #     {"id": 9, "label": "Logout", "icon": "https://img.freepik.com/free-icon/inbox_318-565945.jpg?w=2000", "child": "none"},
    # ],
    # # Create an instance of our component with a constant `name` arg, and
    
    # def on_menu_select (widgetkey): 
    #     print(st.session_state[widgetkey])

    # with st.sidebar:
    #     if "sidemenu" in st.session_state:
    #         st.write(f"""Hi {st.session_state["sidemenu"]}""", )

        # if st.session_state["selectedMenu"] == "profile":
        #     #  load profile page
        #     pass
        # if st.session_state["selectedMenu"] == "home":
        #     # goto home page
        #     pass           

    myFunc()
    st.write('You have selected: ')
