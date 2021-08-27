import "./App.css";
import LinkEditorCard from "./Components/LinkEditorCard/LinkEditorCard";
import LinkPreviewCard from "./Components/LinkPreviewCard/LinkPreviewCard";
import { useState, useEffect } from "react";

function App() {
  const [linksInBackend, setLinksInBackend] = useState([]);
  const [addedLinks, setAddedLinks] = useState([]);

  useEffect(() => {
    function getInitialData() {
      return fetch("https://retoolapi.dev/T6xAX6/links").then((response) =>
        response.json()
      );
    }

    getInitialData().then((result) => setLinksInBackend(result));
  }, []);

  const updateLinks = (linkObject) => {
    const newLinkList = linksInBackend.map((link) => (link.id === linkObject.id ? linkObject : link));
    setLinksInBackend(newLinkList)
  };

  const buildLinksWithIds = () => {
    const addedLinksWithIds = addedLinks.map((link) => {
      return { link: link, title: link.title, clicks: 0, id: "blah" };
    });
    return addedLinksWithIds;
  };

  // if (addedLinks) {
  //   const linksToAdd = buildLinksWithIds();
  //   setPresentationalLinks(presentationalLinks.concat(linksToAdd))
  // }

  return (
    <div className="App">
      <LinkEditorCard
        className="link-editor-card"
        links={linksInBackend}
        title={"Add New Links"}
        setAddedLinks={setAddedLinks}
        updateLinks={updateLinks}
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
