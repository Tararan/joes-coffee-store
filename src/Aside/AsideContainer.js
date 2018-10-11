import React, { Component } from 'react';
import Aside from './Aside';
import { asideContent } from './asideContent';

export default class AsideContainer extends Component {
    render () {
        return(
            <aside className="col-md-3">
              {asideContent.map((user, i) => {
                  return(
                      <Aside key={`Aside-key-${i}`} 
                          figcaption = { user.figcaption }
                          listNewsTitle = { user.listNewsTitle }
                          listNews = { user.listNews }
                          listHoursTitle = { user.listHoursTitle }
                          listHours = { user.listHours }
                          listContactTitle = { user.listContactTitle }
                          listContact = { user.listContact }
                      />
                  )
              })  }
            </aside>
        )
    }
}