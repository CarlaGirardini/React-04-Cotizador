import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';

const Mensaje = styled.p`
  color: #00838f;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return (
    <ResultadoCotizacion>
      <TransitionGroup
        component="span"
        className="resultado"
      >
        <CSSTransition
            classNames="resultado"
            key={cotizacion}
            timeout={{enter: 500, exit: 500}}
        >
          <Mensaje>El total es: $ <span>{cotizacion}</span></Mensaje>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
}

export default Resultado;
