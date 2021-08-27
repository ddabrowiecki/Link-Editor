import LinkEditor from "../LinkEditor/LinkEditor";
import AddOrEditLink from "../AddOrEditLink/AddOrEditLink";
import "./LinkEditorCard.css";

const LinkEditorCard = ({ links, title, updateLinks, addLink, deleteLink }) => {
  return (
    <div className="editor-card-wrapper">
      <div>{title}</div>
      {links.map(
        (link) =>
          link.title &&
          link.url && (
            <LinkEditor
              key={link.id}
              link={link}
              updateLinks={updateLinks}
              deleteLink={deleteLink}
            />
          )
      )}
      <AddOrEditLink addOrEdit={"add"} addLink={addLink}/>
    </div>
  );
};

export default LinkEditorCard;
