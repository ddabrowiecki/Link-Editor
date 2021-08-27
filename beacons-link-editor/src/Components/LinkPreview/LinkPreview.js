// import ColorPicker from "../ColorPicker/ColorPicker"

const LinkPreview = ({ link, updateClicks }) => {
    const handleClick = () => {
        link.clicks += 1;
        updateClicks(link)
    }
    // <ColorPicker />

    return (<div onClick={handleClick}>{link.title}</div>)
}

export default LinkPreview;
