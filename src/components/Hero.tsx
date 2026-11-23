
function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-content">

        <span className="eyebrow">
          DESARROLLADOR DE SOFTWARE JUNIOR
        </span>

        <h1>
          Transformando ideas en
          <span> soluciones de software.</span>
        </h1>

        <p>
          Soy egresado de Ciencias de la Computación.
          Me interesa el desarrollo de software, la
          programación y la creación de soluciones
          tecnológicas.
        </p>

        <div className="hero-buttons">
          <a href="#proyectos" className="button primary">
            Ver mis proyectos ↗
          </a>

          <a href="#contacto" className="button secondary">
            Contactarme
          </a>
        </div>

      </div>

      <div className="hero-decoration">

        <div className="code-card">

          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
            <small>developer.ts</small>
          </div>

          <pre>
            <code>
              <span className="code-purple">const</span> developer = {'{'}
              {'\n'}  name: <span className="code-green">"Software Developer"</span>,
              {'\n'}  skills: [<span className="code-green">"Python"</span>,
              {'\n'}           <span className="code-green">"JavaScript"</span>],
              {'\n'}  passion: <span className="code-green">"Building solutions"</span>
              {'\n'}{'}'}
            </code>
          </pre>

        </div>

      </div>

    </section>
  )
}

export default Hero
