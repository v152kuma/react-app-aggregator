

import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data/data.js";

function App() {
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
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
          </menu> 
        </section>
      </main>
    </div>
  );
}

export default App;
