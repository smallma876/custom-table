import React, { Component } from "react";
import Table from "./Table";
import moment from "moment";
import { setNewDate } from "./../redux/actionCreators";
import { connect } from "react-redux";

export class TableSmarth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      data: [
        [
          {
            category: "",
            subcategoria: "Adn Registrados",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "004",
            totalMounth: "001",
          },
        ],
        [
          {
            category: "Prospection",
            subcategoria: "leads",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "004",
            totalMounth: "001",
          },
          {
            category: "Prospection",
            subcategoria: "referidos",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "004",
            totalMounth: "001",
          },
          {
            category: "Prospection",
            subcategoria: "Observaciones",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "004",
            totalMounth: "001",
          },
          {
            category: "Prospection",
            subcategoria: "total",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "004",
            totalMounth: "001",
          },
        ],
        [
          {
            category: "cita",
            subcategoria: "Primera etapa",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "cita",
            subcategoria: "Segunda etapa",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "cita",
            subcategoria: "Etapa adicional",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
        ],
        [
          {
            category: "Entrevista",
            subcategoria: "Primera etapa",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "Entrevista",
            subcategoria: "Segunda etapa",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "Entrevista",
            subcategoria: "Etapa adicional",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "Entrevista",
            subcategoria: "Total",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
        ],
        [
          {
            category: "Producción",
            subcategoria: "Solicitudes",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "Producción",
            subcategoria: "Primas",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
        ],
        [
          {
            category: "Producción",
            subcategoria: "Solicitudes",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
          {
            category: "Producción",
            subcategoria: "Primas",
            lunes: "001",
            martes: "002",
            miercoles: "003",
            jueves: "004",
            viernes: "010",
            sabado: "012",
            domingo: "013",
            totalWeek: "010",
            totalMounth: "001",
          },
        ],
      ],
      cellPropertiesBody: {
        numCellByProperties: [
          {
            key: "subcategoria",
            numCell: 1,
            className:"hola"
          },
          { key: "totalMounth", numCell: 1 },
        ],
      },
      headerRow: {
        column: "category",
      },
    };
    this.getHeaders = this.getHeaders.bind(this);
    this.rangeGenerator = this.rangeGenerator.bind(this);
    this.renderCellNombre = this.renderCellNombre.bind(this);
    this.insertDataToHeaderCells = this.insertDataToHeaderCells.bind(this);
    this.setDayName = this.setDayName.bind(this);
    this.setMonthName = this.setMonthName.bind(this);
    this.renderCellBody = this.renderCellBody.bind(this);
    this.renderCellApellido = this.renderCellApellido.bind(this);
    this.renderCellPimienta = this.renderCellPimienta.bind(this);
    this.renderCellTotalMounth = this.renderCellTotalMounth.bind(this);
    this.renderCellTotalWeek = this.renderCellTotalWeek.bind(this);
    this.renderCellSubCategoria = this.renderCellSubCategoria.bind(this);
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

  renderCellBody(data) {
    return (
      <div data-id={data.id}>
        <div>{data.category}</div>
      </div>
    );
  }

  getHeaders() {
    return [
      {
        data: "",
        empty: true,
        keyColumn: "category",
        renderCellBody: this.renderCellBody,
      },
      { data: "", empty: true, className:"Hola" },
      {
        data: "",
        keyColumn: "subcategoria",
        renderCellBody: this.renderCellSubCategoria,
      },
      {
        data: "LUN",
        keyColumn: "lunes",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "MAR",
        keyColumn: "martes",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "MIE",
        keyColumn: "miercoles",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "JUE",
        keyColumn: "jueves",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "VIE",
        keyColumn: "viernes",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "SAB",
        keyColumn: "sabado",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "DOM",
        keyColumn: "domingo",
        renderCellHeader: this.renderCellNombre,
      },
      {
        data: "DOM",
        keyColumn: "totalWeek",
        renderCellHeader: this.renderCellTotalWeek,
      },
      { data: "", empty: true },
      {
        data: "DOM",
        keyColumn: "totalMounth",
        renderCellHeader: this.renderCellTotalMounth,
      },
    ];
  }
  renderCellSubCategoria(data) {
   
      return (
        <div>
          <div>{data.subcategoria}</div>
        </div>
      );
    
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

  renderCellNombre(data) {
    return (
      <div>
        <div className="part-first-text-header">{data.textDay}</div>
        <div>{data.numDay}</div>
      </div>
    );
  }

  renderCellApellido(data) {
    return (
      <div>
        <div className="part-first-text-header">{data.textDay}</div>
        <div>{data.numDay}</div>
      </div>
    );
  }

  renderCellPimienta(data) {
    return (
      <div>
        <div className="part-first-text-header">{data}</div>
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
    let array = this.insertDataToHeaderCells(this.props.firstDateInRange);

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

const mapStateToProps = (state) => ({
  firstDateInRange: state.firstDateInRange,
});

const mapDispatchToProps = (dispatch) => ({
  setNewDate(date) {
    dispatch(setNewDate(date));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableSmarth);
