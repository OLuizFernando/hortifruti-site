function StaticBanner(props) {
  return (
    <>
      <div className="relative w-full">
        <div className="relative h-70 md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 opacity-100">
            <img
              src={props.src}
              className="block w-full h-full object-cover"
              alt={`Banner ${props.title}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <p className="text-white text-2xl md:text-4xl font-bold text-center px-4 mb-5 mt-15 md:mt-10">
                {props.title}
              </p>
              <p className="text-white text-xl md:text-2xl text-center px-4">
                {props.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaticBanner;
