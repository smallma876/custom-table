import React, { Component, Fragment } from 'react'

export class CTableBodyCell extends Component {

    constructor(props) {
        super(props)

        this.getCellRow = this.getCellRow.bind(this);
        
    }

    getCellRow(row,obj,length,headerRow, cellProperties, index){
        let cells= [];
        let numRows;

        if(!headerRow) headerRow = {};
        if(!headerRow.column) headerRow.column ="";
        if(obj.keyColumn===headerRow.column){
             numRows = length;
        }

        if(!cellProperties){
            cellProperties = {};   
        }
        if(!cellProperties.cellGeneralFormat){
            cellProperties.cellGeneralFormat ="";
        }
        if(!cellProperties.numCellByProperties){
            cellProperties.numCellByProperties=[];
        }
        
        cellProperties.numCellByProperties.forEach( (object, index) =>{
            if(obj.keyColumn === object.key){
                let numloops = object.numCell;
                while(numloops>0){
                    cells.push(<td key={index} className={object.classNameBodyExtraCell}></td>);
                    numloops--;   
                }
            }
        });
        let classNameCellBody;
        if(obj.classNameBodyCell){
            if(typeof obj.classNameBodyCell === 'function'){
                classNameCellBody = obj.classNameBodyCell(row)
            }else{
                classNameCellBody = obj.classNameBodyCell;
            }
        }
         
       if(obj.renderCellBody){
           cells.push(<td className={classNameCellBody} rowSpan={numRows} key={obj.keyColumn}>{obj.renderCellBody(row, row[obj.keyColumn])}</td>);
       }else{
            cells.push(<td className={classNameCellBody} rowSpan={numRows} key={obj.keyColumn}>{row[obj.keyColumn]}</td>);
       }
       
        return (
            <Fragment>
                {cells}
            </Fragment>
        )
    }

    render() {

        let { row, objColumn, length, headerRow, cellProperties, index} = this.props;

        return (
            this.getCellRow(row,objColumn,length,headerRow, cellProperties, index)
        )
    }
}

export default CTableBodyCell
