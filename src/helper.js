export function obtenerDiferenciaAnios(anio) {
  return new Date().getFullYear() - anio;
}

// Calcula el total a pagar dependiendo de la marca
export function calcularMarca(marca) {
  let incremento;
  
  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiático":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan){
    return (plan === 'Básico' ? 1.2 : 1.5);
}
