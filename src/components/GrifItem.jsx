import PropTypes from "prop-types";

export const GrifItem = ({title, url}) => { // The component will have the title and the url as params.
  return (
    <div className="card">
      <img src = {url} alt = {title} />
      <p> {title} </p>
    </div>
  )
}

GrifItem.propTypes = { // Ask for the title and subtitle. It has to be like a string.
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

/* Tarea
  1. Añadir PropTypes
    a. title obligatorio
    b. url obligatorio
  
  2. Evaluar el snapshot
*/