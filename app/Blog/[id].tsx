// pages/blog/[id].js
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic route parameter [id]

  // Replace this with actual data fetching logic based on the `id`
  const post = {
    id: id,
    title: 'Sample Blog Post Title',
    content: 'This is the content of the blog post. It can include paragraphs, images, and more.',
    author: 'John Doe',
    date: 'October 15, 2023',
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
        <div className="text-gray-600 text-sm mb-4">
          <p>By {post.author}</p>
          <p>Published on {post.date}</p>
        </div>
        <p className="text-gray-800">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
