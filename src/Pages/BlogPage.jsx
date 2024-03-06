import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchBlog } from '@API/API';

import { SERVER_URL } from '@Constants/SERVER_URL';

import './BlogPage.scss';

export default function BlogPage() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['blog', id], queryFn: () => fetchBlog(id) });

  if (isPending) return <PageLoading />;
  if (isError) return <ServerError error={error} />;

  return (
    <article className="article">
      <div className="article__image-container">
        <img
          className="article__image"
          src={`${SERVER_URL}/static/blogs/${blog.image}`}
          alt={blog.title}
        />
      </div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.article }}></div>
    </article>
  );
}
