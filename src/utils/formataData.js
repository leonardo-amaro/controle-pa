import formataNumero from "./formataNumero"

export default function formataData(dataString) {
  const data = new Date(dataString)
  return `${formataNumero(data.getDate(), 'dia')} / ${formataNumero(data.getMonth(), 'mes')} / ${data.getFullYear()}`
}