// import { useState } from 'react'
// import { FontValue } from '../../constants/FontValue'

// const initialState = [{
//   label: 'Sans',
//   value: FontValue.sans
// }, {
//   label: 'Sans-Serif',
//   value: FontValue.sansSerif
// }, {
//   label: 'Monospace',
//   value: FontValue.mono
// }]

// tengo que poder setear la fuente para toda la pagina y la vez poder mostrar una lista de las letras para poder mostrarlas. Con un select seria mucho mas facil pero por lo que he visto no se puede personalizar, así que toca hacer uno a manopla

const Font = (): JSX.Element => {
  // const [fonts, setFonts] = useState(initialState)

  const handleClick = (evt: React.MouseEvent<HTMLUListElement>): void => {
    console.log(evt.target)
  }
  return (
    <div>
      <strong>Sans</strong>
      <ul onClick={handleClick}>
        <li value='hola'>Sans Serif</li>
        <li value='hola2'>Mono</li>
      </ul>
    </div>
  )
}

export default Font
