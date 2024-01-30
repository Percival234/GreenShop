import { useQuery } from '@tanstack/react-query';

import Blog from '@Components/Blog/Blog';
import Title from '@UI/Titles/Title/Title';
import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchBlogs } from '@API/API';

import './Blogs.scss';

export default function Blogs() {
  const { data: blogs, isPending, error } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs });

  if (isPending) return <PageLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__intro">
          <Title>Our Blog Posts</Title>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="blog__list">
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
