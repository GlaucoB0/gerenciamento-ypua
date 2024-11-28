const formatarDado = (tipo, target) => {
  switch (tipo) {
    case "cpf":
      target.value = target.value.replace(/[A-Za-z]/g, "");

      if (
        target.value.length === 11 &&
        !target.value.includes("-") &&
        !target.value.includes(".")
      ) {
        target.value = `${target.value.slice(0, 3)}.${target.value.slice(
          3,
          6
        )}.${target.value.slice(6, 9)}-${target.value.slice(9, 11)}`;
      }
      if (target.value.length < 8 && target.value.split(`.`).length == 3) {
        target.value = target.value.slice(0, -1);
      }
      if (
        (target.value.length === 3 && !target.value.includes(".")) ||
        target.value.length === 7
      ) {
        target.value += ".";
      }
      if (target.value.length === 11 && !target.value.includes("-")) {
        target.value += "-";
      }
      if (target.value.length < 4 && target.value.includes(".")) {
        target.value = target.value.slice(0, -1);
      }

      if (target.value.length < 12 && target.value.includes("-")) {
        target.value = target.value.slice(0, -1);
      }
      if (target.value.length > 14) {
        target.value = target.value.slice(0, -1);
      }

      break;
    case "cep":
      target.value = target.value.replace(/[A-Za-z]/g, "");
      if (target.value.length === 8 && !target.value.includes("-")) {
        target.value = `${target.value.slice(0, 5)}-${target.value.slice(
          5,
          8
        )}`;
      }
      if (target.value.length === 5 && !target.value.includes("-")) {
        target.value += "-";
      }

      if (target.value.length > 9) {
        target.value = target.value.slice(0, -1);
      }

      break;
    case "telefone":
      target.value = target.value.replace(/[A-Za-z]/g, "");

      if (
        target.value.length === 11 &&
        !target.value.includes("(") &&
        !target.value.includes(")") &&
        !target.value.includes(" ") &&
        !target.value.includes("-")
      ) {
        target.value = `(${target.value.slice(0, 2)}) ${target.value.slice(
          2,
          7
        )}-${target.value.slice(7, 11)}`;
      }
      if (target.value.length === 2 && !target.value.includes("(")) {
        target.value = `(${target.value}) `;
      }

      if (target.value.length === 10 && !target.value.includes("-")) {
        target.value += "-";
      }

      if (target.value.length < 11 && target.value.includes("-")) {
        target.value = target.value.slice(0, -1);
      }
      if (target.value.length > 15) {
        target.value = target.value.slice(0, -1);
      }

      break;
    case "pais":
      target.value = target.value.replace(/[^A-Za-z]/g, "");
      target.value = target.value.toUpperCase();

      if (target.value.length > 2) {
        target.value = target.value.slice(0, 2);
      }

      break;
    case "estado":
      target.value = target.value.replace(/[^A-Za-z]/g, "");
      target.value = target.value.toUpperCase();

      if (target.value.length > 2) {
        target.value = target.value.slice(0, 2);
      }

      break;
    default:
      return target;
  }
  return target.value;
};

export default formatarDado;
