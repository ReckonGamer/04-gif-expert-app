import { useFetchGifs } from "../hooks/useFetchGifs";
import { GrifItem } from "./GrifItem";
import PropTypes from "prop-types";

export const GifGrid = ( { category }) => {

    const {images, isLoading} = useFetchGifs(category); // We will call the function, and pass the category.
    
    return (
    <>
        <h3> { category }</h3>        
        {
          isLoading && (<h2> Cargando... </h2> ) /* While the page is loading */
        }
        <div className = "card-grid">
          {
            images.map( ( image ) => ( /* We will go through all the img. */
               <GrifItem 
                  key={image.id} /* Pass the id img. */
                  {...image} 
                />
            ))
          }
         
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}