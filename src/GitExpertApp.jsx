
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'The Walking Dead' ]); // This will be the category.

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory)) return; // If the  categories includes the new category, then do nothing.

        setCategories([ newCategory, ...categories ]); // If not, include it in the categories.
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) } /* Component with the value from the categories. */           
        />

        { 
            categories.map( ( category ) =>  ( /* Going through the categories */
                <GifGrid 
                    key={ category } 
                    category={category}
                />               
            ))
        }
    </>
  )
}