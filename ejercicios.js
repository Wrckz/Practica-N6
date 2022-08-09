function crearUsuario() {
  function Usuario(opciones) {
  this.usuario = opciones.usuario;
  this.nombre = opciones.nombre;
  this.email = opciones.email;
  this.password = opciones.password;
}
Usuario.prototype.saludar = function () {
  return "Hola, mi nombre es " + this.nombre;
};
return Usuario;
}
  
  ///

    function datosPersona(nombre, apellido, dni) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.DNI = dni
    }
    var persona1 = new datosPersona('Juan', 'Perez', '15.003.123');
    var persona2 = new datosPersona('Jose', 'Paez', '17.888.456');
    
    console.log(persona1);
    console.log(persona2);
  
  ///
  function Default(nombre, apellido, dni) { 
    this.nombre = nombre || "Cristian"
    this.apellido = apellido || "Sanchez"
    this.DNI = dni || "0303456"
  }
  var persona1 = new Default();
  var persona2 = new Default();

  console.log(persona1)
  console.log(persona2)

  ///

  function Computador(id, marca, procesador, ram, ssd) { 
    this.id = id;
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.ssd = ssd;
    this.inicio = function () {
      return 'Bienvenido Admin... iniciando sistema';
    }
  }

  var mipc = new Computador('Ati Mobility Radeon 4500 series', 'MSI', 'Intel Xeon processor', '8Gb', 'SSD SanDisk 1Tb');

console.log(Computador.inicio)
console.log(mipc)

//Joaquin no supe como hacer para que me diera el mensaje de Inicio. espero que lo puedas revisar en la proxima clase.