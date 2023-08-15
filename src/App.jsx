import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Producto } from './Productos'

function App() {
  const [genero, setGenero] = useState('hombre') // Estado para el género

  const productosHombre = [
    {
      Img: './src/fotos/espejo1.png',
      Titulo: 'Espejo corporal',
      Desc: 'Refleja todo tu estilo con este espejo tamaño corporal! Muestra tu outfit completo y conquista el mundo.',
      precio: 60,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/espejo1.png',
      Titulo: 'Espejo',
      Desc: 'Un espejo tamaño corporal para poner en tu habitación y molar',
      precio: 60,
    },
    {
      Img: './src/fotos/espejo1.png',
      Titulo: 'Espejo',
      Desc: 'Un espejo tamaño corporal para poner en tu habitación y molar',
      precio: 60,
    },
    {
      Img: './src/fotos/espejo1.png',
      Titulo: 'Espejo',
      Desc: 'Un espejo tamaño corporal para poner en tu habitación y molar',
      precio: 60,
    },
  ]

  const productosMujer = [
    {
      Img: './src/fotos/espejo1.png',
      Titulo: 'Espejo',
      Desc: 'Un espejo tamaño corporal para poner en tu habitación y molar',
      precio: 60,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
    {
      Img: './src/fotos/dientes.png',
      Titulo: 'Blanqueador de dientes',
      Desc: 'Permitete el lujo de sonreir sin taparte la boca en público.',
      precio: 21.99,
    },
  ]

  const productosMostrados =
    genero === 'hombre' ? productosHombre : productosMujer

  const cambiarGenero = (nuevoGenero) => {
    setGenero(nuevoGenero)
  }

  return (
    <>
      <div className='top-left'>
        <button
          className={`boton ${genero === 'hombre' ? 'seleccionado' : ''}`}
          onClick={() => cambiarGenero('hombre')}
        >
          Hombre
        </button>

        <button
          className={`boton ${genero === 'mujer' ? 'seleccionado' : ''}`}
          onClick={() => cambiarGenero('mujer')}
        >
          Mujer
        </button>
      </div>

      <div className='container-app'>
        <div className='logo-div'>
          <img src='./src/Logo.png' className='Logo' />
        </div>
        <div className='productos-container'>
          {productosMostrados.map((producto, index) => (
            <Producto
              key={index}
              Img={producto.Img}
              Titulo={producto.Titulo}
              Desc={producto.Desc}
              precio={producto.precio}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
