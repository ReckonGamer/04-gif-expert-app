import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ( { onNewCategory } ) => { // Component to add a category.

    const [inputValue, setInputValue] = useState(''); // The state of the value from the input, will be empty.

    const onInputChange = ( { target } ) => { // When the target of the input changes.
        setInputValue(target.value); // We will save the target of the value.
    };

    const onSubmit = ( event ) => { // Function when the form submits.
        
        event.preventDefault();
        if(inputValue.trim().length <=1 ) return; // If the input's length is <= 1

        // setCategories( categories => [ inputValue, ...categories ] );

        setInputValue(''); // Clean the input.
        onNewCategory(inputValue.trim()); // We will trim the input.   
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type = "text" 
                placeholder = "Buscar gifs"
                value = { inputValue } /* We will pass the input value to the actual value. */
                onChange = { onInputChange } /* When the input is changing, we will call the method. */
            />
        </form>        
    )
}

AddCategory.propTypes = { // To require a prop when a new category is added.
    onNewCategory: PropTypes.func.isRequired, // It must be a function.
};