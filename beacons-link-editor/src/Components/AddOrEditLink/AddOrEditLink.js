import { useState } from "react";

const AddOrEditLink = ({ setAddedLinks, setIsEditingLink, addOrEdit, updateLinks, id }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleAddingLinks = (title, url) => {
    if (addOrEdit === 'add') {
        setAddedLinks([{ title, url }]);
    }
    if (addOrEdit === "edit") {
        updateLinks({title, url, id, clicks: 0})
      setIsEditingLink(false);
    }
  };

  return (
    <form className="add-link-widget">
      <label>Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label>URL: </label>
      <input
        type="text"
        id="url"
        name="url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />

      <button type="button" onClick={() => handleAddingLinks(title, url)}>
        Add
      </button>
    </form>
  );
};

export default AddOrEditLink;
