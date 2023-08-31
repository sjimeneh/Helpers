function generarColorHex() {
  // Generar tres valores de color RGB aleatorios
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Convertir los valores RGB a un valor hexadecimal de 6 dígitos
  var colorHex =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return colorHex;
}

async function LoadScheduler() {

  let dataSourceGroup = [];
  let dataSourceEmployees =[];

  let res = await fetch("http://htc5cg6021v3q:3000/api/users/group?deparmentId=1");

  if(res.status !== 200) {return false};

  let data = await res.json();

  if(data.length === 0){return false};

  for (let i = 0; i < data.length; i++) {
    let color = generarColorHex();
    dataSourceGroup[i] = {
      nombreGrupo: data[i].Group_Name,
      GrupoId: data[i].Id,
      color,
    };
  }

  res = null;
  data = null;
  

  res = await fetch("http://htc5cg6021v3q:3000/api/users");
  data = await res.json();

  if(res.status !== 200){return false};
  if(data.length === 0){return false};

  console.log(data);

  for(let i=0; i<data.length; i++){
    dataSourceEmployees[i] = {
      "nombreEmpleado": `${data[i].Name} ${data[i].LastName}`,
      "EmployeeID": data[i].EmployeeID,
      "GrupoId": data[i].GrupoId,
      "color": data[i].Color,
      "department": data[i].Deparment_Name,
      "email": data[i].Email,
      "Designation": data[i].Designation
    };
  }

  // console.log(dataSourceEmployees);
  
  

  // Definir el objeto dataSource para contener los eventos
  var dataManager = new ej.data.DataManager({
    url: "http://HTC5CG6021V3Q:3000/api/events",
    crudUrl: "http://HTC5CG6021V3Q:3000/api/events",

    adaptor: new ej.data.WebApiAdaptor(),
    // adaptor: new ej.data.UrlAdaptor(),
    crossDomain: true,
    headers: [
      { "X-Requested-With": "XMLHttpRequest" },
      // { "Content-Type": "application/json; charset=utf-8" },
      { Accept: "application/json" },
    ],
  });

  var scheduleObj = new ej.schedule.Schedule({
    height: "90vh",
    width: "98vw",
    selectedDate: new Date(),
    // views: ["TimelineDay", "TimelineWeek"], TODO
    cssClass: 'schedule-cell-dimension',
    views: [
      { option: "Day" },
      { option: "TimelineDay", isSelected: true },
      { option: "TimelineWeek" },
      { option: "TimelineMonth" },
      { option: "Year" },
      { option: "Agenda" }, // para seleccionar por defecto un tiempo puedo añadir la propiedad al obteto:, isSelected: true
    ],

    readonly: true, //Modo de vista: Solo lectura

    //workDays: [0, 1, 2, 3, 4, 5], para mostrar 5 día en el TIMELINE Day
    allowDragAndDrop: true, //Permitir arrastrar los elementos en el scheduler
    eventSettings: { dataSource: dataManager }, //datos a buscar
    timeZone: "America/Bogota",
    group: {
      //Agrupamiento de datos
      // enableCompactView: true, //--No sé para que srive
      resources: ["Grupos", "Empleados"],
    },
    resources: [
      {
        //Configuración de Grupos
        field: "GrupoId", //Alias en el conjunto de datos para los grupos, en este caso los dejamos como GroupId
        title: "Seleccionar Grupo",
        name: "Grupos",
        dataSource: dataSourceGroup,
        textField: "nombreGrupo",
        idField: "GrupoId", //Texto Clave para el identificador unico del campo
        colorField: "color",
      },
      {
        //Configuracion de los grupos en general
        idField: "EmployeeID",
        field: "EmployeeID", //Alias o Identificador en la base de datos
        title: "Empleado",
        name: "Empleados",
        allowMultiple: true,
        textField: "nombreEmpleado",
        groupIDField: "GrupoId",
        colorField: "color",
        dataSource : dataSourceEmployees,
      },
    ],
  });

  scheduleObj.appendTo("#Schedule");
}

LoadScheduler();
