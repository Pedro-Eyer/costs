function Seunome({ setNome }) {
  return (
    <div>
      <p>Digite seu Nome:</p>
      <input type="text" placeholder="Digite seu nome aqui" onChange={(e) => setNome(e.target.value)}/>
    </div>
  );
}
export default Seunome;