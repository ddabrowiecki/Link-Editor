import './LinkPreviewCard.css'
import LinkPreview from "../LinkPreview/LinkPreview"

const LinkPreviewCard = ({ title, links }) => {
    console.log(links)
    return (
        <div className="preview-card-wrapper">
            <div>{title}</div>
            {links.map(link => <LinkPreview link={link} />)}
        </div>
    )
}

export default LinkPreviewCard;
