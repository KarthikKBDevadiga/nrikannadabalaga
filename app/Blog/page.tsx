// pages/blog.js
'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.',
    },
    {
        id: 3,
        title: 'Second Blog Post',
        content: 'This is the content of the second blog post.',
      },
      {
        id: 4,
        title: 'Second Blog Post',
        content: 'This is the content of the second blog post.',
      },
      {
        id: 5,
        title: 'Second Blog Post',
        content: 'This is the content of the second blog post.',
      },
      {
        id: 6,
        title: 'Second Blog Post',
        content: 'This is the content of the second blog post.',
      },
    // Add more blog posts
  ];

  // Function to generate a random image URL from Lorem Picsum
  const getRandomImageUrl = () => {
    const width = 400; // Adjust the width as needed
    const height = 300; // Adjust the height as needed
    return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 100)}`;
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4">Blog Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <img
              src={getRandomImageUrl()} // Generate a random image URL
              alt={post.title}
              className="w-full h-48 object-cover mb-2"
            />
            <p className="text-gray-600">{post.content}</p>
            <Link href={`/blog/${post.id}`}>
              <div className="text-blue-500 hover:underline mt-2">Read more</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
