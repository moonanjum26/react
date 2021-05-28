import React from 'react';

function Columns() {
    const items = []
    return (
        <React.Fragment>
            {
              items.map(item => (
                  <React.Fragment key = {item.id}>
                     <h1> title </h1>
                     <p>{item.title}</p>
                  </React.Fragment>    
              ))
        
            }
            <td> Name </td>
            <td> Mahwish </td>
        </React.Fragment>
            
    );
}

export default Columns