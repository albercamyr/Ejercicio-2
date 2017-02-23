var informacion = [{nombre: "Arabela", apellido: "Rojas", rol: "T.A", cumpleaños: "23 de enero"},
                   {nombre: "Michelle", apellido: "Seguil", rol: "T.A", cumpleaños: "25 de noviembre"},
                   {nombre: "Meche", apellido: "Zubieta", rol: "T.A", cumpleaños: "02 de marzo"},
                   {nombre: "Papu ", apellido: "Rivarola", rol: "T.A", cumpleaños: "10 de octubre"},
                   {nombre: "Gian", apellido: "Corzo", rol: "Profesor", cumpleaños: "23 de enero"}]


 informacion.forEach(function(x){
   document.write( "<div><ul><li>"+ "Nombre:" + x.nombre + "</li>" +
                                  "<li>"+ "Apellido:" + x.apellido + "</li>" +
                                  "<li>"+ "Rol:" + x.rol + "</li>" +
                                  "<li>"+ "Cumpleaños:" + x.cumpleaños + "</li></ul></div>");

 })
