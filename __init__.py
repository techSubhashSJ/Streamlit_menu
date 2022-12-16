import streamlit as st
import data.menu_data.menu
from st_menu import getMenu

with open("style.css") as stylefile:
    st.markdown(f"<style>{stylefile.read()}</style>", unsafe_allow_html=True)

st.subheader("Menu Component")

def on_menu_select(widgetkey):
    # print(st.session_state[widgetkey])
    pass


column_left, column_center, column_right = st.columns(3)

with st.sidebar:
    getMenu(menu=data.menu_data.menu.menu,
            collapsible=data.menu_data.menu.collapsible,
            key="sidemenu",
            on_select=on_menu_select,
            args=("sidemenu", ))

with column_left:
    st.write('You have selected: ', st.session_state["sidemenu"])

with column_right:
    st.write("right side")
