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
            return <th className={header.className}></th>;
        } 
        if(header.renderCellHeader){
            if(header.renderData){
                return <th className={header.className}>{header.renderCellHeader(header.renderData)}</th>;
            }else{
                return <th className={header.className}>{header.renderCellHeader(header.data)}</th>;
            }  
        }

        return (
            <th className={header.className}>{header.data}</th>
        )
    }

    getRowBody(row, headerRow, cellProperties, headersColumns, length){
        let object = row;
        console.log(object);
        return (
            <tr>
                {
                    headersColumns.map( (obj) =>{
                            return this.getCellRow(object,obj,length,headerRow, cellProperties)
                        }
                
                    )
                }
                
            </tr>
        )
    }

    getCellRow(row,obj,length,headerRow, cellProperties){
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
        
        cellProperties.numCellByProperties.map( (object) =>{
            if(obj.keyColumn === object.key){
                let numloops = object.numCell;
                while(numloops>0){
                    cells.push(<td className={object.className}></td>);
                    numloops--;   
                }
            }
        })

       if(obj.renderCellBody){
            cells.push(<td className={obj.className} rowSpan={numRows} key={obj.keyColumn}>{obj.renderCellBody(row)}</td>);
       }else{
            cells.push(<td className={obj.className} rowSpan={numRows} key={obj.keyColumn}>{row[obj.keyColumn]}</td>);
       }
       
        return (
            <Fragment>{cells}</Fragment>
        )
    }

    
    
    render() {

        let { headers, data, headerRow,  cellProperties} = this.props;
        let headersColumns = headers.filter( obj => obj.keyColumn);
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
                    {
                        data.map( arrayElement => {
                            let counter = 0;
                            let newHeadersColumns = [ ...headersColumns];
                           
                            return (
                                <tbody className="row-divider">
                                {
                                    arrayElement.map( (row, index, array) => {
                                        if(headerRow && counter !== 0){
                                            newHeadersColumns = headersColumns.filter( obj => obj.keyColumn !== headerRow.column)
                                        }
                                        counter++;
                                        return this.getRowBody(row, headerRow, cellProperties, newHeadersColumns,array.length)
                                    })
                                }
                                </tbody>
                            )

                        })
                    }
                   
                </table>
            </div>
        )
    }
}

export default Table
