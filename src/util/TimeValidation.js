// Valida o tempo no formato HH:mm
export default function validateOnTheFly(value, setValue) {
  const values = Array.from(value);

  // valida primeiro dígito
  const d1 = values[0] !== undefined ? values[0].replace(/[^0-2]/, "") : "";

  // valida segundo dígito
  const temp = values[1] !== undefined ? values[1] : ""
  const d2 = d1 === "0" || d1 === "1"
    ? temp.replace(/[^0-9]/, "")
    : temp.replace(/[^0-3]/, "");

  // valida terceiro dígito
  const d3 = values[2] !== undefined ? values[2].replace(/[^:]/, "") : "";

  // valida quarto dígito
  const d4 = values[3] !== undefined ? values[3].replace(/[^0-5]/, "") : "";

  // valida quinto dígito
  const d5 = values[4] !== undefined ? values[4].replace(/[^0-9]/, "") : "";

  const time = d1 + d2 + d3 + d4 + d5;
  setValue(time);
}