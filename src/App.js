import React from 'react';
import { generateSite } from './gpt';

const response = await generateSite();

function GeneratedHTML() {
  return <div dangerouslySetInnerHTML={{ __html: response }} />;
}

function App() {
  return (
    <div className="App">
      <GeneratedHTML />
    </div>
  );
}

export default App;
