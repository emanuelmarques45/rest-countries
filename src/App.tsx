import { useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle } from './assets/GlobalStyle'
import { Footer, Header } from './components'
import RoutesApp from './routes'
import themes from './themes'
import { ScrollToTop } from './utils'
import { usePersistedState } from './hooks'

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    themes.light
  )
  const [isDarkTheme, setIsDarkTheme] = useState(
    theme.name === themes.dark.name
  )

  useEffect(() => {
    setIsDarkTheme(theme.name === themes.dark.name)
  }, [theme])

  function handleToggleTheme() {
    setTheme(!isDarkTheme ? themes.dark : themes.light)
  }

  return (
    <div className="App">
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          handleToggleTheme={handleToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <RoutesApp />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
