import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

const showCategories = true;
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* POSTS & SIDE MENU CONTAINER */}
        <div
          style={{ display: "flex", width: "60%", justifyContent: "center" }}
        >
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>
            <Post
              postName="Hello world"
              postBody="this is the body of the first post "
            />
            <Post postName="Hi 🐧🐧" postBody="hi body " />
            <Post postName="the third post" postBody="Coding " />
            <Post />
            <Post />
            <Post />
          </div>
          {/*== POSTS CONTAINER ==*/}
           
          {/* SIDE MENU CONTAINER */}
          <div style={{ width: "30%", marginTop: "25px" }}>
            <AppSideMenu />
          </div>
          {/*== SIDE MENU CONTAINER ==*/}
        </div>
        {/*== POSTS & SIDE MENU CONTAINER ==*/}
      </div>
    </div>
  );
}

function AppSideMenu() {
  if (showCategories == true) {
    return <SideMenu />;
  } else {
    return null
  }
  
}
export default App;
