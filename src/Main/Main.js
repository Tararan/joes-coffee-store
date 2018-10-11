import React from 'react';
import articleImage from '../images/coffeeheader.jpg';

const Main = ({ articleTitle, articleText }) => {
    return (
            <article className="article">
                <img src={articleImage}/>
                <section>
                    <h2 className="article__title">
                        {articleTitle}
                    </h2>
                    <div className="article__description">
                        {articleText.map((item, i) => (
                            <p key={`article-text-$[item]-$[i]`}>
                                {item}
                            </p>
                        )
                        )}
                    </div>
                </section>
            </article>
    );
}

export default Main;