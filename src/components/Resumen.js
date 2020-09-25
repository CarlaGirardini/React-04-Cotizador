import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  // Extraer datos:
  const { marca, anio, plan } = datos;
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Plan: {anio}</li>
        <li>Año del auto: {plan}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;
