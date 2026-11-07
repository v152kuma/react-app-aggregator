import React from 'react'
import { useState } from 'react';
import { CORE_CONCEPTS } from '../data/data.js';
import TabButton from './TabButton.jsx';
import Message from './Message.jsx';
import CoreContent from './CoreContent.jsx';

function ExampleSection() {

    
  const [selectedTab, setSelectedTab] = useState();
  
  const handleClick = (tab) => {
        setSelectedTab(tab);
        console.log("Selected Tab: ", tab);
    }

  return (
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
  )
}

export default ExampleSection