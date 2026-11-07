
import {useState} from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data/data.js";
import Message from "./components/Message.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import ExampleSection from "./components/ExampleSection.jsx";

function App() {

    
  return (
    <>
     <Header />
      <main>
        <CoreConceptsSection />
        <ExampleSection />
      </main>
    </>
  );
}

export default App;
