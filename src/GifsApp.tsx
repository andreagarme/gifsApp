import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import type { Gif } from './gifs/interfaces/gif.interface';
import { CustomHeader } from './shared/components/CustomHeader';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions';
import { SearchBar } from './shared/components/SerchBar';

  
export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState <string[]>([]);
  const handleTermClick = (term: string) => {
    console.log(`Termino de busqueda seleccionado: ${term}`);
  }

  const handleSearch = async(query: string = '') => {
      query = query.trim().toLowerCase();
      if (query.length === 0) return;
      if (previousTerms.includes(query)) return; 
     setPreviousTerms([query, ...previousTerms].slice(0,8));

     const gifs = await getGifsByQuery (query);
     setGifs(gifs);
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

   <GifList gifs={gifs} />

  </>
  )
}
