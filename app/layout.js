export const metadata = {
  title: "Liga de Kanto 2.0",
  description: "Torneio RPG Pokémon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{
        margin: 0,
        fontFamily: "sans-serif",
        backgroundColor: "#8B0000",
        color: "white"
      }}>
        {children}
      </body>
    </html>
  );
}
