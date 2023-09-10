import NavAppBar from './components/NavAppBar'
import BannerHome from './components/BannerHome'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <header>
          <NavAppBar />
        </header>
        <main>
          <BannerHome />
        </main>
    </ThemeProvider>
    </>
  )
}

export default App
