/*global chrome*/

export function eject() {
  const queryInfo = { active: true, currentWindow: true };
  chrome.tabs.query(queryInfo, (tabs) => {
    const activeTabId = tabs[0].id;
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      function: runFunction,
    });
  });
}
function runFunction() {
  const child = document.createElement("div", {}, "mychildren");
  const title = document.createElement("h2", "title");
  title.innerHTML = "test";

  child.appendChild(title);
  document.body.insertBefore(child, document.body.firstChild);

  console.log(child);
}
