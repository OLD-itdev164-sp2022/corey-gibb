import { withTheme } from "styled-components"
import mainHeaderImage from './images/react.png'
import { Search } from 'styled-icons/feather'

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        greys: '#07c',
        green: '#0fa',
      }
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.grays[8]
        },
        constrast: {
            color: theme.colors.grays[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.grays[8]
        }
    }
}
export const Gray = { ...theme, variants}