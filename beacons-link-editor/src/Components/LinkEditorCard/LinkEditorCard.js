import LinkEditor from "../LinkEditor/LinkEditor";
import AddOrEditLink from "../AddOrEditLink/AddOrEditLink";
import "./LinkEditorCard.css";


const LinkEditorCard = ({ links, title, setAddedLinks }) => {
  return (
    <div className="editor-card-wrapper">
      <div>{title}</div>
      {links.map(
        (link) =>
          link.title && link.url && <LinkEditor key={link.id} link={link} />
      )}
      <AddOrEditLink setAddedLinks={setAddedLinks} />
    </div>
  );
};

export default LinkEditorCard;
