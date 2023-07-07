const LoadMoreButton = (props) => <button onClick={()=>props.getData(props.postsLength)}>Load more</button>

export default LoadMoreButton;