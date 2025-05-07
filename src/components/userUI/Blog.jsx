import blog_01 from "../../assets/Blog/blog_01.jpg"
import blog_02 from "../../assets/Blog/blog_02.jpg"
import blog_03 from "../../assets/Blog/blog_03.jpg"
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Our president has complex fight",
    image: blog_01,
    date: "January 1, 2019",
    comments: 0,
    category: "politic",
    excerpt:
      "Our president has a complex fight against corruption by the readable content of a page",
  },
  {
    id: 2,
    title: "Public Sentiment Is Everything",
    image: blog_02,
    date: "January 1, 2019",
    comments: 0,
    category: "politic",
    excerpt:
      "Public sentiment is everything a reader will be distracted by the readable content of a",
  },
  {
    id: 3,
    title: "How to win an impeachment",
    image: blog_03,
    date: "January 1, 2019",
    comments: 0,
    category: "politic",
    excerpt:
      "How to win an impeachment will be distracted by the readable content of a page",
  },
];

const Blog = () => {
  return (
    <section className="px-6 md:px-12 py-20 text-center">
      <h2 className="text-4xl font-bold mb-10 text-[#333333]">OUR <span className="text-red-600">BLOG</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-4 text-left space-y-2">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                📅 {post.date} • 💬 {post.comments} • 🧑 {post.category}
              </p>
              <p className="text-gray-700 text-sm">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block mt-3 px-4 py-2 border text-sm font-medium rounded hover:bg-gray-100"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
