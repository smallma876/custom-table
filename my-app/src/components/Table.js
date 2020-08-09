import React, { Component, Fragment } from 'react'

export class Table extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }

        this.getHeaders = this.getHeaders.bind(this);
        this.getRowBody = this.getRowBody.bind(this);
        this.getCellRow = this.getCellRow.bind(this);
    }

    getHeaders(header){
        let empty = header.empty;
        if(empty){
            return <th></th>;
        } 
        if(header.render){
            return <th>{header.render(header.renderData)}</th>;
        }

        return (
            <th>{header.data}</th>
        )
    }

    getRowBody(row, headerRow, cellProperties){
        let object = row;
        let keys = Object.keys(object);
        let length = keys.length;
        let headersColumns = 
        return (
            <tr>
                {
                    keys.map( (key) =>{
                        
                        return this.getCellRow(object,key,length,headerRow, cellProperties)
                        }
                        
                       
                    )
                }
                
            </tr>
        )
    }

    getCellRow(row,key,length,headerRow, cellProperties){
        let cells= [];
        let numRows;

        if(!headerRow) headerRow = {};
        if(!headerRow.column) headerRow.column ="";
        if(key===headerRow.column){
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
        
        cellProperties.numCellByProperties.map( (object) =>{
            if(key === object.key){
                let numloops = object.numCell;
                while(numloops>0){
                    cells.push(<td></td>);
                    numloops--;   
                }
            }
        })

       
        cells.push(<td rowSpan={numRows} key={key}>{row[key]}</td>);
       
       
       
        return (
            <Fragment>{cells}</Fragment>
        )
    }

    
    
    render() {

        let { headers, data, headerRow,  cellProperties} = this.props;
        let counter = 0;
        return (
            <div>
                <table border="1">

                    <thead>
                        <tr>
                        { headers.map( (header) =>(
                            this.getHeaders(header)
                        ))}
                        </tr>
                    </thead>
                    <tbody className="row-divider">
                        {
                            data.map( row => {
                                if(headerRow && counter !== 0){
                                    delete row[headerRow.column];
                                }
                                counter++;
                                return this.getRowBody(row, headerRow, cellProperties)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
