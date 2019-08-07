import React from 'react';
import styled from "styled-components";

const Key = styled.span`
    font-weight: bold;
    text-transform: uppercase;
`


const Specs = ({title, data}) =>{
    return(
        <>
            <h2>{title}</h2>
            <ul className="list-group">
              {Object.keys(data).map((k, i) => {
                return (
                  <li className="list-group-item list-group-item-action" key={i}>
                    <Key>{k}</Key> : {data[k]}
                  </li>
                );
              })}
            </ul>
          </>
    )
}

export default Specs;