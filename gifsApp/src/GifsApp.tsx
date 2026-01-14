import { mockGifs } from './mock-data/gifs.mock';

export const GifsApp = () => {
  return (   
  <>
  {/* Header */}
  <div className="content-center">
    <h1> Buscador de Gifs </h1>
    <p> Descubre y comparte el gif perfecto </p>
  </div>
  
  {/* Input de busqueda */}
    <div className="search-container">
        <input type="text" placeholder="Buscar gifs..." />
        <button>Buscar</button>
    </div>

 {/* Area de resultados */}
 
    <div className="previous-searches">
        <h2>Busquedas anteriores:</h2>
        <ul className="previous-searches-list">
            <li>Perros</li>
            <li>Gatos</li>
            <li>Memes</li>
        </ul>
    </div>

 {/* Gifs Resultados */}

    <div className='gifs-container'>
        {
        mockGifs.map((gif) => (
            <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height} (1.5 MB)</p>
            </div>
        ))
        }
    </div>

  </>
  )
}
