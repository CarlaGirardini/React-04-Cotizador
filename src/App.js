import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  // Definición de states
  const [resumen, guardarResumen] = useState({});
  const [cargando, guardarCargando] = useState(false);

  // Extracción de datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : (
          datos ? (
            <Fragment>
              <Resumen datos={datos} />
              <Resultado cotizacion={cotizacion} />
            </Fragment>
          ) : null
        )}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
