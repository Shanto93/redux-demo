import {
  useGetPostsQuery,
  useGetSinglePostsQuery,
} from "../redux/features/baseAPI";

const Home = () => {
  const { data: postData, isLoading: postsLoading } = useGetPostsQuery();
  const { data: singlePost } = useGetSinglePostsQuery(2);
  console.log(singlePost);
  if (postsLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {postData?.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>

      {/* Single Post */}
      <h2 className="text-2xl font-bold text-center">Single Post</h2>
      <div>
        <h2>{singlePost.title} </h2>
      </div>
    </div>
  );
};

export default Home;
