import React from 'react';
import figure from '../images/black-coffee.png';

const Aside = ({ figcaption, listNewsTitle, listNews, listHoursTitle, listHours, listContactTitle, listContact }) => {
    return (
        <section className="sidebar clearfix" id="events">
            <figure className="sidebar__figure">
                <figcaption className="sidebar__figure-description">
                    {figcaption}
                </figcaption>
                <img className="sidebar__figure-img" src={figure} alt="coffe-of-the-month" />
            </figure>
            <div className="clearfix">
                <ul className="sidebar__list sidebar__list--news">
                <li> {listNewsTitle} </li>
                    {listNews.map((item, i) => (
                        <li key={`aside-listNews-${item}${i}`}>
                        <a href="/home">
                            {item}
                        </a>
                        </li>
                    ))}
                </ul>
                <ul className="sidebar__list sidebar__list--hours">
                    <li> {listHoursTitle} </li>
                    <li>
                        {listHours[0]} <time>{listHours[1]}</time> - <time>{listHours[2]}</time>
                    </li>
                    <li>
                        {listHours[3]} <time>{listHours[4]}</time> - <time>{listHours[5]}</time>
                    </li>
                    <li>
                        {listHours[6]} {listHours[7]}
                    </li>
                    <ul className="sidebar__list sidebar__list--contact">
                        <li>
                            {listContactTitle}
                        </li>
                        <li>
                            <a href={`mailto:${listContact[0]}`}>{listContact[0]} </a>
                        </li>
                        <li>
                            <a href={`tel:${listContact[1]}`}>{listContact[1]} </a>
                        </li>
                        <li>
                        <address>
                            <a href={`http://maps.google.com/maps?q= ${listContact[2]}`}>{listContact[2]} </a>
                        </address>
                        </li>

                    </ul>
                </ul>
            </div>
        </section>
    )
}

export default Aside;