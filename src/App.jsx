import { useState } from 'react';
import './App.css';
import { InputArea } from './components/InputArea';
import { TableSection } from './components/TableSection';
import { TreeView } from './components/TreeView';

function App() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <div className="app-container">
      <h1>JSON Lens</h1>
      <InputArea onJsonChange={setJsonData} />

      <div className="data-display">
        {jsonData ? (
          <div className="views-container">
            <div className="tree-view">
              <h2>Tree View</h2>
              <TreeView data={jsonData} />
            </div>
            <div className="table-view">
              <h2>Table View</h2>
              <TableSection data={jsonData} />
            </div>
          </div>
        ) : (
          <p>Please enter valid JSON data to view the structure.</p>
        )}
      </div>
    </div>
  );
}

export default App;
