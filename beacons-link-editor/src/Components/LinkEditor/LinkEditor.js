import './LinkEditor.css'

const LinkEditor = ({ link }) => {
return(
    <div className="link-editor-wrapper">
        <div className="link-title">
        Title: { link.linkTitle }
        </div>
        <div className="link-url">
        Url: { link.linkUrl }
        </div>
        <button>Delete</button>
    </div>
)
}

export default LinkEditor;
