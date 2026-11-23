
import {
  SiPython,
  SiOpenjdk,
  SiPhp,
  SiJavascript,
  SiDjango,
  SiReact,
  SiTensorflow,
  SiOpencv,
  SiAndroidstudio,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
} from '@icons-pack/react-simple-icons';

const skillGroups = [
  {
    title: 'Lenguajes de programación',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'PHP', icon: SiPhp },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Frameworks y herramientas',
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'React', icon: SiReact },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Android Studio', icon: SiAndroidstudio },
    ],
  },
  {
    title: 'Bases de datos',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'Otras tecnologías',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="habilidades">
      <div className="section-heading">
        <span className="section-label">MIS CONOCIMIENTOS</span>
        <h2>Habilidades técnicas</h2>
        <p>
          Tecnologías y herramientas que he utilizado durante mi formación
          académica y desarrollo de proyectos.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-item" key={skill.name}>
                    <Icon size={32} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
