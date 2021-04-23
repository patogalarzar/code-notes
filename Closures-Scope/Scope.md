#Scope

Es el alcance que tiene una variable dentro del código, define a los bloques de código a los que tendrá acceso una variable.

El scope tiene dos definiciones _global_ y _local_

**Global scope**

La variables globales son a las que se puede acceder desde cualquier parte durante la ejecución de nuestro código, estas variables no se encuentran definidas dentro de funciones o bloques.

las variables pueden ser declaradas con las palabras reservadas _var_, _let_ y _const_

* _var_ : nos permite declarar variables y su valor puede cambiar durante el tiempo de ejecución. Se puede re asignar una variable volviéndola a declarar, esto es una mala práctica.
* _let_ : nos permite declarar variables y su valor puede cambiar durante el tiempo de ejecución. No se puede re asignar una variable volviéndola a declarar, esto genera un error.
* _const_ : nos permite declarar variables y su valor no puede cambiar durante el tiempo de ejecución. No se puede re asignar una variable volviéndola a declarar, esto genera un error.


Una mala práctica es establecer variables dentro de una función sin utilizar las palabras reservadas para su declaración lo que las vuelve globales.
