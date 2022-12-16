import streamlit as st
import data.app_logo.logo
import data.menu_data.menu
from st_menu import getMenu

with open("style.css") as stylefile:
    st.markdown(f"<style>{stylefile.read()}</style>",
                unsafe_allow_html=True)

st.subheader("Menu Component")

menuData = data.menu_data.menu.menuData

logo = data.app_logo.logo.logo
title = "Gmail"

collapsible = True

# light theme
menuHeader = {"data": {"logo": logo, "title": title}}
menuWrapperStyle = {}
submenuStyle = {}
mainMenuStyle = {}

# dark theme
# menuHeader = {"data": {"logo": logo, "title": title},
#               "styles": {"justify": "start", "fontFamily": '"Times New Roman", Times, serif', "color": "white"}}

# menuWrapperStyle = {"backgroundColor": "black"}

# submenuStyle = {"color": "white", "fontFamily": '"Times New Roman", Times, serif', "hover": {
#     "color": "blue", "backgroundColor": "#b4cdf0"}, "activeSubMenu": {"color": "blue", "backgroundColor": "#b4cdf0"}}

# mainMenuStyle = {"color": "white", "fontFamily": '"Times New Roman", Times, serif', "hover": {
#     "color": "blue", "backgroundColor": "#b4cdf0"}, "activeMenu": {"color": "blue", "backgroundColor": "#b4cdf0"}}

menu = {"menuWrapperStyle": menuWrapperStyle,
        "menuHeader": menuHeader, "menuData": menuData, "submenuStyle": submenuStyle, "mainMenuStyle": mainMenuStyle}


def on_menu_select(widgetkey):
    # print(st.session_state[widgetkey])
    pass


column_left, column_center, column_right = st.columns(3)

with column_center:
    getMenu(menu, collapsible,
            key="sidemenu", on_select=on_menu_select, args=("sidemenu",))

with column_left:
    st.write('You have selected: ', st.session_state["sidemenu"])

with column_right:
    st.write("right side")
