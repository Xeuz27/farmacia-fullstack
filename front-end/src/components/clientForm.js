import  Axios  from 'axios';
import React from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

function validateEmail(valor) {
  const regexp = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
  if ( regexp.test(valor) ) {
    return true;
  } else {
    return false;
  }
}

export default function RegistroCliente() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  // const [loading, setLoading] = useState(false)

  Axios.defaults.withCredentials = false;

  const serverRegisterReq = async () => {
    Axios.post("http://localhost:3001/upload/Client", {
      nombre  : nombre,
      cedula  : cedula,
      email   : email,
      telefono: telefono
    }).then( alert('cliente registrado exitosamente'));
  };

  const idFact = localStorage.getItem('idFact')


  return (
<div className={styles.home}>
      <div className={styles.clientForm}>
          <input onChange={(val) => setNombre(val.target.value)}
              placeholder="Nombre"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}>
          </input> <br />
          <input onChange={(val) => setEmail(val.target.value)}
              placeholder="email@mail.com"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}>
          </input><br />
          <input onChange={(val) => setCedula(val.target.value)}
              placeholder="cedula de identidad"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}>
          </input><br />
          <input onChange={(val) => setTelefono(val.target.value)}
              placeholder="Telefono"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}>
          </input> <br />
          <Link
            to={`/factura/${idFact}`}
            className="submit-button"
            onClick={serverRegisterReq}
          >
            Register
          </Link>
      </div>
</div>
  );
}

