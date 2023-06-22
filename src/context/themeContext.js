import { createContext, useState } from "react";;

export const themes = {
    light: {
        isLightMode: true,
        menu: `url('/Quest-React-Avancado/images/menu.png') repeat-x`,
        background: `url('/Quest-React-Avancado/images/background2.jpg') no-repeat center center fixed`,
        cardBackgroundColor: 'rgba(56, 56, 56, 0.3)',
        scrollbar: {
            track: {
                background: 'rgba(255, 255, 255, 0.4)'
            }
        },
        text: {
            main: {
                color: '#F8F8F8',
                shadow: '1px 1px 1px #32363B',
                shadowHigh: '2px 2px 2px #32363B'
            },
            subText: {
                color: '#252A30',
                shadow: '2px 2px 3px #BCBCBC'
            },
            disabled: {
                color: '#CCCCCC',
                underLineColor: '#EA1C26'
            }
        },
        filters: {
            bgColor: 'rgb(255, 255, 255)',
            hoverBgColor: 'rgb(230, 230, 230)'
        }
    },
    dark: {
        isLightMode: false,
        menu: `url('/Quest-React-Avancado/images/menu-dark.png') repeat-x`,
        background: `url('/Quest-React-Avancado/images/background3.jpg') no-repeat center center fixed`,
        cardBackgroundColor: 'rgba(255, 255, 255, 0.15)',
        scrollbar: {
            track: {
                background: 'rgba(0, 0, 0, 0.4)'
            }
        },
        text: {
            main: {
                color: '#F8F8F8',
                shadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
                shadowHigh: '2px 2px 2px rgba(0, 0, 0, 0.8)'
            },
            subText: {
                color: '#252A30',
                shadow: '2px 2px 3px #BCBCBC'
            },
            disabled: {
                color: '#A9A9A9',
                underLineColor: '#EA1C26'
            }
        },
        filters: {
            bgColor: 'rgb(230, 230, 230)',
            hoverBgColor: 'rgb(210, 210, 210)'
        }
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}