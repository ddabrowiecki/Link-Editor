import './LinkEditor.css'
import AddOrEditLink from "../AddOrEditLink/AddOrEditLink";
import { useState } from "react";

const LinkEditor = ({ link }) => {
    const [isEditing, setIsEditing] = useState(false)
return(
    isEditing ? <AddOrEditLink isEditing={isEditing} /> : (
    <div className="link-editor-wrapper">
        <div className="link-title">
        Title: { link.title }
        </div>
        <div className="link-url">
        Url: { link.url }
        </div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button>Delete</button>
    </div>)
)
}

export default LinkEditor;
