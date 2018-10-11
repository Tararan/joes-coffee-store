import React, { Component } from 'react';
import Main from './Main';
import { mainContent } from './mainContent';

export default class MainContainer extends Component {
    render () {
        return(
            <main className="col-md-9">
                {mainContent.map((user, i) => {
                    return(
                        <Main key={`Main-key-${i}`} 
                            articleTitle = { user.articleTitle }
                            articleText = { user.articleText }
                        />
                    )
                })}
            </main>
        )
    }
}