import { Contexto } from '../Context'
import { useContext , useEffect } from 'react';


const Favorites = () => {

  const {ImagenesSmall , selectedImages , setSelectedImages} = useContext(Contexto)

  const filteredItems = ImagenesSmall.filter(item => item.status === true)


  useEffect(() => {
       setSelectedImages(filteredItems)
  },[])

  return (
    <div>
        <h1 className="App">Fotos favoritas</h1>
        <div className="p-3 gallery grid-columns-4">
            {selectedImages.map((imagen, key) => (
              <div  className='contenedor photo' key={key}>
              <img src={imagen.imagenSmall} alt="paisaje" />
              <p className='sobreImagenes'>{imagen.descripcion}</p>
          </div>
          ))}
        </div>
    </div>
  )
}
export default Favorites
