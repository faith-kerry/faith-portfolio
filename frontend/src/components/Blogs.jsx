function Blogs() {
  const blogs = [
    {
      title: "Building AI Solutions for Real-World Problems",
      description:
        "Exploring how AI can improve healthcare, accessibility, and everyday digital experiences.",
      date: "Coming Soon",
    },
    {
      title: "My Journey into Data Analysis",
      description:
        "Sharing my learning experience in Python, SQL, data visualization, and analytics.",
      date: "Coming Soon",
    },
    {
      title: "Life as a Software Engineer",
      description:
        "Thoughts, lessons, and experiences from building projects and participating in hackathons.",
      date: "Coming Soon",
    },
  ];

  return (
    <section id="blogs" className="py-5 blog-section">
      <div className="container">

        <h2 className="text-center mb-5">Blogs</h2>

        <div className="row">

          {blogs.map((blog, index) => (
            <div className="col-lg-4 mb-4" key={index}>

              <div className="card blog-card h-100">

                <div className="card-body">

                  <h4>{blog.title}</h4>

                  <p>{blog.description}</p>

                  <span className="badge bg-info">
                    {blog.date}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Blogs;