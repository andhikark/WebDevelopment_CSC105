import FavoriteSites from "./components/FavoriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import StateAssignmentOne from "./components/StateAssignmentOne"
import StateAssignmentTwo from "./components/StateAssignmentTwo"
import "./styles/App.css"

function App() {
  return (
    <div className="app-container">
      <FavoriteSites/>
      <Profile />
      <Gallery />
      <StateAssignmentOne/>
      <StateAssignmentTwo/>
    </div>
  );
}

export default App;