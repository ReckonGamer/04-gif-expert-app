import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]); // The state will be an empty array.
    const [isLoading, setIsLoading] = useState( true ); // The state will be true by default.


    const getImages = async() => { // Asynchronous function.
      const newImages = await getGifs( category ); 
      setImages(newImages); // The new images, will be the actual images.
      setIsLoading(false); // The state will be false.
    }

    useEffect( () => { // We will use an effect.
      getImages(); // Call the function.
    }, []);

  return { // Return the images and the loader.
    images,
    isLoading
  }
}