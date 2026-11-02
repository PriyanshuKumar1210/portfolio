import './skill.css';
const groups = [
  { title: 'Frontend', items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', items: ['C#', 'ASP.NET Core', 'Web API', 'Node.js', 'Express.js', 'ADO.NET'] },
  { title: 'Database', items: ['PostgreSQL', 'Microsoft SQL Server', 'MongoDB'] },
  { title: 'Tools & practices', items: ['Git', 'GitHub', 'Docker', 'Postman', 'REST APIs', 'JWT Authentication'] },
];
export default function Skill() {
  return (
    <section className="skills-section">
      <p className="section-kicker">WHAT I WORK WITH</p>
      <h2 className="section-heading">Technical <span className="gradient-text">toolkit</span></h2>
      <div className="skills-grid">{groups.map(group => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
    </section>
  );
}
