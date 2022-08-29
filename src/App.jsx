import { Menu } from './components/Menu'
import { Formulario1 } from './components/pages/Formulario/Formulario1'
import { Clientes } from './components/pages/Clientes/Clientes'
import { Home } from './components/pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main>
      <div className='app'>
      <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Formulario1 />} />
                <Route path="/clientes" element={<Clientes />} />
            </Routes>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
