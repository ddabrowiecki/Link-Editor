import "./LinkEditor.css";
import AddOrEditLink from "../AddOrEditLink/AddOrEditLink";
import { useState } from "react";

const LinkEditor = ({ link, setAddedLinks, updateLinks }) => {
  const [isEditingLink, setIsEditingLink] = useState(false);
  return isEditingLink ? (
    <AddOrEditLink
      setAddedLinks={setAddedLinks}
      setIsEditingLink={setIsEditingLink}
      addOrEdit={"edit"}
      id={link.id}
      updateLinks={updateLinks}
    />
  ) : (
    <div className="link-editor-wrapper">
      <div className="link-title">Title: {link.title}</div>
      <div className="link-url">Url: {link.url}</div>
      <button onClick={() => setIsEditingLink(true)}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default LinkEditor;
