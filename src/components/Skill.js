const Skill = (skill) => {
  return (
    <div>
      <div className="skill-item">
        <div className={skill.className}>
          <span className="percentage-number">{skill.points}</span>
        </div>
        <h5>{skill.title}</h5>
      </div>
    </div>
  );
};

export default Skill;
