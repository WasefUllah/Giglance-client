import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Tips to Win More Freelancing Bids",
      description:
        "Discover how to craft proposals that stand out and land more projects on freelancing platforms.",
      author: "Admin",
      date: "June 25, 2025",
    },
    {
      id: 2,
      title: "Why Every Business Needs a Web Developer",
      description:
        "Explore how having a professional website can boost your online presence and attract customers.",
      author: "John Smith",
      date: "June 18, 2025",
    },
    {
      id: 3,
      title: "The Future of Remote Work and Freelancing",
      description:
        "An in-depth look at how the gig economy is shaping the global workforce in 2025 and beyond.",
      author: "Sarah Lee",
      date: "June 10, 2025",
    },
    {
      id: 4,
      title: "How to Build an Impressive Freelancing Profile",
      description:
        "Your profile is your first impression. Learn how to create a profile that grabs client attention instantly.",
      author: "Emily Watson",
      date: "June 5, 2025",
    },
    {
      id: 5,
      title: "Understanding Pricing: What Should You Charge?",
      description:
        "Freelancers often struggle with setting prices. Here’s how to balance value and competitiveness effectively.",
      author: "David Lin",
      date: "May 28, 2025",
    },
    {
      id: 6,
      title: "Time Management Strategies for Freelancers",
      description:
        "Working independently can get overwhelming. Here are proven strategies to manage time and deliver on time.",
      author: "Jessica Park",
      date: "May 20, 2025",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-base-content ">
      <h2 className="text-3xl font-bold text-center text-primary mb-2">
        Our Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="max-w-3xl mx-auto p-6 bg-white shadow-lg  rounded-lg space-y-4 text-base-accent  dark:bg-gray-700"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm mb-4">{post.description}</p>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              By <span className="font-medium">{post.author}</span> on{" "}
              {post.date}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
