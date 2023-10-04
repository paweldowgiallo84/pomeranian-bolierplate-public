import './styles.css';

import cssIcon from '../../Images/tech-stack/CSS3.svg';
import htmlIcon from '../../Images/tech-stack/HTML5.svg';
import typeScriptIcon from '../../Images/tech-stack/Typescript.svg';
import javaScriptIcon from '../../Images/tech-stack/JavaScript.svg';
import reactIcon from '../../Images/tech-stack/React.svg';
import gitHubIcon from '../../Images/tech-stack/GitHub.svg';
import bigBucketIcon from '../../Images/tech-stack/Bitbucket.svg';
import jestIcon from '../../Images/tech-stack/Jest.svg';
import fireBaseIcon from '../../Images/tech-stack/Firebase.svg';
import reduxIcon from '../../Images/tech-stack/Redux.svg';
import gitIcon from '../../Images/tech-stack/Git.svg';
import vscIcon from '../../Images/tech-stack/VSC.svg';
import discordIcon from '../../Images/tech-stack/Discord.svg';
import jiraIcon from '../../Images/tech-stack/Jira.svg';
import redmineIcon from '../../Images/tech-stack/Redmine.svg';

export const TechStack = () => {
  const techstackIons = [
    {
      icon: <img className="svg__normal__size" src={cssIcon} alt="CSS" />,
      techstachTitle: 'CSS',
    },
    {
      icon: <img className="svg__normal__size" src={htmlIcon} alt="HTML" />,
      techstachTitle: 'HTML',
    },
    {
      icon: (
        <img
          className="svg__normal__size"
          src={typeScriptIcon}
          alt="TypeScript"
        />
      ),
      techstachTitle: 'TypeScript',
    },
    {
      icon: (
        <img
          className="svg__normal__size"
          src={javaScriptIcon}
          alt="JavaScript"
        />
      ),
      techstachTitle: 'JavaScript',
    },
    {
      icon: <img className="svg__normal__size" src={reactIcon} alt="React" />,
      techstachTitle: 'React',
    },
    {
      icon: <img className="svg__normal__size" src={gitHubIcon} alt="Github" />,
      techstachTitle: 'Github',
    },
    {
      icon: (
        <img
          className="svg__normal__size"
          src={bigBucketIcon}
          alt="Bigbucket"
        />
      ),
      techstachTitle: 'Bigbucket',
    },
    {
      icon: <img className="svg__normal__size" src={jestIcon} alt="Jest" />,
      techstachTitle: 'Jest',
    },
    {
      icon: (
        <img className="svg__normal__size" src={fireBaseIcon} alt="Firebase" />
      ),
      techstachTitle: 'Firebase',
    },
    {
      icon: <img className="svg__normal__size" src={reduxIcon} alt="Redux" />,
      techstachTitle: 'Redux',
    },
    {
      icon: <img className="svg__normal__size" src={gitIcon} alt="Git" />,
      techstachTitle: 'Git',
    },
    {
      icon: <img className="svg__normal__size" src={vscIcon} alt="VSCode" />,
      techstachTitle: 'VSCode',
    },
    {
      icon: (
        <img className="svg__normal__size" src={discordIcon} alt="Discord" />
      ),
      techstachTitle: 'Discord',
    },
    {
      icon: <img className="svg__normal__size" src={jiraIcon} alt="Jira" />,
      techstachTitle: 'Jira',
    },
    {
      icon: (
        <img className="svg__normal__size" src={redmineIcon} alt="Redmine" />
      ),
      techstachTitle: 'Redmine',
    },
  ];

  return (
    <div className="techstack">
      <div className="techstack--title">
        <h3>My Tech Stack</h3>
        <p>Technologies I have learned and programs I use</p>
      </div>

      <div className="techstack__icon--container">
        {techstackIons.map((tech) => (
          <div key={tech.techstachTitle} className="tech__icon">
            <span className="tech__icon--icon">{tech.icon}</span>
            <span className="tech__icon--title">{tech.techstachTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
