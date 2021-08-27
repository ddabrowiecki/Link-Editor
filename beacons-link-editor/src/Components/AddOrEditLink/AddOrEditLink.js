import { useState } from "react";

const AddLinkWidget = ({ setAddedLinks }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
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
  
        <button type='button'  onClick={() => setAddedLinks([{title, url}])}>Add</button>
      </form>
    );
  };

  export default AddLinkWidget;
