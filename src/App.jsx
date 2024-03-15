import { Banner, ContainerDoBanner } from "./styles/styles"
import CachorroHome from "./assets/banner-1.jpg"
import TextoDeEntrada from "./components/home/TextoDeEntrada"

function App() {
  return (
    <>
      <ContainerDoBanner>
        <Banner src={CachorroHome} alt="Banner do cachorro" />
      </ContainerDoBanner>
      <TextoDeEntrada />
    </>
  )
}

export default App
