import LinkEditor from "../LinkEditor/LinkEditor";
import './LinkEditorCard.css'

const LinkEditorCard = ({ links, title }) => {
  return (
    <div className="editor-card-wrapper">
      <div>{title}</div>
      {links.map((link) => (
        <LinkEditor link={link} />
      ))}

      <button>Add New Link</button>
    </div>
  );
};

export default LinkEditorCard;
