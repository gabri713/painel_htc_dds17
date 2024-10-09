import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";
import FormAula from "../EditarAula/EditarAula";

function CadastroAulas() {
  async function cadastrarAula(infoAula) {
    
    try {
      //POST e usado para inserir elementos na API
      const resposta = await fetch("http://localhost:5000/aulas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(infoAula)
      });

      if (!resposta.ok) {
        console.log("Erro ao criar aula");
      } else {
        alert("Aula cadastrada");
      }
    } catch (error) {
      console.error("Erro no cadastro da aula", error);
    }
  }

  return (
    <div>
      <Navbar />
      <FormAula titulo='Editar Aula' txtBtn='Salvar' id={id} tipo='editada'/>
    </div>
  );
}

export default EditarAula;
