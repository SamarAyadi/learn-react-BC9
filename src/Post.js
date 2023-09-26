import TagButton from "./TagButton"

function Post() {
  return (
      <div style={{ padding: "10px", border: "solid #1d9bf0 5px",  margin:"25px"}}>
          <h2>This is the post title</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil itaque
        quis soluta tempore!
          </p>
          <TagButton />
      </div>
  )
}

export default Post