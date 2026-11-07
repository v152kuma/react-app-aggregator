import React from 'react'
import CoreConcepts from './CoreConcepts'
import { CORE_CONCEPTS } from '../data/data.js';
import Section from './Section.jsx';
function CoreConceptsSection() {
  return (
    <Section title="Core Concepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
     </Section>
  )
}

export default CoreConceptsSection