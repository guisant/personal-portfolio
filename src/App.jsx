import Container from '@mui/material/Container'
import NavAppBar from './components/NavAppBar'
import BannerHome from './components/BannerHome'

function App() {
  return (
    <>
    <div>
      <Container>
        <NavAppBar />
        <Container>
          <BannerHome />
        </Container>
      </Container>
    </div>
    </>
  )
}

export default App
