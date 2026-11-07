
import {useState} from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data.js";
import Message from "./components/Message.jsx";
import CoreContent from "./components/CoreContent.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";

function App() {

  const [selectedTab, setSelectedTab] = useState();
  
  const handleClick = (tab) => {
        setSelectedTab(tab);
        console.log("Selected Tab: ", tab);
    }
    
  return (
    <>
     <Header />
      <main>
        <CoreConceptsSection />
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
          {CORE_CONCEPTS.map((concept) => (
            <TabButton  key={concept.title} onSelect={() => handleClick(concept.title.toLowerCase())} isSelected={selectedTab === concept.title.toLowerCase()}>
              {concept.title.toLocaleUpperCase()}
            </TabButton>
          ))}
          </menu> 
          {!selectedTab ? <Message /> : <CoreContent selectedTab={selectedTab} /> }
        </section>
      </main>
    </>
  );
}

export default App;
