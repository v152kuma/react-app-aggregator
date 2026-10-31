
import {useState} from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data.js";

function App() {

  const [selectedTab, setSelectedTab] = useState("components");
  
  const handleClick = (tab) => {
        setSelectedTab(tab);
        console.log("Selected Tab: ", tab);
    }
    
  return (
    <div>
     <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts {...concept}
              />
            ))}
          </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
          <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
          <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu> 
          <div id="tab-content">
             <h3>{EXAMPLES[selectedTab].title}</h3>
             <p>{EXAMPLES[selectedTab].description}</p>
             <pre><code>{EXAMPLES[selectedTab].code}</code></pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
