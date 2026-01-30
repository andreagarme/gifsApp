import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SerchBar';

  
export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);
  const handleTermClick = (term: string) => {
    console.log(`Termino de busqueda seleccionado: ${term}`);
  }

  const handleSearch = (query: string = '') => {
      query = query.trim().toLowerCase();
      if (query.length === 0) return;
      if (previousTerms.includes(query)) return; 
     setPreviousTerms([query, ...previousTerms].slice(0,8));
  };

  return (   
  <>
  {/* Header */}

  <CustomHeader 
  title='Buscador de Gifs' 
  description='Descubre y comparte el gif perfecto' />

  {/* Input de busqueda */}
   <SearchBar placeholder='Busca el mejor gif'
   onQuery={handleSearch} />

 {/* Area de resultados */}
 
  <PreviousSearches searches= {previousTerms} onLabelClick={handleTermClick}/>

 {/* Gifs Resultados */}

   <GifList gifs={mockGifs} />

  </>
  )
}
