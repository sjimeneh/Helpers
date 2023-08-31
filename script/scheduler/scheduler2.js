// console.log(new Date(2023, 3, 12, 10, 0));

// var data = [
//     {
//       Id: 1,
//       Subject: 'Meeting',
//       StartTime: new Date(2023, 3, 14, 1, 0),
//       EndTime: new Date(2023, 3, 14, 12, 30),
//       Description: "Gestionar Tiquete",
//       EmployeeID: 1
//     },
//     {
//       Id: 2,
//       Subject: 'Planning',
//       StartTime: new Date(2023, 3, 13, 01, 0),
//       EndTime: new Date(2023, 3, 14, 16, 0),
//       Description: "Usted se debe encargar de la gestion de tiquetes para minizar el riesgo a que cresca todo esto",
//       EmployeeID: 2
//     }
//   ];

// var dataManager = new ej.data.DataManager({
//   json: data,
//   adaptor: new ej.data.JsonAdaptor()
// });

// Definir el objeto dataSource para contener los eventos
var dataManager = new ej.data.DataManager({
  // Especificar la URL del controlador de la API para leer y escribir los eventos
  // Si estás usando la misma ruta para todas las operaciones, puedes especificarla aquí como baseUrl y omitirla en cada operación
  // En este ejemplo, asumimos que la ruta del controlador es '/api/events'
  // En Node.js y Express, esto podría ser '/events'
  // En cualquier caso, debes asegurarte de que la ruta sea correcta para tu aplicación
  // Para todas las solicitudes, debes incluir la cabecera 'Content-Type': 'application/json'
  // Para las solicitudes POST, PUT y DELETE, también debes incluir la cabecera 'X-Requested-With': 'XMLHttpRequest'
  // Estas cabeceras son necesarias para que Syncfusion Scheduler pueda trabajar con la API
  url: "http://localhost:3000/api/events",
  crudUrl:"http://localhost:3000/api/events",
  // batchUrl:"http://localhost:3000/api/events",
  adaptor: new ej.data.WebApiAdaptor(),
  // adaptor: new ej.data.UrlAdaptor(),
  crossDomain: true,
  headers: [
    { "X-Requested-With": "XMLHttpRequest" },
    // { "Content-Type": "application/json; charset=utf-8" },
    { Accept: "application/json" },
  ],
  // Especificar el esquema de los datos
  // Este esquema debe coincidir con el objeto dataSource que definimos anteriormente
  // El campo 'Id' es obligatorio y debe ser único para cada evento
  // Los campos 'Subject', 'StartTime' y 'EndTime' son obligatorios
  // El campo 'IsAllDay' indica si el evento dura todo el día o no
  // Los demás campos son opcionales
  // Consulta la documentación de Syncfusion Scheduler para obtener más información sobre los campos disponibles
  // schema: {
  //   primaryKey: "Id",
  //   fields: {
  //     Id: { type: "string" },
  //     Subject: { type: "string", validation: { required: true } },
  //     StartTime: { type: "date", validation: { required: true } },
  //     EndTime: { type: "date", validation: { required: true } },
  //     Location: { type: "string" },
  //     Description: { type: "string" },
  //     IsAllDay: { type: "boolean" },
  //     // Puedes agregar campos personalizados aquí si lo deseas
  //   },
  // },
});


// Configurar la propiedad dataSource del objeto Scheduler

var scheduleObj = new ej.schedule.Schedule({
  height: "550px",
  selectedDate: new Date(),
  // views: ["TimelineDay", "TimelineWeek"], TODO
  views: [
    { option: "Day" },
    { option: "TimelineDay" },
    { option: "TimelineMonth" },
    { option: "Year" }, // para seleccionar por defecto un tiempo puedo añadir la propiedad al obteto:, isSelected: true
  ],
  allowDragAndDrop: true,
  eventSettings: { dataSource: dataManager },
  timeZone: "America/Bogota",
  group: {
    resources: ["Employees"],
  },
  resources: [
    {
      field: "EmployeeID",
      title: "Employee",
      name: "Employees",
      allowMultiple: true,
      dataSource: [
        {
          text: "John Cala",
          id: 1,
          color: "#ea7a57",
          department: "Sales",
          phone: "(123) 456-7890",
          email: "john.smith@example.com",
          Designation: "Acceso Fijo",
        },
        {
          text: "Mateo Sepulveda",
          id: 2,
          color: "#7fa900",
          department: "Marketing",
          phone: "(123) 456-7890",
          email: "jane.doe@example.com",
          Designation: "Acceso Fijo",
        },
        {
          text: "Mile Peli Roja",
          id: 3,
          color: "#5978ee",
          department: "Engineering",
          phone: "(123) 456-7890",
          email: "bob.johnson@example.com",
          Designation: "Filtro",
        },
        {
          text: "Mario Henrique Del Carmen",
          id: 4,
          color: "#fec200",
          department: "Customer Support",
          phone: "(123) 456-7890",
          email: "lisa.lee@example.com",
          Designation: "Filtro",
        },
        {
          text: "Samuel The Papi",
          id: 5,
          color: "#df5286",
          department: "Human Resources",
          phone: "(123) 456-7890",
          email: "tom.thompson@example.com",
          Designation: "Cargue",
        },
        {
          text: "Samantha Kim",
          id: 6,
          color: "#00bdae",
          department: "Finance",
          phone: "(123) 456-7890",
          email: "samantha.kim@example.com",
          Designation: "Cargue",
        },
        {
          text: "Jackie Chan",
          id: 7,
          color: "#865fcf",
          department: "Operations",
          phone: "(123) 456-7890",
          email: "jackie.chan@example.com",
          Designation: "Acceso Fijo",
        },
        {
          text: "Will Smith",
          id: 8,
          color: "#1aaa55",
          department: "Product Management",
          phone: "(123) 456-7890",
          email: "will.smith@example.com",
          Designation: "Acceso Fijo",
        },
        {
          text: "Mia Johnson",
          id: 9,
          color: "#df5286",
          department: "Design",
          phone: "(123) 456-7890",
          email: "mia.johnson@example.com",
          Designation: "Acceso Fijo",
        },
        {
          text: "David Brown",
          id: 10,
          color: "#710193",
          department: "Research",
          phone: "(123) 456-7890",
          email: "david.brown@example.com",
          Designation: "Acceso Fijo",
        },
      ],
      textField: "text",
      idField: "id",
      groupIDField: "GroupId",
      colorField: "color",
    },
  ],
});

scheduleObj.appendTo("#Schedule");




// Crear una instancia de DataManager y pasarle el objeto dataSource
// var dataManager = new ej.data.DataManager({ dataSource: dataSource });