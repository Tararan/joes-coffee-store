import React, { Component } from 'react';
import  Header from './Header';
import { headerContent } from './headerContent';

export default class HeaderContainer extends Component {
    render() {
        return(
        <div>
        {headerContent.map((user, i) => {
        return(
            <Header  key={`Header-key-${i}`}
                videomp4 = { user.videomp4.replace(/\s/g, "") }
                videowebm = { user.videowebm.replace(/\s/g, "") }
                // videoposter = { user.videoposter.replace(/\s/g, "")  }
                // logo = { user.logo.replace(/\s/g, "")  }
                header = { user.header }
                subheader = { user.subheader }
                // scrollDownPointer = { user.scrollDownPointer }
            />
        )
            })}
        </div>
        )
    }
}