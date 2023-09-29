
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  const posts = [
    {
      id: 1,
      postName: "PinguCoder",
      postBody: "platform e learning"
    },
    {
      id: 2,
      postName: "PinguCoder 🐧🐧",
      postBody: "Web development"
    },
    {
      id: 3,
      postName: "PinguCoder 😀😀",
      postBody: "Coding"
    },

    {
      id: 4,
      postName: "PinguCoder 😉♦🔋🙄",
      postBody: "Coding IT"
    },
  ]

  const postsList = posts.map((post) => {
    return <Post key={post.id} postName={post.postName}  postBody={post.postBody}  />
  })
  
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex" , justifyContent: "center"}} >
        {/* POSTS & SIDE MENU CONTAINER */}
        <div style={{ display: "flex" , width:"60%" }}>
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>
            {postsList}
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
