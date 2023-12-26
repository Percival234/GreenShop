import Title from '@UI/Titles/Title/Title';

import './BlogList.scss';

// import BlogCard from '@Components/Blog/BlogCard/BlogCard';

export default function BlogList() {
  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__intro">
          <Title>Our Blog Posts</Title>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="blog__list">
          {/* {blogs.map((blog, index) => {
            return (
              <BlogCard
                id={blog.id}
                key={index}
                imgSrc={blog.imgSrc}
                title={blog.title}
                date={blog.date}
                shortDescription={blog.shortDescription}
              />
            );
          })} */}
        </div>
      </div>
    </section>
  );
}
