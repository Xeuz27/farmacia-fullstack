import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import styles from './styles.module.css'

const Detalle = () => {
    const params = useParams();
    const {idFact} = params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
      Axios.get(`http://localhost:3001/upload/factura/${idFact}`)
        .then((res) => {
          console.log(res)
          setData(res.data)
        })
    }, [])

    return (
      <div className={styles.homeDetalle}>
        {data.length === 0 ?
        (<div>loading...</div>)
        :
        <div>
          <h2>Detalles de la factura</h2>
          <div>Fecha {data[0].fecha}</div>
          <div>
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody>
              {data.map((element, index) => (
              <tr key={index}>
                <td> {element.nombreProducto}</td>
                <td> {element.cantidadProd}</td>
                <td> {element.precioProducto}$</td> 
                <td> {element.precioProducto * element.cantidadProd}$</td>
              </tr>
            ))}
              </tbody>
            </Table>
            <Table striped bordered hover>
              <thead>
                <tr>
                <td>Id</td>
                <td>Nombre</td>
                <td>cedula</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data[0].idCLiente}</td>
                  <td>{data[0].nombreCliente}</td>
                  <td>{data[0].cedulaCliente}</td>
                </tr>
              </tbody>
            </Table>
          </div> 
        </div> }
      </div>
    )

}

export default Detalle