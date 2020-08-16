# COMPONENTE CTABLE

Este componente renderizará un 

propiedades de columna:

data: muestra el texto del header column
empty: true/false indica si la columna va ser vacia. Se puede usar coomo un espacio
keyColumn: "string" combre de la columna respectiva a la data.

className: clases que se le desea agregar al th de la columna.
classNameBodyCell: function/String clase o function para definir la clase a agregar a los td en esa columna. 

renderCellBody: function  como será renderizado dentro de los td las celdas del tbody en esa columna.
renderCellHeader: function como será renderizado dentro de los th las celdas del thead en esa columna.

renderData: sí se envía esta propiedad, el renderCellHeader, tomará este valor como parametro data, sino
se mandará el data inicial.

propiedades de tabla: es un objeto con la siguiente estructura.

{
    cellPropertiesBody: {
      numCellByProperties: [ // permite agregar celdas extras como divisiones 
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
    headerRow: { permite agregar un rowSpan que abarca todas las filas del body
      column: "category",
    },
    tableAttributes:{ permite agregar propiedades a la tabla, por ahora solo asigna clase
       className:"tbl-report"
    }, 
    theadAttributes:{ permite agregar propiedades al thead, por ahora solo agrega clase.
       className:"tbl-report--head"
    }, 
    tbodyAttributes:{ permite agregar propiedades al tbody, por ahora solo agrega clase
       className:"tbl-report--body row-divider"
    },
    trowClassName: this.getClassNameRow / permite agrega clase a la fila, puede ser un string o una función.
    }; 
  }