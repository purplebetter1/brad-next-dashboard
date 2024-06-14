import PostsTable from "@/components/posts/PostsTable";
import PostsPagination from "@/components/posts/PostsPagination";
import BackButton from "@/components/BackButton";

const Posts = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default Posts;
