import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const { categoryId } = useParams()

  const productos = [
    { id: 1, titulo: "Producto A", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0HztpcAnIQTmA6XfZ1GLb90sdR8jXuJoZvyMXmKhHc6AX6rd4xLTiuoDTOZwCH86uf8&usqp=CAU", descripcion: "descripcion de producto A", precio: 1000, categoria: "A"},
    { id: 2, titulo: "Producto B", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-PqK95Bv5HBtgdZ6r7T3zOchDPTmlj6-UI6SW4vfiTKwN8GiZ1ophbAG7qTPTVu6A-0&usqp=CAU", descripcion: "descripcion de producto B", precio: 2000, categoria: "A"},
    { id: 3, titulo: "Producto C", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1aEo7jsSVAkaFH5H0nWEaIVvfbipCjK6Rw&usqp=CAU", descripcion: "descripcion de producto C", precio: 3000, categoria: "A"},
    { id: 4, titulo: "Producto D", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYX5S6XY2R9EutVPpKyMvyrSUgco1orSNSw&usqp=CAU", descripcion: "descripcion de producto D", precio: 6000, categoria: "A"},
    { id: 5, titulo: "Producto E", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8w_51KIOEYgGvW3rxk0QmDuCCPAT9cce-SA&usqp=CAU", descripcion: "descripcion de producto E", precio: 2000, categoria: "A"},
    { id: 6, titulo: "Producto F", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJ-M1VWvd4IEFdl3su6zcgv177enQNxvSbG_Rdq07A9suG7EbGgeSCe5cnEYj_hOwILo&usqp=CAU", descripcion: "descripcion de producto F", precio: 5000, categoria: "B"},
    { id: 7, titulo: "Producto G", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLIbUVyh6FrkhoLzwmjUE_zF-xmRte1cS13n3-wnG17FFpDsYtgtvtiR5bpftP41yhBs&usqp=CAU", descripcion: "descripcion de producto G", precio: 2000, categoria: "B"},
    { id: 8, titulo: "Producto H", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxLg1TTrNlG-It2r32dLCAyteP_ovBgsoK0kU-1auxZjCF0nNO9E7jPVTMHgHULeG620&usqp=CAU", descripcion: "descripcion de producto H", precio: 6000, categoria: "B"},
    { id: 9, titulo: "Producto I", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzcnnV7h7hfODkqrVYH3yJwB0U1L-vBxFLQ&usqp=CAU", descripcion: "descripcion de producto I", precio: 1400, categoria: "B"},
    { id: 10, titulo: "Producto J", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1aEo7jsSVAkaFH5H0nWEaIVvfbipCjK6Rw&usqp=CAU", descripcion: "descripcion de producto J", precio: 2300, categoria: "B"},
    { id: 11, titulo: "Producto K", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3UGJnMfqukIPqe2h4P0P0-uSd9HagLEI96disHzp5sWNHQiRzru9DVYiBB2041mxeOk&usqp=CAU", descripcion: "descripcion de producto K", precio: 2600, categoria: "C"},
    { id: 12, titulo: "Producto L", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHxWLZ-M4YoGr0MBWu7ELTlo_h_Jvmbj2Vw&usqp=CAU", descripcion: "descripcion de producto L", precio: 8700, categoria: "C"},
    { id: 13, titulo: "Producto M", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO77TybsXTAZYXK4Ng7arqAdq8rElAGIF-Zg&usqp=CAU", descripcion: "descripcion de producto M", precio: 5900, categoria: "C"},
    { id: 14, titulo: "Producto N", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRgpUROEgdY9Qu_TZluAgLMZGHyxmOFIb1g&usqp=CAU", descripcion: "descripcion de producto N", precio: 4800, categoria: "C"},
    { id: 15, titulo: "Producto O", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdZ0iQR9I-ASxEg9xJrr2hzvv1iRuSLaWJQ&usqp=CAU", descripcion: "descripcion de producto O", precio: 5600, categoria: "C"},
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    } else {
        reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  const productosFiltrados = productos.filter((producto) => producto.categoria == categoryId)

  return (
    <div>
      {
      categoryId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer