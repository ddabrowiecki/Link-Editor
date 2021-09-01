import "./LinkPreviewCard.css";
import LinkPreview from "../LinkPreview/LinkPreview";
import { useState } from "react";

const LinkPreviewCard = ({ title, links, updateClicks }) => {
const [className, setClassName] = useState('link-preview')
  const toggleRoundedCorners = () => {
    if (className === "link-preview rounded-corners") {
      setClassName("link-preview");
    }
    if (className === "link-preview") {
      setClassName("link-preview rounded-corners");
    }
  };
  return (
    <div className={"preview-card-wrapper"}>
      <div>{title}</div>
      {links.map((link) => (
        <div className={className}  onClick={toggleRoundedCorners} key={link.id}>
          <LinkPreview className={className} link={link} updateClicks={updateClicks} />
        </div>
      ))}
    </div>
  );
};

export default LinkPreviewCard;
