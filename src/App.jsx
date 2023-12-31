import NavAppBar from './components/NavAppBar'
import BannerHome from './components/BannerHome'
import AboutMe from './components/AboutMe'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import Experience from './components/Experience'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <div>
        <NavAppBar />
        <BannerHome />
        <AboutMe />
        <Experience />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
