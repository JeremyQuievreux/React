import './Article.scss';
import { useState } from "react";

function Article(props){

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }
    return(
            <div className="article">
                <div className="article-title">
                    <h1>{props.title}</h1>
                </div>
                <p>{props.content}</p>
                <div className="article-footer">
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                </div>
                <div className="like-bar">
                    <p>Vous avez {likes} likes</p>
                    <button onClick={handleClick}>Add Likes</button>
                </div>
            </div>
    )
}

export default Article;