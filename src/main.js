/*global chrome*/

export function eject() {
  const queryInfo = { active: true, currentWindow: true };
  chrome.tabs.query(queryInfo, (tabs) => {
    const activeTabId = tabs[0].id;
    chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      function: addToBottom,
    });
  });
}
function addToBottom() {
  chrome.storage.sync.get("data", ({ data }) => {
    const child = document.createElement("div", {}, "mychildren");
    const title = document.createElement("h5", "title");
    const url = document.createElement("h5", "url");
    title.innerHTML = `Title : ${data.title}`;
    url.innerHTML = `URL : ${data.url}`;
    child.setAttribute(
      "style",
      "background-color: #eee; width: 100%; position:fixed; bottom:0;padding:1rem;text-align:center;margin-top:100px"
    );
    child.appendChild(title);
    child.appendChild(url);
     //document.body.insertBefore(child, document.body.lastChild);
    const referenceNode = document.body.lastChild;
    insertAfter(referenceNode, child);
  });
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
