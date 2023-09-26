import TagButton from "./TagButton"

function Post( { postName = "no title", postBody } ) {
  return (
      <div style={{ padding: "10px", border: "solid #1d9bf0 5px",  margin:"25px"}}>
      <h2>{ postName }</h2>
      <hr />
      <p>
       {postBody}
          </p>
          <TagButton />
      </div>
  )
}

export default Post