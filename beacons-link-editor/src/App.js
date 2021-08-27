
import './App.css';
import LinkEditorCard from './Components/LinkEditorCard/LinkEditorCard'
import LinkPreviewCard from './Components/LinkPreviewCard/LinkPreviewCard'

const links = [{ linkUrl: 'http://www.google.com', linkTitle: "Google" }, { linkUrl: 'http://www.youtube.com', linkTitle: "YouTube" }]
function App() {
  return (
    <div className="App">
      <LinkEditorCard className="link-editor-card" links={links} title={'Add New Links'}/>
      <LinkPreviewCard className="link-preview-card" links={links} title={'Link Preview'}/>
    </div>
  );
}

export default App;
