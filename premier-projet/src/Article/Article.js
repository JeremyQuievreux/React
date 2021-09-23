//Import du style
import './Article.scss';
//Import fonction de base React
import { useState } from "react";
//Creation du composant avec entre parenthese les props envoyées par le composant parent
function Article(props){
    //Creation d'un state
    const [likes, setLikes] = useState(0);
    //Fonction callback de l'event onClick
    function handleClick() {
        setLikes(likes + 1);
    }
    return(
            <div className="article">
                <div className="article-title">
                    {/* Recupération des props envoyés par le composant parent */}
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