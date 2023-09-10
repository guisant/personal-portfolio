import Container from '@mui/material/Container'
import NavAppBar from './components/NavAppBar'
import BannerHome from './components/BannerHome'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'

function App() {
  return (
    <>
    <div>
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <header>
          <NavAppBar />
        </header>
            <BannerHome />
      </Container>
    </ThemeProvider>
    </div>
    </>
  )
}

export default App
