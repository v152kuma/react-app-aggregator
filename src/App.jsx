
import {useState} from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data.js";
import Message from "./components/Message.jsx";
import CoreContent from "./components/CoreContent.jsx";

function App() {

  const [selectedTab, setSelectedTab] = useState();
  
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
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
          {CORE_CONCEPTS.map((concept) => (
            <TabButton key={concept.title} onSelect={() => handleClick(concept.title.toLowerCase())}>
              {concept.title.toLocaleUpperCase()}
            </TabButton>
          ))}
          </menu> 
          {!selectedTab ? <Message /> : <CoreContent selectedTab={selectedTab} /> }
        </section>
      </main>
    </div>
  );
}

export default App;
