import React from 'react';
import PropTypes from 'prop-types';

const Estudiante = ({nombre, edad, raza, funcion}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {nombre}
            </h5>
            <p className="card-text">Nombre: {nombre}.</p>
            <p className="card-text">Edad: {edad}.</p>
            <p className="card-text">Raza: {raza}.</p>
            <p className="card-text">Funcion: {funcion}.</p>
            
        </div>
    </div>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "no tiene nombre"
}

export default Estudiante;