import { usePathname } from "next/navigation";

function Navbar() {
  const navItems = [
    { id: 0, text: "Início", href: "/" },
    { id: 1, text: "Sobre", href: "/sobre" },
    { id: 2, text: "Produtos", href: "/produtos" },
    { id: 3, text: "Contato", href: "/contato" },
  ];

  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white/75 bg-opacity-5 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="/logos/minimal_logo.png"
              className="h-10 sm:h-15 me-1 sm:me-3"
              alt="Logo Mensageira"
            />
            <span className="self-center text-xl sm:text-3xl mt-2 antecf whitespace-nowrap font-bold text-green-700">
              MENSAGEIRA
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              target="_blank"
              href="https://wa.me/5511966433031"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Saiba mais
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`
                      block py-2 px-3 rounded-sm md:p-0
                      ${pathname === item.href ? "bg-green-700 text-white md:text-green-700 md:bg-transparent" : "text-black hover:text-green-700"}
                    `}
                    aria-current="page"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </>
  );
}

export default Navbar;
