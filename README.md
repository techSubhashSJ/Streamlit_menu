
# Menu Comopnent

In streamlit, creating a custom menu takes a little while. With the help of this menu component, users may quickly construct a menu that meets their needs (Expandible or collapsible). This menu item is fully sized in both height and width. Therefore, users may put it anywhere they like in the streamlit window Ex. sidebar, left, right, or center. Users must provide menu information and menu styles in the specified format. The user must modify some of the streamlit's built-in styles if they desire to add a menu component to the sidebar. This menu component will provide the user with the selected menu item and streamlit callback feature. so that based on the chosen menu item, he or she can take the appropriate action.

## Features

- Menu 
- Submenu
- Icon for each menu item 
- Expand and collapse (Configurable) 
- Title and logo (base64 image) for the menu


## Tech Stack

Streamlit, React, and Base Web


## User Guide

In order to access the menu component, the user must first give the required data

```bash
1.	The user needs to provide the menu logo (base64 image). 
2.	The user needs to provide the menu title. 
3.	The user needs to provide menu data in the specified format. 
    For example:
        menuData = [
                    {
                        "id": 1,
                        "title": "Social",
                        "icon": "fa-solid fa-users",
                        "children": None,
                    },
                    {
                        "id": 2,
                        "title": "Starred",
                        "icon": "fa-solid fa-star",
                        "children": None,
                    },
                    {
                        "id": 3,
                        "title": "All mails",
                        "icon": "fa-solid fa-envelope",
                        "children": [
                                        {
                                            "id": 4,
                                            "title": "Sent",
                                            "icon": "fa-solid fa-share-from-square",
                                            "children": None,
                                        },
                                        {
                                            "id": 5,
                                            "title": "Important",
                                            "icon": "fa-solid fa-tag",
                                            "children": None,
                                        },
                                        {
                                            "id": 6,
                                            "title": "Spam",
                                            "icon": "fa-solid fa-triangle-exclamation",
                                            "children": None,
                                        },
                                    ],
                        },
                        {
                            "id": 7,
                            "title": "Bin",
                            "icon": "fa-solid fa-trash-can",
                            "children": None,
                        },
                        {
                            "id": 8,
                            "title": "Settings",
                            "icon": "fa-solid fa-gear",
                            "children": None,
                        },
                        {
                            "id": 9,
                            "title": "Logout",
                            "icon": "fa-solid fa-right-from-bracket",
                            "children": None,
                        },
                    ]
	(Note: An icon should be a font awesome icon) 
4.	The user will get a light theme menu (collapsible) by default (After accurately entering the info stated above). 
5.	Users can give a collapsible with a false value if they desire an expanding menu.  
6.	Additionally, the user has the option to modify the theme. The user must enter the following information in order to change the default theme: 
    a.  Menu Wrapper Style
	    - The user must specify the background color (data -> menu_style -> style.py)
            Ex. “backgroundColor”: “black” 
    	- For the streamlit sidebar, the user must provide the same background color in the styles.css file. 
            Ex.  appview-container > section[data-testid= “stSidebar”] > div{ 
            color: black; 
            }
        - For the streamlit sidebar, the user must modify the cross-button’s color in the styles.css file. 
            Ex.  .css-fblp2m{ 
            color: white; 
            } 
 

    b.	Menu Header Style
        The user must specify (data -> menu_style -> style.py):  
        - A position for the menu title and logo 
            Ex. “justify”: “start” 
        - Font family 
            Ex. “fontFamily”: “Times New Roman” 
        - Text color (color name or Hex code) 
            Ex. “color”: “white” 


    c.	Menu Style
        The user must specify (data -> menu_style -> style.py):  
        - Font family 
            Ex. “fontFamily”: “Times New Roman” 
        - Text color (color name or Hex code) 
            Ex. “color”: “white” 
        - Text color and background color on hover 
            Ex. “hover”:{ “color”: “blue”, “backgroundColor”: “#b4cdf0”} 
        - Text color and background color for the active menu 
            Ex. “activeMenu”:{ “color”: “blue”, “backgroundColor”: “#b4cdf0”} 
    
    
    d.	Sub menu Style 
        The user must specify (data -> menu_style -> style.py):  
        - Font family 
            Ex. “fontFamily”: “Times New Roman” 
        - Text color (color name or Hex code) 
            Ex. “color”: “white” 
        - Text color and background color on hover 
            Ex. “hover”:{ “color”: “blue”, “backgroundColor”: “#b4cdf0”} 
        - Text color and background color for the active sub menu 
            Ex. “activeSubMenu”:{ “color”: “blue”, “backgroundColor”: “#b4cdf0”} 
    

```
    
## Outputs

1. Default Collapsible Menu

   <img width="960" alt="collapsible menu" src="https://user-images.githubusercontent.com/111497133/209765886-3c358640-d7f8-49f0-bf58-9e4b4733202c.PNG">

2. Default Expandable Menu
   
   <img width="958" alt="expandible menu" src="https://user-images.githubusercontent.com/111497133/209765933-dc515a41-ab7e-44de-8489-f4ad1868cd8e.PNG">

3. Custom Theme Expandable Menu
   
   <img width="959" alt="Custome theme menu" src="https://user-images.githubusercontent.com/111497133/209764457-d71b1bee-6b02-49d8-a923-fb79a3172211.PNG">

## Conclusion
The user can make use of this highly customizable menu component to build a streamlit menu as per their needs.
   
