import reactImg from '../assets/react-core-concepts.png';
import { getRandomInt } from '../utils/GetRandom.js';

const reactDescriptions = ['Fundamental', 'Core','Crucial']

function Header() {

  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return ( <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);
}

export default Header;