"use client";
import { useState } from "react";

// Placeholder de 8 grupos com 5 treinadores cada
const GRUPOS = [
  { nome: "Grupo A", treinadores: ["Treinador A1","Treinador A2","Treinador A3","Treinador A4","Treinador A5"] },
  { nome: "Grupo B", treinadores: ["Treinador B1","Treinador B2","Treinador B3","Treinador B4","Treinador B5"] },
  { nome: "Grupo C", treinadores: ["Treinador C1","Treinador C2","Treinador C3","Treinador C4","Treinador C5"] },
  { nome: "Grupo D", treinadores: ["Treinador D1","Treinador D2","Treinador D3","Treinador D4","Treinador D5"] },
  { nome: "Grupo E", treinadores: ["Treinador E1","Treinador E2","Treinador E3","Treinador E4","Treinador E5"] },
  { nome: "Grupo F", treinadores: ["Treinador F1","Treinador F2","Treinador F3","Treinador F4","Treinador F5"] },
  { nome: "Grupo G", treinadores: ["Treinador G1","Treinador G2","Treinador G3","Treinador G4","Treinador G5"] },
  { nome: "Grupo H", treinadores: ["Treinador H1","Treinador H2","Treinador H3","Treinador H4","Treinador H5"] },
];

// Placeholder de tipos de campo
const CAMPOS = ["Água", "Planta", "Gelo", "Terra"];

export default function Home() {
  const [showRegras, setShowRegras] = useState(false);
  const [ranking, setRanking] = useState(() => {
    // Cria ranking inicial local
    return GRUPOS.flatMap((g) =>
      g.treinadores.map((nome) => ({
        nome,
        vitorias: 0,
        derrotas: 0,
        grupo: g.nome,
        campo: CAMPOS[Math.floor(Math.random() * 4)],
        pokemon: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png"
      }))
    );
  });

  // Funções para vitórias/derrotas
  function registrarVitoria(index) {
    const copy = [...ranking];
    copy[index].vitorias += 1;
    setRanking(copy);
  }

  function registrarDerrota(index) {
    const copy = [...ranking];
    copy[index].derrotas += 1;
    setRanking(copy);
  }

  return (
    <div style={{ backgroundColor: "#1b1b1b", color: "white", fontFamily: "monospace", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ color: "#d32f2f" }}>📟 Liga de Kanto 2.0</h1>

      <button
        style={{ marginBottom: 20, padding: 5, backgroundColor: "#d32f2f", color: "white", border: "none", cursor: "pointer" }}
        onClick={() => setShowRegras(!showRegras)}
      >
        {showRegras ? "Fechar Regras" : "Mostrar Regras"}
      </button>

      {showRegras && (
        <div style={{ backgroundColor: "#2b2b2b", padding: 15, marginBottom: 20, borderRadius: 5 }}>
          <p>A Liga de Kanto funciona da seguinte forma:</p>
          <ul>
            <li>4 campos: água, gelo, terra e planta, lutas 3x3</li>
            <li>A partir das oitavas: campo neutro, 3x3</li>
            <li>Das quartas em diante: campo neutro, 6x6</li>
            <li>Qualificatórias: dados nas ordens 5 5 5, 5 5 6, 5 6 6 e 6 6 6</li>
            <li>Bônus de ATK baseado no campo (ex.: campo de plantas → +50 ataques planta)</li>
            <li>8 chaves Q1 até Q8 representando confrontos até as quartas</li>
          </ul>
        </div>
      )}

      <h2>🏆 Ranking (Local)</h2>
      {ranking.map((t, i) => (
        <div key={i} style={{
          border: "2px solid #d32f2f",
          padding: 10,
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          gap: 10
        }}>
          <img src={t.pokemon} alt={t.nome} width={40} height={40} />
          <div style={{ flex: 1 }}>
            {t.nome} | Grupo: {t.grupo} | Campo: {t.campo} | 🏆 {t.vitorias} | ❌ {t.derrotas}
          </div>
          <button onClick={() => registrarVitoria(i)} style={{ marginRight: 5 }}>+Vitória</button>
          <button onClick={() => registrarDerrota(i)}>+Derrota</button>
        </div>
      ))}

      <h2 style={{ marginTop: 40 }}>🎮 Chaveamento Q1–Q8</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 15 }}>
        {ranking.slice(0, 8).map((t, i) => (
          <div key={i} style={{ border: "2px solid #d32f2f", padding: 10, borderRadius: 5, textAlign: "center" }}>
            <img src={t.pokemon} alt={t.nome} width={50} height={50} />
            <p>{t.nome}</p>
            <small>Chave Q{i+1}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
