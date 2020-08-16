import React, { Component, Fragment } from 'react'

export class CTableHeadCell extends Component {

    constructor(props) {
        super(props);

        this.getHeader = this.getHeader.bind(this);
    }

    getHeader(header){
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


    render() {

        let { header}  = this.props;
        
        return (
            <Fragment>
               {
                   this.getHeader(header)
               }
            </Fragment>
        )
    }
}

export default CTableHeadCell
