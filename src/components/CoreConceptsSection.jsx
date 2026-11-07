import React from 'react'
import CoreConcepts from './CoreConcepts'
import { CORE_CONCEPTS } from '../data/data.js';
function CoreConceptsSection() {
  return (
    <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
     </section>
  )
}

export default CoreConceptsSection