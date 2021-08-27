import './LinkPreviewCard.css'
import LinkPreview from "../LinkPreview/LinkPreview"

const LinkPreviewCard = ({ title, links }) => {
    return (
        <div className="preview-card-wrapper">
            <div>{title}</div>
            {links.map(link => <LinkPreview key={link.id} link={link} />)}
        </div>
    )
}

export default LinkPreviewCard;
