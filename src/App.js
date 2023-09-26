
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex" , justifyContent: "center"}} >
        {/* POSTS & SIDE MENU CONTAINER */}
        <div style={{ display: "flex" , width:"60%" }}>
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/*== POSTS CONTAINER ==*/}
           
          {/* SIDE MENU CONTAINER */}
          <div style={{ width: "30%"}}>
           <SideMenu />
          </div>
          {/*== SIDE MENU CONTAINER ==*/}
        </div>
        {/*== POSTS & SIDE MENU CONTAINER ==*/}
      </div>
    </div>
  );
}

export default App;
