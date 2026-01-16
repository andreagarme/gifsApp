import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SerchBar';

export const GifsApp = () => {
  return (   
  <>
  {/* Header */}

  <CustomHeader 
  title='Buscador de Gifs' 
  description='Descubre y comparte el gif perfecto' />

  {/* Input de busqueda */}
   <SearchBar placeholder='Busca el mejor gif' />

 {/* Area de resultados */}
 
  <PreviousSearches />

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
