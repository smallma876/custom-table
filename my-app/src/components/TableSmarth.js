import React, { Component } from "react";
import Table from "./Table";
import moment from "moment";

export class TableSmarth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      data: [
        {
          categoria: "comprador",
          pimienta: "assss",
          nombre: "Sergio",
          apellido: "mallma",
          color: "azul",
          estado: "habilitado",
          dni: "44332211",
          usuario: "rolf",
          contrasenia: "abc",
        },
        {
          categoria: "comprador",
          pimienta: "assss",
          nombre: "Luis",
          apellido: "mallma",
          color: "rojo",
          estado: "deshabilitado",
          dni: "4433222",
          usuario: "rolf",
          contrasenia: "abc",
          
        },
        {
          categoria: "comprador",

          pimienta: "assss",
          nombre: "Kevin",
          apellido: "mallma",
          color: "morado",
          estado: "habilitado",
          dni: "44332222",
          usuario: "rolf",
          contrasenia: "abc",
        },
        {
          categoria: "comprador",
          pimienta: "assss",
          nombre: "Consuelo",
          apellido: "leiva",
          color: "amarillo",
          estado: "habilitado",
          dni: "55342322",
          usuario: "rolf",
          contrasenia: "abc",
        },
        {
          categoria: "comprador",
          pimienta: "assss",
          nombre: "Edson",
          apellido: "Jacksa",
          color: "morado",
          estado: "habilitado",
          dni: "4331213",
          usuario: "rolf",
          contrasenia: "abc",
        },
      ],
      cellPropertiesBody: {
        numCellByProperties: [
          {
            key: "pimienta",
            numCell: 1,
          },
          { key: "usuario", numCell: 1 },
        ],
        cellGeneralFormat: this.renderCellBodyGeneral,
      },
      headerRow: {
        column: "categoria",
      },
    };
    this.getHeaders = this.getHeaders.bind(this);
    this.rangeGenerator = this.rangeGenerator.bind(this);
    this.renderCellDay = this.renderCellDay.bind(this);
    this.insertRenderDataToColumns = this.insertRenderDataToColumns.bind(this);
    this.setDayName = this.setDayName.bind(this);
    this.setMonthName = this.setMonthName.bind(this);
    this.renderCellBodyGeneral = this.renderCellBodyGeneral.bind(this);
  }

  setDayName = function (day) {
    switch (day) {
      case 1:
        return "LUN";
        break;
      case 2:
        return "MAR";
        break;
      case 3:
        return "MIE";
        break;
      case 4:
        return "JUE";
        break;
      case 5:
        return "VIE";
        break;
      case 6:
        return "SAB";
        break;
      case 0:
        return "DOM";
        break;
    }
  };

  setMonthName = function (month) {
    switch (month) {
      case 0:
        return "Enero";
        break;
      case 1:
        return "Febrero";
        break;
      case 2:
        return "Marzo";
        break;
      case 3:
        return "Abril";
        break;
      case 4:
        return "Mayo";
        break;
      case 5:
        return "Junio";
        break;
      case 6:
        return "Julio";
        break;
      case 7:
        return "Agosto";
        break;
      case 8:
        return "Septiembre";
        break;
      case 9:
        return "Octubre";
        break;
      case 10:
        return "Noviembre";
        break;
      case 11:
        return "Diciembre";
        break;
    }
  };

  renderCellBodyGeneral(data){
      console.log(data);
      return <div>
            {data.pimienta}
      </div>
  }

  getHeaders() {
    return [
      {
        data: "",
        empty: true,
      },
      { data: "", empty: true },
      { data: "", empty: true },

      { data: "LUN", render: this.renderCellDay },
      { data: "MAR", render: this.renderCellDay },
      { data: "MIE", render: this.renderCellDay },
      { data: "JUE", render: this.renderCellDay },
      { data: "VIE", render: this.renderCellDay },
      { data: "", empty: true },
      { data: "SAB", render: this.renderCellDay },
      { data: "DOM", render: this.renderCellDay },
    ];
  }

  insertRenderDataToColumns() {
    let startWeek = moment().startOf("isoWeek");
    let endWeek = moment().endOf("isoWeek");
    let rangeWeek = this.rangeGenerator(startWeek, endWeek);
    let headers = this.getHeaders();
    let newHeaders = [];

    headers.forEach((element) => {
      if (element.data !== "") {
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

  renderCellDay(data) {
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

  render() {
    let array = this.insertRenderDataToColumns();

    return (
      <div>
        <Table
          headers={array}
          data={this.state.data}
          cellProperties={this.state.cellPropertiesBody}
          headerRow={this.state.headerRow}
        />
      </div>
    );
  }
}

export default TableSmarth;
