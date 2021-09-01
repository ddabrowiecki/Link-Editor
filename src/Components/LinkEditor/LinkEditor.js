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
      <div className="edit-delete-button-div">
      <button className="edit-button" onClick={() => setIsEditingLink(true)}>Edit</button>
      <button className="delete-button" onClick={() => deleteLink(link.id)}>Delete</button>
      </div>
    </div>
  );
};

export default LinkEditor;
