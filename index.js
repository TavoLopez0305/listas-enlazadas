class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
    }
  
    insertarAlFinalSinRepetir(dato) {
      // Verificar si el dato ya existe en la lista
      if (this.buscar(dato)) {
        console.log(`El dato ${dato} ya está en la lista. No se insertará.`);
        return;
      }
  
      const nuevoNodo = new Nodo(dato);
  
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let nodoActual = this.cabeza;
        while (nodoActual.siguiente) {
          nodoActual = nodoActual.siguiente;
        }
        nodoActual.siguiente = nuevoNodo;
      }
    }
  
    buscar(dato) {
      let nodoActual = this.cabeza;
      while (nodoActual) {
        if (nodoActual.dato === dato) {
          return true;
        }
        nodoActual = nodoActual.siguiente;
      }
      return false;
    }
  
    mostrar() {
      let nodoActual = this.cabeza;
      while (nodoActual) {
        console.log(nodoActual.dato);
        nodoActual = nodoActual.siguiente;
      }
    }
  }
  
  const lista = new ListaEnlazada();
  lista.insertarAlFinalSinRepetir(10);
  lista.insertarAlFinalSinRepetir(20);
  lista.insertarAlFinalSinRepetir(30);
  lista.insertarAlFinalSinRepetir(20); // Este dato ya existe y no se insertará
  lista.mostrar(); // Debe mostrar 10, 20, 30
  