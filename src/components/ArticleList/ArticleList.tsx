import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArticleProps } from '../Article';

export interface ArticleListProps {
  articles: ArticleProps[];
}

const ListRow: FC<ArticleProps> = ({ id, title, location, date, slug }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{location.city}</td>
    <td>{date}</td>
    <td>
      <Link to={`/admin/edit/${slug}`}>Zmień</Link>
      <Link to={`/admin/delete/${slug}`}>Usuń</Link>
    </td>
  </tr>
);

const ArticleList: FC<ArticleListProps> = ({ articles }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tytuł</th>
        <th>Miasto</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      {articles.map((article) => (
        <ListRow
          key={article.id}
          id={article.id}
          slug={article.slug}
          title={article.title}
          date={article.date}
          imageUrl={article.imageUrl}
          location={article.location}
          content={article.content}
        />
      ))}
    </tbody>
  </table>
);

export default ArticleList;
