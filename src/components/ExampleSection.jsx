import React from 'react'
import { useState } from 'react';
import { CORE_CONCEPTS } from '../data/data.js';
import TabButton from './TabButton.jsx';
import Message from './Message.jsx';
import CoreContent from './CoreContent.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

function ExampleSection() {

    
  const [selectedTab, setSelectedTab] = useState();
  
  const handleClick = (tab) => {
        setSelectedTab(tab);
        console.log("Selected Tab: ", tab);
    }

  return (
    <Section title="Examples" id="examples">
          <Tabs buttons = {
          CORE_CONCEPTS.map((concept) => (
            <TabButton  key={concept.title} onSelect={() => handleClick(concept.title.toLowerCase())} isSelected={selectedTab === concept.title.toLowerCase()}>
              {concept.title.toLocaleUpperCase()}
            </TabButton>
          ))
          }>

          {!selectedTab ? <Message /> : <CoreContent selectedTab={selectedTab} /> }
          </Tabs> 
          
     </Section>
  )
}

export default ExampleSection