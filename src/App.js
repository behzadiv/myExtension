/*global chrome*/
import { useEffect, useState } from "react";
import "./App.css";
import { eject } from "./main";

function App() {
  const [data, setData] = useState({ title: "", url: "" });
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        const title = tabs[0].title;
        setData({ url, title });
      });
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Site Data</h1>
      </div>
      <hr />
      <div className="item">
        <h2>Title:</h2>
        <span>{data.title}</span>
      </div>
      <div className="item">
        <h2>URL:</h2>
        <span>{data.url}</span>
      </div>
      <button onClick={eject} className="btn">
        Eject
      </button>
    </div>
  );
}

export default App;
