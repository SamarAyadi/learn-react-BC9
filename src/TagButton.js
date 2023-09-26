import "./TagButtonStyle.css";

function TagButton({ title, children }) {
  return (
    <>
      {title == null || title == "" ? (
        <div></div>
      ) : (
        <button className="tagButton">
          {title}
          {children}
        </button>
      )}
    </>
  );
}

export default TagButton;
