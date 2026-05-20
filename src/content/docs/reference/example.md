---
title: Glosario de Keywords
description: Mapeo completo entre el vocabulario emo de SadScript y los tokens internos del parser
---

import SadCodeBlock from "../../components/SadCodeBlock.astro";

# Glosario de Keywords

La tabla completa de mapeo entre el vocabulario emo visible y los tokens internos del parser:

| SadScript           | Token interno       | Significado           |
| ------------------- | ------------------- | --------------------- |
| `dolor`             | `ENTERO`            | Tipo entero           |
| `vacio`             | `FLOTANTE`          | Tipo flotante         |
| `esperanza`         | `BOOLEANO`          | Tipo booleano         |
| `recuerdo`          | `CADENA`            | Tipo cadena           |
| `cicatriz`          | `VECTOR`            | Tipo vector           |
| `trauma`            | `MATRIZ`            | Tipo matriz           |
| `si_duele`          | `IF`                | Condicional if        |
| `si_no_duele`       | `ELSE`              | Condicional else      |
| `si_no_duele_pero`  | `ELSEIF`            | Condicional else if   |
| `segun_mi_animo`    | `SWITCH`            | Switch                |
| `caso`              | `CASE`              | Case                  |
| `por_defecto_mio`   | `DEFAULT`           | Default               |
| `mientras_duela`    | `WHILE`             | Bucle while           |
| `para_que_duela`    | `FOR`               | Bucle for             |
| `aunque_no_quiera`  | `DO`                | Bucle do-while        |
| `cortarme`          | `BREAK`             | Break                 |
| `seguir_fingiendo`  | `CONTINUE`          | Continue              |
| `ritual`            | `FUNCTION`          | Definición de función |
| `regresar_a_llorar` | `RETURN`            | Return                |
| `confesar`          | `PRINT`             | Salida por consola    |
| `intentar_sentir`   | `TRY`               | Try                   |
| `romperse`          | `CATCH`             | Catch                 |
| `colapsar`          | `THROW`             | Throw                 |
| `afirmar`           | `ASSERT`            | Assert                |
| `vivo`              | `TRUE`              | Booleano verdadero    |
| `muerto`            | `FALSE`             | Booleano falso        |
| `nulo`              | `NULO`              | Null                  |
| `sum`               | `OP_SUMA_REDUCCION` | Suma de colección     |
| `prod`              | `OP_PROD_REDUCCION` | Producto de colección |
| `max`               | `OP_MAX_REDUCCION`  | Máximo de colección   |
| `min`               | `OP_MIN_REDUCCION`  | Mínimo de colección   |
| `prom`              | `OP_PROM_REDUCCION` | Promedio de colección |

## Tipos de datos

| SadScript   | Significado         | Ejemplo                       |
| ----------- | ------------------- | ----------------------------- |
| `dolor`     | Entero (`int`)      | `dolor edad = 20;`            |
| `vacio`     | Flotante (`float`)  | `vacio promedio = 3.14;`      |
| `esperanza` | Booleano (`bool`)   | `esperanza ok = vivo;`        |
| `recuerdo`  | Cadena (`string`)   | `recuerdo msg = "hola";`      |
| `cicatriz`  | Vector / arreglo 1D | `cicatriz nums = [1,2,3];`    |
| `trauma`    | Matriz / arreglo 2D | `trauma mat = [[1,2],[3,4]];` |

## Literales y valores

<SadCodeBlock code={`vivo      // true
muerto    // false
nulo      // null
'a'       // caracter
"texto"   // cadena
42        // entero
3.14      // flotante
1.5e10    // notación científica`}/>

## Break y Continue

<SadCodeBlock code={`cortarme;              // break
seguir_fingiendo;      // continue`}/>
