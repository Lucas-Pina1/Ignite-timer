import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'

import { defaultTheme } from './styles/themes/deafult'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
