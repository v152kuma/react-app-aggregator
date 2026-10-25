

import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data/data.js";

function App() {

  let selectedTab = "Initial Value";
  const handleClick = (selectedTab) => {
        selectedTab = selectedTab;
        console.log("Selected Tab: ", selectedTab);
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
          <TabButton onSelect={() => handleClick('Components')}>Components</TabButton>
          <TabButton onSelect={() => handleClick('JSX')}>JSX</TabButton>
          <TabButton onSelect={() => handleClick('Props')}>Props</TabButton>
          <TabButton onSelect={() => handleClick('State')}>State</TabButton>
          </menu> 
         {selectedTab && <p>Selected Tab: {selectedTab}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
