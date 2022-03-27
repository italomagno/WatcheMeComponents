import { useCallback, useEffect, useMemo, useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenreResponseProps } from './@types/types';
import { api } from './services/api';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  ) 

 const handleClickButton = useCallback((id: number) => {
  setSelectedGenreId(id);
},[])

  useMemo(() => {
      api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data)
      })
  }, [selectedGenreId])

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={handleClickButton} selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/> 
      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId} />
    </div>
    </>
  )
}





/* 
memo usado em:

useMemo usado em:
1.  utilizado em calculos e variavéis que são feitas sempre quando o app renderiza
2.  Igualdade referencial (quando a informação é repassada para os componentes filhos )
useMemo(()=>{

},[])
useEffect > sidebar 0.1 of 0.8 , content 0.2 of 1.6
*/

/* 
useCallback usado em:
1. utilizado para passar funções entre os componentes filhos.

useCallback(()=>{},[])
*/