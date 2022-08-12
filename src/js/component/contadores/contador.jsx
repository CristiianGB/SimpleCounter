import React from "react"; 
import "./contador-styles.css"
import PropTypes from "prop-types"

const Contador = (props) =>{
    return (
        <div className="col-1 grisaceo"> 
            <h5 className="w-100 d-flex align-items-center justify-content-center text-white p-5 fa-3x mx-5 mt-3">{props.number}</h5>
        </div>
    )
}

Contador.PropTypes = {
    number: PropTypes.string
}

Contador.defaultProps ={
    number: "0"
}

export default Contador;