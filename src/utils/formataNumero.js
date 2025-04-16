export default function formataNumero(numero, tipo) {
  if (tipo === 'mes') numero++
  return numero / 10 < 1 ? `0${numero}` : numero
}