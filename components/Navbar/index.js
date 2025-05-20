import { usePathname } from "next/navigation";

function Navbar() {
  const navItems = [
    { id: 0, text: "Início", href: "/" },
    { id: 1, text: "Sobre", href: "/#sobre" },
    { id: 2, text: "Produtos", href: "/produtos" },
    { id: 3, text: "Contato", href: "#contato" },
  ];

  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white/75 bg-opacity-5 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="/logos/logo_symbol.png"
              className="h-10 sm:h-13 me-3"
              alt="Logo Marfruti"
            />
            <img
              src="/logos/logo_write.png"
              className="h-6 sm:h-9 hidden sm:block"
              alt="Logo Marfruti"
            />
          </a>
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <a
              target="_blank"
              href="https://wa.me/5511966433031"
              className="text-white bg-[#26530E] hover:bg-[#183409] flex items-center justify-center focus:ring-4 focus:outline-none focus:ring-[#26530E]/40 font-medium rounded-lg px-3 py-0 sm:px-4 sm:py-2 text-sm md:text-lg transition-all duration-200 ease-in-out"
            >
              Saiba mais
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-200 ease-in-out"
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
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col text-lg p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`
                      block py-2 px-3 rounded-sm lg:p-0 text-xl transition-all duration-200 ease-in-out
                      ${pathname === item.href ? "bg-[#26530E] text-white lg:text-[#26530E] lg:bg-transparent" : "text-black hover:text-[#26530E]"}
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
