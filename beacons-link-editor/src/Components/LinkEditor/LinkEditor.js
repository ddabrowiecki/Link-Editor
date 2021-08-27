import "./LinkEditor.css";
import AddOrEditLink from "../AddOrEditLink/AddOrEditLink";
import { useState } from "react";

const LinkEditor = ({ link, updateLinks, deleteLink }) => {
  const [isEditingLink, setIsEditingLink] = useState(false);
  return isEditingLink ? (
    <AddOrEditLink
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
      <button onClick={() => deleteLink(link.id)}>Delete</button>
    </div>
  );
};

export default LinkEditor;
