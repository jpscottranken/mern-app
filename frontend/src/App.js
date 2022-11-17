import { Container } from "react-bootstrap"

import Header from "./components/Header"
import Footer from "./components/Footer"

import "./App.css"

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Main Content Goes Here</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
