import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../../components/ArticleList';
import { ArticleProps } from '../../components/Article';

const List: FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/admin/articles`)
      .then((res) => res.json())
      .then((data: ArticleProps[]) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <h2>Lista artykułów</h2>
      <ArticleList articles={articles} />
      <Link to='/admin/add'>Dodaj nowy artykuł</Link>
    </>
  );
};

export default List;
