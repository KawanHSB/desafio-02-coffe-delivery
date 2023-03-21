import { Header } from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CoffeCardContextProvider } from './contexts/CoffeCardContext'

function App() {
  return (
    <BrowserRouter>
      <CoffeCardContextProvider>
        <Header />
        <Router />
      </CoffeCardContextProvider>
    </BrowserRouter>
  )
}

export default App
