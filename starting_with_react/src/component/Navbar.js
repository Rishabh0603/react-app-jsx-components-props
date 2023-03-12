import React from 'react';

export default function Navbar(props){
    return(
        <nav className="navigation container">
        <div className="header">{props.title}</div>
          <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link" href="/">{props.home}</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="/">{props.About}</a>
          </li>
          
          </ul>
      </nav>
    )
}