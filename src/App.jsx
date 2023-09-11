import NavAppBar from './components/NavAppBar'
import BannerHome from './components/BannerHome'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import AboutMe from './components/aboutMe'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <header>
          <NavAppBar />
        </header>
        <main>
          <BannerHome />
          <AboutMe />
        </main>
    </ThemeProvider>
    </>
  )
}

export default App
