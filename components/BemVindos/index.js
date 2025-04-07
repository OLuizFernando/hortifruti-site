function BemVindos() {
  const itemsData = [
    {
      iconSrc: "icones/importacao.png",
      title: "Importação",
      text: "Temos anos de experiência com importação e distribuição de frutas frescas de qualidade.",
    },
    {
      iconSrc: "icones/qualidade.png",
      title: "Qualidade",
      text: "Nos comprometemos em manter boas relações com produtores mundiais e selecionar suas melhores ofertas.",
    },
    {
      iconSrc: "icones/confianca.png",
      title: "Confiança",
      text: "Atendimento honesto, transparente e eficiente, com preços altamente competitivos.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center py-20 md:py-25 bg-gradient-to-br from-neutral-100 to-neutral-300">
        <h2 className="text-4xl md:text-5xl font-bold mb-15 md:mb-20 text-center">
          Bem-Vindo à Mensageira
        </h2>
        <div className="flex flex-col md:flex-row text-center px-10">
          {itemsData.map((item) => (
            <div className="flex flex-col justify-center items-center px-7 mb-15 md:mb-auto flex-1">
              <img width="95" className="mb-3" src={item.iconSrc} />
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BemVindos;
