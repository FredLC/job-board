import React from 'react';
import Jobs from './Jobs';
import './App.css';

const url = 'http://localhost:3001/jobs';
async function fetchGithub(updateCallback) {
  let response = await fetch(url);
  let json = await response.json();
  updateCallback(json);
}

function App() {
  const [jobsList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchGithub(updateJobs);
  }, []);

  console.log(jobsList);

  return (
    <div className="App">
      <Jobs jobs={jobsList} />
    </div>
  );
}

export default App;
