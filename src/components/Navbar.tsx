
function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="logo">
        DEV<span>.</span>
      </a>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;
