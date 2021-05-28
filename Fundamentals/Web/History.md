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

**_ASCII_**: El código ASCII por sus siglas en ingles corresponde a **A**merican **S**tandard **C**ode for **I**nformation. **I**nterchange. Fue creado en 1963 por el Comité Estadounidense de Estándares. En 1981, la empresa IBM desarrolló una extensión de 8 bits del código ASCII, en esta versión se reemplazaron algunos caracteres de control obsoletos, por caracteres gráficos. Además se incorporaron 128 caracteres nuevos, con símbolos, signos, gráficos adicionales y letras latinas, necesarias para la escrituras de textos en otros idiomas, como por ejemplo el español. Casi todos los sistemas informáticos de la actualidad utilizan el código ASCII para representar caracteres, símbolos, signos y textos

_Ejercicio_:

Binario = 10100001 01001000 01101111 01101100 01100001 00100001
ASCII   = 161      72       111      108      97       33
Texto   = ¡        H        o        l        a        !

**_UNICODE_**: Se creo para complementar el código ASCII para cubrir todos los caracteres especiales y alfabetos, un unicode se puede formar con una representación de 1 a 6 bytes.

**_RGB_**
⠀
RGB se trata de un modelo cromático mediante el cual seremos capaces de representar distintos colores a partir de la mezcla de estos tres colores primarios(**R**ed, **G**reen, **B**lue).
⠀
Cada pixel dentro de una imagen está compuesta por 3 sub pixeles: Red, Green y Blue con un valor de 0 a 255 que representa la intensidad del color, para formar colores combinamos las tonalidades de estos tres colores.
⠀
Ejemplos:
- Plum Purple 
  **R** = 178,
  **G** = 80,
  **B** = 228 
⠀

A su vez la computadora realiza cálculos para convertir estos números a un lenguaje de máquina que pueda entender.
⠀ 
_Binario_ = 10110010 01010000 11100100
_RGB_     = 178      80       228
_Color_   = Plum Purple

**_INTERNET_**

Surge al querer resolver problemas de cómo conectar y compartir información entre los computadores.

La red de internet se basa en los cables, sea dentro de las casas ciudades o debajo de mar a través del _internet backbone_ que es la infraestructura principal que soporta la red a nivel mundial.
 
_Internetworking_ nace del proyecto _ARPANET_ de querer interconectar universidades y por la guerra fría en lo 70 no querían tener toda la información en un solo lugar donde la puedan perder y nace la necesidad de replicar y compartir información entre las grandes computadoras que en ese tiempo solo podían costear las Universidades. Las dos primeras computadoras conectadas intentaron comunicarse enviando un mensaje _"login"_ y solo se recibió _"lo"_, lo cual no fue visto como un fallo sino como una señal de que si se podía hacer pero faltaba más por hacer, y eventualmente fueron resolviendo los problemas y se fueron uniendo mas universidades al proyecto y empezaran a comunicarse entre sí, logueandose, pidiendo permisos y enviándose mensajes, todo esto a través de código binario enviado por lo cables que las conectaban y en el receptor es traducido a ASCII y presentado al operador.
 
Al momento de que el proyecto se empieza a volver global y cada universidad empieza a implementar soluciones propias se empiezan a establecer los primeros estándares y _protocolos_ para compartir información para establecer un orden.
