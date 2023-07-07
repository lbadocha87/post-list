const Post = (props) => {
  return (
    <div className="post">
      <img src={props.thumbnailUrl} alt={props.title} />
      <h2>
        {props.id}. {props.title}
      </h2>
    </div>
  );
};

export default Post;
