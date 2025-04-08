function ProductCard(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-10 mb-10 mx-auto md:mb-auto md:mx-3 lg:mx-5 px-5 bg-white rounded-md shadow-2xl">
        <img src={props.imgSrc} className="mb-5 rounded-md" />
        <h3 className="text-2xl mb-7 text-center">{props.name}</h3>
        <a
          href={`/produtos/${props.slug}`}
          className=" text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg px-4 py-2"
        >
          Saiba mais
        </a>
      </div>
    </>
  );
}

export default ProductCard;
