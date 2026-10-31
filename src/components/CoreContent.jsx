import React from 'react'
import { EXAMPLES } from '../data/data.js';

function CoreContent({ selectedTab }) {
  return (
              <div id="tab-content">
                 <h3>{EXAMPLES[selectedTab].title}</h3>
                 <p>{EXAMPLES[selectedTab].description}</p>
                 <pre><code>{EXAMPLES[selectedTab].code}</code></pre>
              </div>
  )
}

export default CoreContent