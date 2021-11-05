import './Article.css';
import Input from './Input';

const Article = (props) => {
  return (
    <div className="article">
      <h3 id="articleTitle">{props.articleName}</h3>
      <div className="art">
        <p>{props.text}</p>
        <Input text_button="En savoir plus"/>
      </div>
    </div>
  );
};

export default Article;
