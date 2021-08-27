const LinkPreview = ({ link, updateClicks }) => {
    const handleClick = () => {
        link.clicks += 1;
        updateClicks(link)
    }
    return (<div onClick={handleClick}>{link.title}</div>)
}

export default LinkPreview;
