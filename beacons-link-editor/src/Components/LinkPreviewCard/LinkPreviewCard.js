import "./LinkPreviewCard.css";
import LinkPreview from "../LinkPreview/LinkPreview";

const LinkPreviewCard = ({ title, links, updateClicks }) => {
  return (
    <div className="preview-card-wrapper">
      <div>{title}</div>
      {links.map((link) => (
          <div className="link-preview" key={link.id}>
        <LinkPreview   link={link} updateClicks={updateClicks} />
        </div>
      ))}
    </div>
  );
};

export default LinkPreviewCard;
