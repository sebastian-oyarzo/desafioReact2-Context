import axios from 'axios'
import { useEffect, useState } from 'react'
import svg from '../assets/icons/heart.svg'

const Gallery = () => {

const [ImagenesSmall, setImagenesSmall] = useState([])

    const dataFromApi = async () => {
      const response = await axios.get('/photos.json')
        const filteredForGarelly = response.data.photos.map((imagen) => {
           const imagenes = {
             imagenSmall : imagen.src.small,
             descripcion : imagen.alt
           }
           return imagenes
         })
         setImagenesSmall(filteredForGarelly)
  }


  useEffect(() => {
    dataFromApi()
    console.log(ImagenesSmall , "jojoj")
  },[])

  return (
  <div className="gallery grid-columns-5 p-3">
    {ImagenesSmall.map((imagen, key) => (
    <div className='contenedor photo' key={key}>
      <img className='icon' src={svg} alt="icono de corazon" />
      <img src={imagen.imagenSmall} alt="paisaje" />
      <p className='sobreImagenn'>{imagen.descripcion} </p>
    </div>
    ))}
  </div>
  )
}
export default Gallery
