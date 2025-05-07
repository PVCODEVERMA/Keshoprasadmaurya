import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blog_01 from "../assets/Blog/blog_01.jpg";
import blog_02 from "../assets/Blog/blog_02.jpg";
import blog_03 from "../assets/Blog/blog_03.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Keshav Prasad Maurya's Stand Against Corruption",
    image: blog_01,
    date: "May 7, 2025",
    content:
      "Keshav Prasad Maurya has intensified his efforts to combat systemic corruption in the region. His recent statements during the press conference emphasized transparency, governance reforms, and public accountability. He also announced new initiatives aimed at digitizing government services to reduce middlemen and improve service delivery to the common citizen.",
  },
  {
    id: 2,
    title: "Public Sentiment Is Everything",
    image: blog_02,
    date: "January 1, 2019",
    content:
      "Understanding public sentiment is critical in shaping political narratives and campaign strategies. In today's digital age, public opinion spreads faster and stronger through social media, which can make or break political careers.",
  },
  {
    id: 3,
    title: "How to win an impeachment",
    image: blog_03,
    date: "January 1, 2019",
    content:
      "Winning an impeachment involves not only legal defense but also public relations strategy. Controlling the media narrative and securing support from key political figures is essential.",
  },
  {
    id: 4,
    title: "Rural Development Challenges in 2025",
    image: blog_02,
    date: "March 20, 2025",
    content:
      "Rural India continues to face developmental challenges. The government’s new policy reforms target better infrastructure and digital access in these regions.",
  },
  {
    id: 5,
    title: "Youth in Indian Politics",
    image: blog_03,
    date: "April 5, 2025",
    content:
      "The involvement of youth in Indian politics has increased significantly. Platforms like student unions and social media have empowered young voices.",
  },
  {
    id: 6,
    title: "The Role of Caste in Elections",
    image: blog_01,
    date: "February 12, 2025",
    content:
      "Caste remains a major influence in Indian electoral politics. Political parties often rely on caste-based alliances to gain voter trust and ensure support.",
  },
];

const BlogPosts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogPosts.find((p) => p.id === parseInt(id));

  // Scroll to top on blog change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!blog) return <div className="p-10 text-center">Blog not found</div>;

  // Get 5 other related posts
  const relatedPosts = blogPosts
    .filter((post) => post.id !== blog.id)
    .slice(0, 5);

  return (
    <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto mb-10">
    
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg shadow-md mb-6 mt-20"
      />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">📅 {blog.date}</p>
      <p className="text-gray-800 leading-relaxed mb-10">{blog.content}</p>

      {/* Related Posts */}
      <div className="mt-10 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
        <div className="grid gap-6">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border shadow rounded-lg p-5 flex gap-4 items-start"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.content}
                </p>
                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-blue-600 text-sm font-medium mt-1 inline-block hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
