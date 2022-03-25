import { useEffect, useState , memo } from "react";
import { GenreResponseProps, SideBarProps } from "../@types/types";
import { api } from "../services/api";
import { Button } from "./Button";



function SideBarComponent({selectedGenreId, setSelectedGenreId, handleClickButton}:SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return(
    <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
  ) 
}

export const SideBar = memo(SideBarComponent, ( prevProps,nextProps)=>{
  return Object.is(prevProps.selectedGenreId,nextProps.selectedGenreId)
})