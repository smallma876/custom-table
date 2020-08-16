import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setNewDate } from './../redux/actionCreators';
import moment from "moment";

export class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                "auditResponse": {
                    "idTransaccion": "123456",
                    "codigoRespuesta": "0",
                    "mensajeRespuesta": "Operación con éxito"
                },
                "entity": [
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
            }
        }
        this.changeWeek = this.changeWeek.bind(this);
    }

    changeWeek(){
      
        let data = this.state.data.entity;    
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
                subategoria: "Total",
                lunes: 0,
                martes: 0,
                miercoles: 0,
                jueves: 0,
                viernes: 0,
                sabado: 0,
                domingo: 0,
                totalWeek: 0,
                totalMounth: 0,
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
                object.totalWeek = object.totalWeek + item.totalWeek;
                object.totalMounth = object.totalMounth + item.totalMounth;
            })
            if(object.category.trim().toUpperCase() === "PROSPECCIÓN" ||
               object.category.trim().toUpperCase() === "CITAS" ||
               object.category.trim().toUpperCase() === "ENTREVISTAS" ||
               object.category.trim().toUpperCase() === "ENTREVISTAS CONJUNTAS")
            item.push(object);
            
        })
      
    }

    render() {
        return (
            <div>
                <button type="button" value="next" onClick={this.changeWeek}>NEXT</button>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
      firstDateInRange : state.firstDateInRange
    }
  )
  
  const mapDispatchToProps = dispatch => ({
      setNewDate(date){
         dispatch(setNewDate(date))
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
