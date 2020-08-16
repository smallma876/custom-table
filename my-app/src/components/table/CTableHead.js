import React, { Component } from 'react';
import CTableHeadCell from './CTableHeadCell';

export class CTableHead extends Component {

    render() {

        let headers = this.props.headers;
        let theadAttributes = this.props.theadAttributes;
        return (
            <thead className={theadAttributes.className}>
                        <tr>
                            { headers.map( (header, index) =>(
                                
                                    <CTableHeadCell 
                                        header = {header}
                                        key={index}
                                    />
                            ))}  
                        </tr>
           </thead>
        )
    }
}

export default CTableHead
