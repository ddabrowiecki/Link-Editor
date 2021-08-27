import "./App.css";
import LinkEditorCard from "./Components/LinkEditorCard/LinkEditorCard";
import LinkPreviewCard from "./Components/LinkPreviewCard/LinkPreviewCard";
import { useState, useEffect } from "react";

function App() {
  const [linksInBackend, setLinksInBackend] = useState([]);

  useEffect(() => {
    function getInitialData() {
      return fetch("https://retoolapi.dev/T6xAX6/links").then((response) =>
        response.json()
      );
    }

    getInitialData().then((result) => setLinksInBackend(result));
  }, []);

  const updateLinks = (linkObject) => {
    const newLinkList = linksInBackend.map((link) =>
      link.id === linkObject.id ? linkObject : link
    );
    setLinksInBackend(newLinkList);
  };

  const addLink = (linkObject) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(linkObject),
    };
    fetch("https://retoolapi.dev/T6xAX6/links", requestOptions)
      .then((response) => response.json())
      .then((link) => setLinksInBackend(linksInBackend.concat([link])));
  };

  const deleteLink = (id) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`https://retoolapi.dev/T6xAX6/links/${id}`, requestOptions)
      .then((response) => response.json())
      .then((link) =>
        setLinksInBackend(linksInBackend.filter((link) => link.id !== id))
      );
  };

  return (
    <div className="App">
      <LinkEditorCard
        className="link-editor-card"
        links={linksInBackend}
        title={"Add New Links"}
        updateLinks={updateLinks}
        addLink={addLink}
        deleteLink={deleteLink}
      />
      <LinkPreviewCard
        className="link-preview-card"
        links={linksInBackend}
        title={"Link Preview"}
      />
    </div>
  );
}

export default App;
