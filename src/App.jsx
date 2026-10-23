

import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
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
      </main>
    </div>
  );
}

export default App;
