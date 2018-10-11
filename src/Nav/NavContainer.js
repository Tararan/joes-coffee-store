import React from 'react';
import Nav from './Nav';

const NavContainer = ({ navContent }) => {
    return(
        <div>
            {
                navContent.map((user, i) => {
                    return (
                        <Nav key= {`Nav-${i}`} 
                        listItem={user.listItem}
                        />
                    )
                })
            }
            </div>
    );
}
export default NavContainer;