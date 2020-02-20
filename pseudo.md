## Prueba Lógica  

1.  
Clase NumeroFaltante  
  Array arreglo = [100];  
  Para i = 0 Hasta i < 100  
    Para j = 1 Hasta j == 100  
      Si arreglo[i] != j Entonces  
        Imprimir 'El número ' + arreglo[i] + ' no se encuentra en el arreglo';  
      FinSi  
    FinPara  
  FinPara  
FinClase  

2.  
Clase Duplicado  
  Array arreglo = [z];  
  Numero dup = 0;  
  Para i = 0 Hasta i < z-1  
    Para j = 1 Hasta j == z  
      Si arreglo[i] == arreglo[j] Entonces  
        Imprimir 'El número ' + arreglo[i] + ' se encuentra duplicado';  
      FinSi  
    FinPara  
  FinPara  
FinClase

3.  
Clase ReversarOrden  
  Array arreglo = [z];  
  Numero max, aux = 0;  
  Si z % 2 == 0 Entonces  
    max = z / 2;  
    Para i = 0 Hasta i < max  
      aux = arreglo[i];  
      arreglo[i] = arreglo[max - 1 - i];  
      arreglo[max - 1 - i] = aux;  
    FinPara  
  Sino  
    max = (z + 1) / 2;  
    Para i = 0 Hasta i < max - 1  
      aux = arreglo[i];  
      arreglo[i] = arreglo[max - 1 - i];  
      arreglo[max - 1 - i] = aux;  
    FinPara  
  FinSi  
FinClase

4.  
Clase Intercambio  
  Numero a, b;  
  Imprimir 'Ingrese el valor de A';  
  Leer a;  
  Imprimir 'Ingrese el valor de B';  
  Leer b;  
  a = (b - a) + a;  
  b = (a + b) - b;  
  Imprimir 'Ahora A = ' + a + ' y B = ' + b;  
FinClase

5.  
Clase Palindromo  
  Texto cadena;  
  Imprimir 'Ingrese la palabra a verificar';  
  Leer cadena;  
  Numero x, j, max = 0;  
  Numero tam = Tamaño(cadena)  
  Si tam % 2 == 0 Entonces  
    max = tam / 2;  
    Para i = 0 Hasta i < max  
      Si cadena[i] == '' Entonces  
        j++;  
      FinSi  
      Si cadena[i] != cadena[max - j - i] Entonces  
        x++;  
      FinSi  
    FinPara  
    Si x == 0 Entonces Imprimir 'El texto ' + cadena + ' es palíndromo';  
  Sino  
    max = (tam + 1) / 2;  
    Para i = 0 Hasta i < max - 1  
      Si cadena[i] == '' Entonces  
        j++;  
      FinSi  
      Si cadena[i] != cadena[max - j - i] Entonces  
        x++;  
      FinSi  
    FinPara  
    Si x == 0 Entonces Imprimir 'El texto ' + cadena + ' es palíndromo';  
  FinSi  
FinClase

7.  
Clase Consonantes  
  Texto cadena;  
  Imprimir 'Ingrese la palabra a verificar';  
  Leer cadena;  
  Array arrConsonantes = [b, d, f, g, h, j, k, l, m, n, ñ, p, q, r, s, t, v, x, y, z];  
  Numero cont = 0;  
  Para i = 0 Hasta i < Tamaño(cadena)  
    Para j = 0 Hasta j < 20  
      Si cadena[i] == arrConsonantes[j] Entonces  
        cont++;  
      FinSi  
    FinPara  
  FinPara  
  Imprimir 'El texto ' + cadena + ' tiene ' + cont ' consonantes';  
FinClase  
