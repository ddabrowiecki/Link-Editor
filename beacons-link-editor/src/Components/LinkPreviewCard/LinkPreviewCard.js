import "./LinkPreviewCard.css";
import LinkPreview from "../LinkPreview/LinkPreview";

const LinkPreviewCard = ({ title, links, updateClicks }) => {
  return (
    <div className="preview-card-wrapper">
      <div>{title}</div>
      {links.map((link) => (
        <LinkPreview key={link.id} link={link} updateClicks={updateClicks} />
      ))}
    </div>
  );
};

export default LinkPreviewCard;
