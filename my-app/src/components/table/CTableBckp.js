import React, { Component } from 'react';
import CTableHead from './CTableHead';
import CTableBody from './CTableBody';
import './CTableCSS.css';

export class CTableBckp extends Component {
    
    render() {

        let { data, headers, tableProperties } = this.props;
        console.log(JSON.stringify(data))
        tableProperties = tableProperties?tableProperties:{};
        let tableAttributes = tableProperties.tableAttributes?tableProperties.tableAttributes:{};   
        let theadAttributes = tableProperties.theadAttributes?tableProperties.theadAttributes:{};
        let tbodyAttributes = tableProperties.tbodyAttributes?tableProperties.tbodyAttributes:{};
      
        let headersColumns = headers.filter( obj => obj.keyColumn);

        return (
            <div>
                <table id={tableAttributes.id} className={tableAttributes.className}>

                    <CTableHead  headers = {headers} theadAttributes={theadAttributes}/>

                    { 
                        data.map( (arrayElement, index) => 
                                    <CTableBody 
                                         tbodyAttributes =  {tbodyAttributes}
                                         arrayElement ={ arrayElement}
                                         headersColumns = {headersColumns}
                                         key={index}
                                         
                                    />
                        )
                    }
                   
                </table>
            </div>
        )
    }
}

export default CTableBckp
