import './App.css';
import AppRoutes from './../src/route'; // Import your custom component
import SideBarMenu from './../src/SideBarMenu';


function App() {
  return (
    <div className="App">
           <SideBarMenu />
           <div className="content">

      <AppRoutes/> {/* Render the AppRoutes component here */}
    </div>
    </div>
  );
}

export default App;
