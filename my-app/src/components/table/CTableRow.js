import React, { Component } from 'react';
import CTableBodyCell from './CTableBodyCell';

export class CTableRow extends Component {
    
    render() {

        let { row, headerRow, cellProperties, objectColumns, arrayIterated, trowClassName, index} = this.props;
        let leghtArrayIterated = arrayIterated.length;
        let rowClassName = typeof trowClassName === 'function'?trowClassName(row, index, leghtArrayIterated):trowClassName; 

        return (
            <tr key={index} className={rowClassName}>
                {
                    objectColumns.map( (objColumn, index) =>
                        <CTableBodyCell 
                            row = {row}
                            objColumn = {objColumn}
                            length = {leghtArrayIterated }
                            headerRow = { headerRow}
                            cellProperties = { cellProperties}
                            index = { index}
                            key = {index}
                        />
                    
                
                    )
                }
                
            </tr>
        )
    }
}

export default CTableRow
