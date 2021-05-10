# History

**How it started**

**Inputs & Outputs**

Para trabajar con la computadora tiene que haber interacción una entrada(input) y una salida (Outputs) o la respuesta esperada de la computadora. En la entrada le pasamos información a la computadora para que sea procesada mediante cálculos para que regrese una información de salida, para generar esta interacción existen periféricos con los cuales pasamos información con los dispositivos de entrada y una vez que la información es procesada en los microprocesadores del computador genera una respuesta en los dispositivos de salida.

_Periféricos de entrada_: Teclado, mouse, micrófono, cámara, scanner, tabletas de dibujo, etc.
_Periféricos de salida_: Monitor, impresora, parlantes, proyector, etc.
_Cálculos_: Prácticamente todo lo que hace la computadora son cálculos matemáticos de muy alto nivel. Lo importante de los cálculos son tiempos de respuesta.

**_Binario_**: El código de maquina es un leguaje binario, el sistema binario es un sistema de conteo representado por ceros y unos. El sistema binario se incrementa en 2 empezando desde 1 hasta 128(1,2,4,8,16,32,64,128), para representar un número se activa(poner en 1) el valor que representa dentro del octeto y se pueden usar las variantes necesarias para representar el numero deseado:

┌───┬───┬───┬───┬───┬───┬───┬───┬─────┐
│128│ 64│ 32│ 16│  8│  4│  2│  1│ Res │
├───┼───┼───┼───┼───┼───┼───┼───┼─────┤
│  0│  0│  0│  0│  0│  0│  0|  1│   1 │
├───┼───┼───┼───┼───┼───┼───┼───┼─────┤
│  0│  0│  0│  0│  0│  0│  1|  0│   2 │
├───┼───┼───┼───┼───┼───┼───┼───┼─────┤
│  0│  0│  0│  0│  0│  0│  1|  1│   3 │
├───┼───┼───┼───┼───┼───┼───┼───┼─────┤
│  0│  0│  0│  1│  0│  1│  0|  0│  20 │
├───┼───┼───┼───┼───┼───┼───┼───┼─────┤
│  1│  1│  1│  1│  1│  1│  1|  1│ 255 │
└───┴───┴───┴───┴───┴───┴───┴───┴─────┘

_Ejercicio_: Representar el número 70 en binario.

┌───┬───┬───┬───┬───┬───┬───┬───┬─────┐
│128│ 64│ 32│ 16│  8│  4│  2│  1│ Res │
├───┼───┼───┼───┼───┼───┼───┼───┼─────┤
│  0│  1│  0│  0│  0│  1│  1|  0│  70 │
└───┴───┴───┴───┴───┴───┴───┴───┴─────┘

En términos mas humanos sumamos los dígitos que tenemos disponibles para que no de el numero deseado(70) en este caso sería 64 + 4 + 2 = 70 y activamos poniendo un 1 en la ubicación correspondiente a cada número que necesitamos para sumar 70.

**_Bits y Bytes_**: Un _bit_ es un elemento (0 o 1) dentro de la representación dentro del octeto binario y un _byte_ es el conjunto de 8 bits. 

┌───────       Byte      ───────┐

├───┬───┬───┬───┬───┬───┬───┬───┤
|128| 64| 32| 16|  8|  4|  2|  1|
├───┼───┼───┼───┼───┼───┼───┼───┤
|  0|  1|  0|  0|  0|  1|  1|  0|
└───┴───┴───┴───┴───┴───┴───┴───┘
                            ┌─┴─┐
                             Bit 

El computador recibe conjuntos de bytes y los transforma a bit para entenderlos y emitir una respuesta hacia un medio de salida este proceso lo hace mediante _transistores_.

**_Transistores_**: Los transistores funcionan con dos estados _on_ y _off_ lo que puede traducirse a _true_ y _false_ o _1_ y _0_, si un transistor en en on lo va a tomar la computadora como un 1 y si está en off lo toma como 0.

┌─ Transistores ─┐
├───────┬────────┤
│   ON  │   OFF  │
├───────┼────────┤
│  TRUE │  FALSE │
├───────┼────────┤
│   1   │    0   │
└───────┴────────┘
