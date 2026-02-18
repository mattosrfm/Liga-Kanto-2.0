"use client";
import { useState } from "react";

export default function Home() {
  const [treinadores, setTreinadores] = useState([]);
  const [nome, setNome] = useState("");

  function adicionarTreinador() {
    if (!nome) return;
    setTreinadores([...treinadores, { nome, vitorias: 0, derrotas: 0 }]);
    setNome("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📟 Liga de Kanto 2.0</h1>

      <input
        placeholder="Nome do Treinador"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={adicionarTreinador}>Adicionar</button>

      <h2>Treinadores</h2>
      {treinadores.map((t, i) => (
        <div key={i} style={{
          border: "2px solid white",
          padding: 10,
          marginTop: 10
        }}>
          {t.nome} | 🏆 {t.vitorias} | ❌ {t.derrotas}
        </div>
      ))}
    </div>
  );
}
