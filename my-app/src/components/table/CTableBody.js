import React, { Component } from 'react'
import CTableRow from './CTableRow';

export class CTableBody extends Component {

    render() {

        let { tbodyAttributes, arrayElement, headersColumns } = this.props;

        let counter = 0;
        let objectColumns = [ ...headersColumns];
        let tbodyClassName = tbodyAttributes.className?tbodyAttributes.className:"";
        
        let headerRow = tbodyAttributes.headerRow?tbodyAttributes.headerRow:"";

        let cellPropertiesBody = tbodyAttributes.cellPropertiesBody?tbodyAttributes.cellPropertiesBody:{};
        let trowClassName = tbodyAttributes.trowClassName?tbodyAttributes.trowClassName:"";
      
        return (
            <tbody className={tbodyClassName}>
                    {
                        arrayElement.map( (row, index, array) => {
                            
                            if(headerRow && counter !== 0){
                                
                                objectColumns = headersColumns.filter( obj => obj.keyColumn !== headerRow.column)
                            
                            }
                            counter++;
                            return  <CTableRow 
                                        row = {row}
                                        headerRow = {headerRow}
                                        cellProperties = {cellPropertiesBody}
                                        objectColumns = {objectColumns}
                                        arrayIterated = {array}
                                        trowClassName = {trowClassName}
                                        index = {index}
                                        key = {index}
                                    /> 
                                 
                        })
                    }
            </tbody> 
        )
    }
}

export default CTableBody
