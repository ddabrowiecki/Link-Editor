import "./App.css";
import LinkEditorCard from "./Components/LinkEditorCard/LinkEditorCard";
import LinkPreviewCard from "./Components/LinkPreviewCard/LinkPreviewCard";
import { useState, useEffect } from "react";

function App() {
  const [existingLinks, setExistingLinks] = useState([]);
  const [addedLinks, setAddedLinks] = useState([])

  useEffect(() => {
    fetch("https://retoolapi.dev/T6xAX6/links/?limit=10")
      .then((response) => response.json())
      .then((result) => setExistingLinks(existingLinks.concat(result)));
  }, []);

  return (
    <div className="App">
      <LinkEditorCard
        className="link-editor-card"
        links={existingLinks}
        title={"Add New Links"}
        setAddedLinks={setAddedLinks}
      />
      {console.log(addedLinks)}
      <LinkPreviewCard
        className="link-preview-card"
        links={existingLinks}
        title={"Link Preview"}
      />
    </div>
  );
}

export default App;
