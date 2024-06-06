import axios from 'axios'
import { useContext, useEffect} from 'react'
import svg from '../assets/icons/heart-filled.svg'
import { Contexto } from '../Context'

const Gallery = () => {
 const {ImagenesSmall, setImagenesSmall} = useContext(Contexto)

    const dataFromJson = async () => {
      const response = await axios.get('/photos.json')
        const filteredForGarelly = response.data.photos.map((imagen) => {
           const imagenes = {
             imagenSmall : imagen.src.small,
             descripcion : imagen.alt,
             Id : imagen.id,
             status: false
           }
           return imagenes
         })
         setImagenesSmall(filteredForGarelly)
  }

   const manejoSeleccionados = (Id) => {
     setImagenesSmall((prevImagenesSmall) => {
      return prevImagenesSmall.map((imagen, index) => {
         if (index === Id) {
           return {
             ...imagen,
             status: !imagen.status
           }
         }
         return imagen
       })
     })
   }

  useEffect(() => {
    dataFromJson()
  },[])



  return (
  <div className="gallery grid-columns-5 p-3">
    {ImagenesSmall.map((imagen, key) => (
    <div onClick={() => manejoSeleccionados(key, imagen.imagenSmall)} className='contenedor photo' key={key}>
      <img className={imagen.status === false ? 'icon' : 'icon2' } src={svg} alt="icono de corazon" />
      <img src={imagen.imagenSmall} alt="paisaje" />
      <p className='sobreImagenes'>{imagen.descripcion}</p>
    </div>
    ))}
  </div>
  )
}
export default Gallery
