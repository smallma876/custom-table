import React, { Component, Fragment } from "react";
import Table from "./Table";

import TableBckp from './../components/table/CTableBckp';

import moment from "moment";
import { setNewDate } from "./../redux/actionCreators";
import { connect } from "react-redux";

export class TableSmarth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            "category": null,
            "subcategoria": "ADN Registrados",
            "lunes": 0,
            "martes": 26,
            "miercoles": 2,
            "jueves": 1,
            "viernes": 0,
            "sabado": 0,
            "domingo": 0,
            "totalSemana": 29,
            "totalMes": 31
        },
        {
            "category": "Prospección",
            "subcategoria": "Referidos",
            "lunes": 0,
            "martes": 5,
            "miercoles": 3,
            "jueves": 3,
            "viernes": 0,
            "sabado": 0,
            "domingo": 0,
            "totalSemana": 11,
            "totalMes": 11
        },
        {
            "category": "Prospección",
            "subcategoria": "Leads",
            "lunes": 0,
            "martes": 20,
            "miercoles": 1,
            "jueves": 0,
            "viernes": 0,
            "sabado": 0,
            "domingo": 0,
            "totalSemana": 21,
            "totalMes": 21
        },
        {
            "category": "Prospección",
            "subcategoria": "Frios",
            "lunes": 0,
            "martes": 2,
            "miercoles": 0,
            "jueves": 0,
            "viernes": 0,
            "sabado": 0,
            "domingo": 0,
            "totalSemana": 2,
            "totalMes": 2
        },
        {
            "category": "Citas",
            "subcategoria": "Primera Etapa",
            "lunes": 0,
            "martes": 1,
            "miercoles": 1,
            "jueves": 0,
            "viernes": 0,
            "sabado": 0,
            "domingo": 0,
            "totalSemana": 2,
            "totalMes": 6
        },
        {
            "category": "Citas",
            "subcategoria": "Segunda etapa",
            "lunes": 0,
            "martes": 0,
            "miercoles": 0,
            "jueves": 1,
            "viernes": 0,
            "sabado": 0,
            "domingo": 0,
            "totalSemana": 1,
            "totalMes": 1
        }
    ]
    };
    this.getHeaders = this.getHeaders.bind(this);
    this.rangeGenerator = this.rangeGenerator.bind(this);
    this.renderCellHeaderDay = this.renderCellHeaderDay.bind(this);
    this.insertDataToHeaderCells = this.insertDataToHeaderCells.bind(this);
    this.setDayName = this.setDayName.bind(this);
    this.setMonthName = this.setMonthName.bind(this);
    this.renderCellBody = this.renderCellBody.bind(this);
    this.renderCellTotalMounth = this.renderCellTotalMounth.bind(this);
    this.renderCellTotalWeek = this.renderCellTotalWeek.bind(this);
    this.modifyDataFromService = this.modifyDataFromService.bind(this)
    this.getPropertiesTable = this.getPropertiesTable.bind(this);
    this.getClassNameRow = this.getClassNameRow.bind(this);
    this.isTooltipApplicable = this.isTooltipApplicable.bind(this);
    this.getMessageTooltip = this.getMessageTooltip.bind(this);
    this.getCellClassNameBodyCell = this.getCellClassNameBodyCell.bind(this);
    this.getClassNameSubcategoriaCell = this.getClassNameSubcategoriaCell.bind(this);


    this.getHeaders2 = this.getHeaders2.bind(this);
    this.getData2 = this.getData2.bind(this);
    this.renderCell2 = this.renderCell2.bind(this)
  }

  getMessageTooltip(subcategory) {
    let message = "";
    switch (subcategory) {
      case "LEADS":
        message = "Leads, Campaña";
        break;
      case "REFERIDOS":
        message = "Referidos, ADN";
        break;
      default:
        message = "OP/Intro";
        break;
    }
    return message;
  }

  getClassNameRow(data, indexRow, length){
    if(data.category=== null || data.category.trim() === ""){
        return "tbl-report--body--simple";
      }else if(indexRow === 0){
        return "tbl-report--body--first";
      }else if(indexRow === (length-1)){
        return "tbl-report--body--last";
      }else{
        return "tbl-report--body--middle";
      }
  }

  setDayName = function (day) {
    switch (day) {
      case 1:
        return "LUN";
      case 2:
        return "MAR";
      case 3:
        return "MIE";
      case 4:
        return "JUE";
      case 5:
        return "VIE";
      case 6:
        return "SAB";
      case 0:
        return "DOM";
    }
  };

  setMonthName = function (month) {
    switch (month) {
      case 0:
        return "Enero";
      
      case 1:
        return "Febrero";
        
      case 2:
        return "Marzo";
        
      case 3:
        return "Abril";
       
      case 4:
        return "Mayo";
        
      case 5:
        return "Junio";
       
      case 6:
        return "Julio";
       
      case 7:
        return "Agosto";
        
      case 8:
        return "Septiembre";
       
      case 9:
        return "Octubre";
       
      case 10:
        return "Noviembre";
       
      case 11:
        return "Diciembre";
       
    }
  };

  isTooltipApplicable(dataColumn){
    if(!dataColumn || !isNaN(dataColumn))dataColumn ="";
    return dataColumn.trim().toUpperCase() === "LEADS" ||
            dataColumn.trim().toUpperCase() === "REFERIDOS" ||
    dataColumn.trim().toUpperCase() === "OBSERVACIONES"
  }

  renderCellBody(data, dataColumn) {

    if(this.isTooltipApplicable(dataColumn)){
        return (
            <Fragment>
                <div>{dataColumn}</div>
                <div className="top">
                    <span>
                        {this.getMessageTooltip(dataColumn.trim().toUpperCase())}
                    </span>
                    <i></i>
                </div> 
            </Fragment>
               )
    }
    return (
        <div>{dataColumn}</div>
    );
  }

  getCellClassNameBodyCell(data){
        
    if(data.subcategoria.trim().toUpperCase() === "ADN REGISTRADOS"){
         return "border-bottom-0 empty-category";
    }
    return "row-group__head";
}

getClassNameSubcategoriaCell(data){
    let subCategory = data.subcategoria.trim().toUpperCase()
    if(subCategory === "TOTAL"){
        return "sub-category--total"
    }else if(this.isTooltipApplicable(subCategory)){
        return "sub-category cell-tooltip"
    }
    return "sub-category"
}


  getHeaders() {
    return [
      {
        data: "",
        empty: true,
        keyColumn: "category",
        renderCellBody: this.renderCellBody,
        className: "border-right-0 min-width-90px",
        classNameBodyCell: this.getCellClassNameBodyCell
      },
      { data: "", 
        empty: true,
        className: "tbl-report--divider"},
      {
        data: "",
        keyColumn: "subcategoria",
        renderCellBody: this.renderCellBody,
        className: "border-right-0 min-width-140px",
        classNameBodyCell: this.getClassNameSubcategoriaCell
      },
      {
        data: "LUN",
        keyColumn: "lunes",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
        className: "border-radius-4004"
      },
      {
        data: "MAR",
        keyColumn: "martes",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
      },
      {
        data: "MIE",
        keyColumn: "miercoles",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
      },
      {
        data: "JUE",
        keyColumn: "jueves",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
      },
      {
        data: "VIE",
        keyColumn: "viernes",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
      },
      {
        data: "SAB",
        keyColumn: "sabado",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
      },
      {
        data: "DOM",
        keyColumn: "domingo",
        renderCellBody: this.renderCellBodyWeek,
        renderCellHeader: this.renderCellHeaderDay,
      },
      {
        data: "",
        keyColumn: "totalSemana",
        renderCellHeader: this.renderCellTotalWeek,
        renderCellBody: this.renderCellBodyWeek,
        className: "border-radius-0440 border-right-0",
        classNameBodyCell: "border-right-0"
      },
      { data: "", 
        empty: true, 
        className: "tbl-report--divider"
        },
      {
        data: "",
        keyColumn: "totalMes",
        renderCellHeader: this.renderCellTotalMounth,
        renderCellBody: this.renderCellBodyWeek,
        classNameBodyCell: "border-right-0",
        className: "border-radius-4444",
      },
    ];
  }

  renderCellTotalWeek() {
    return (
      <div>
        <div>TOTAL</div>
        <div>SEMANAL</div>
      </div>
    );
  }

  renderCellTotalMounth() {
    return (
      <div>
        <div>TOTAL</div>
        <div>MES</div>
      </div>
    );
  }

  insertDataToHeaderCells(date) {
    let startWeek = moment(date).startOf("isoWeek");
    let endWeek = moment(date).endOf("isoWeek");

    let rangeWeek = this.rangeGenerator(startWeek, endWeek);
    let headers = this.getHeaders();
    let newHeaders = [];

    headers.forEach((element) => {
      if (element.keyColumn) {
        for (let i = 0; i <= rangeWeek.length - 1; i++) {
          if (rangeWeek[i].key === element.data) {
            element.renderData = rangeWeek[i];
            break;
          }
        }
      }
      newHeaders.push(element);
    });
    return newHeaders;
  }

  renderCellHeaderDay(data) {
    return (
      <div>
        <div className="part-first-text-header">{data.textDay}</div>
        <div>{data.numDay}</div>
      </div>
    );
  }

  rangeGenerator(startWeek, endWeek) {
    let rangeWeek = [];
    while (startWeek <= endWeek) {
      moment(startWeek).format("YYYY-MM-DD");

      let objDay = {};
      objDay.textDay = this.setDayName(startWeek.day());
      objDay.numDay = startWeek.date();
      objDay.key = this.setDayName(startWeek.day());
      rangeWeek.push(objDay);

      startWeek = moment(startWeek).add(1, "days");
    }
    return rangeWeek;
  }

  modifyDataFromService(){
    let data = this.state.data;;    
    let keys = data.map( item=> item.category).filter( (item,index, array) => array.indexOf(item) === index);
    let array = [];
    
    keys.forEach( val => {
        let category = val;
        
        let newArray=[];
        data.forEach( value => { 
            if(category === value.category){
                newArray.push(value)
            } 
        })
        array.push(newArray);
    })
    

    
    array.forEach(function(item, index, array){

        let object = {
            category: "",
            subcategoria: "Total",
            lunes: 0,
            martes: 0,
            miercoles: 0,
            jueves: 0,
            viernes: 0,
            sabado: 0,
            domingo: 0,
            totalSemana: 0,
            totalMes: 0,
        }

        item.forEach(function(item){
            object.category = !item.category?"":item.category;
            object.lunes = object.lunes + item.lunes;
            object.martes = object.martes + item.martes;
            object.miercoles = object.miercoles + item.miercoles;
            object.jueves = object.jueves + item.jueves;
            object.viernes = object.viernes + item.viernes;
            object.sabado = object.sabado + item.sabado;
            object.domingo = object.domingo + item.domingo;
            object.totalSemana = object.totalSemana + item.totalSemana;
            object.totalMes = object.totalMes + item.totalMes;
        })
        if(object.category.trim().toUpperCase() === "PROSPECCIÓN" ||
           object.category.trim().toUpperCase() === "CITAS" ||
           object.category.trim().toUpperCase() === "ENTREVISTAS" ||
           object.category.trim().toUpperCase() === "ENTREVISTAS CONJUNTAS")
        item.push(object);
        
    })
    return array;
  }

  getPropertiesTable(){
    return {
          tableAttributes:{
             className:"tbl-report"
          }, 
          theadAttributes:{
             className:"tbl-report--head"
          }, 
          tbodyAttributes:{
             className:"tbl-report--body row-divider",
             cellPropertiesBody: {
              numCellByProperties: [
                {
                  key: "subcategoria",
                  numCell: 1,
                  classNameBodyExtraCell: "tbl-report--divider"
                },
                { key: "totalMes", 
                  numCell: 1,
                  classNameBodyExtraCell: "tbl-report--divider"
                },
              ],
            },
            headerRow: {
              column: "category",
            },
            trowClassName: this.getClassNameRow
          }
         
    }; 
  }

  renderCell2(data){
    return <div>
        {data}
    </div>
  }

  getHeaders2(){
    return [
        {
          data: "Hola",
          keyColumn: "codigo",
          renderCellHeader: this.renderCell2
        },
        {
          data: "mundo",
          keyColumn: "nombre"
        }
    ]
  }
  
  getData2(){
     return [
         [{
          codigo: "1",
          nombre: "sergio"
         }]
       ]
     
  }

  render() {
    let array = this.insertDataToHeaderCells(this.props.firstDateInRange);
    let data = this.modifyDataFromService();
    
    let propertiesTable = this.getPropertiesTable();

    return (
      <div>
        {/* <TableBckp
          headers={array}
          data={data}
          tableProperties = {propertiesTable}
        /> */}
          <TableBckp 
             headers={this.getHeaders2()}
             data={this.getData2()}
          />
             
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  firstDateInRange: state.firstDateInRange,
});

const mapDispatchToProps = (dispatch) => ({
  setNewDate(date) {
    dispatch(setNewDate(date));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableSmarth);
