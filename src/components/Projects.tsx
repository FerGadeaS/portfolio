
const projects = [
  {
    title: 'Reconocimiento facial y de emociones',
    description:
      'Sistema web que utiliza Inteligencia Artificial para identificar estudiantes y analizar sus expresiones en tiempo real para clasificar emociones durante una clase.',
    technologies: ['Python', 'Django', 'TensorFlow', 'OpenCV', 'MySQL'],
    type: 'Proyecto académico',
  },
  {
    title: 'Pizarra colaborativa en tiempo real',
    description:
      'Aplicación desarrollada en Java que permite a múltiples usuarios interactuar con una pizarra compartida en tiempo real. Implementa una arquitectura cliente-servidor y utiliza hilos y mecanismos de concurrencia para gestionar múltiples conexiones y solicitudes simultáneas.',
    technologies: ['Java', 'Arquitectura Cliente-Servidor', 'Concurrencia', 'Sockets', 'MySQL'],
    type: 'Proyecto académico',
  },
  {
    title: 'Sistema de registro de asistencia mediante QR',
    description:
      'Aplicaciones para registrar asistencia mediante códigos QR y almacenar registros en bases de datos.',
    technologies: ['Android Studio', 'Firebase', 'PHP', 'MySQL'],
    type: 'Proyecto académico',
  },
];

function Projects() {
  return (
    <section id="proyectos" className="projects-section">
      <div className="section-heading">
        <span className="section-label">Mi trabajo</span>
        <h2>Proyectos destacados</h2>
        <p>
          Algunos proyectos que he desarrollado durante mi formación
          en Ciencias de la Computación.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
