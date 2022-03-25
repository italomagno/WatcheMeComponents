import { HeaderProps } from "../@types/types"




export function Header({selectedGenre}:HeaderProps){


  return(
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>
  
  )
}