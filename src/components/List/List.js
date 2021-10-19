import React from "react";
import PropTypes from 'prop-types';

import './List.css';

function List({items,children}){
    return items.length !== 0 && (
        <div className="list">
            {children}
            <ul className="list__items">
            {items.map((item)=>{
                return <li className="list__item" key={item}>{item}</li>
            })}
            </ul>
      </div>
    )
}

List.propTypes = {
    items:PropTypes.arrayOf(PropTypes.string),
    children:PropTypes.element
}
export default List;