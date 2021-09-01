import { useState } from "react";

const AddOrEditLink = ({
  setIsEditingLink,
  addOrEdit,
  updateLinks,
  addLink,
  id,
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleAddingLinks = (title, url) => {
    if (title && url) {
      if (addOrEdit === "add") {
        addLink({ title, url, clicks: 0 });
        setTitle("");
        setUrl("");
      }
      if (addOrEdit === "edit") {
        updateLinks({ title, url, id, clicks: 0 });
        setIsEditingLink(false);
      }
    } else {
      alert("Please enter a valid title and URL");
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
        {addOrEdit === "add" ? "Add" : "Edit"}
      </button>
    </form>
  );
};

export default AddOrEditLink;
