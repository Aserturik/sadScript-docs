---
title: sadScript
description: Lenguaje de programación temático emo con sintaxis en español y corazón de compilador clásico (Flex + Bison)
---

# SadScript 💔

**SadScript** es un lenguaje de programación temático donde **cada palabra clave duele**. Está diseñado para sentirse triste, cansado y existencial por fuera, pero seguir siendo formalmente compilable por dentro.

```
dolor edad = 20;
vacio promedio = 3.14;
esperanza seguir_vivo = vivo;
recuerdo mensaje = "nadie me entiende";

si_duele (edad > 18) {
    confesar("ya soy adulto... qué triste");
}
```

## Filosofía

> _"SadScript debe sentirse triste, cansado y existencial por fuera, pero seguir siendo formalmente compilable por dentro."_

El lenguaje une dos mundos:

- **El tema**: vocabulario emo en primera persona — toda palabra reservada evoca angustia, melancolía o drama existencial.
- **La técnica**: un analizador léxico (Flex) + parser (Bison) con precedencia de operadores, tipos explícitos, colecciones reales y reporte de errores preciso.

Es un proyecto ideal para:

- Aprender cómo funcionan lexers y parsers en compiladores
- Explorar diseño de lenguajes con un toque de humor negro
- Usar como base para un lenguaje completo con intérprete o transpilador

## Estado actual

SadScript es actualmente un **validador de sintaxis**. El analizador léxico y el parser están completos y funcionales. No hay todavía un intérprete, generación de código, ni análisis semántico (type checking, AST, etc.).

| Fase                 | Estado       |
| -------------------- | ------------ |
| Léxico (Flex)        | ✅ Completo  |
| Sintáctico (Bison)   | ✅ Completo  |
| Semántico            | ❌ Pendiente |
| Intérprete / VM      | ❌ Pendiente |
| Generación de código | ❌ Pendiente |

---

## Guía de inicio rápido

### Requisitos

- **Flex** (analizador léxico)
- **Bison** (generador de parser)
- **GCC** o **Clang** (compilador C)

Instalación en Linux (Debian/Ubuntu):

```bash
sudo apt install flex bison build-essential
```

Instalación en macOS:

```bash
brew install flex bison
```

### Compilar

```bash
git clone https://github.com/tu-usuario/sadScript.git
cd sadScript
./build.sh
```

Esto genera:

1. `a_sintactico.tab.c` / `.h` — parser generado por Bison
2. `lex.yy.c` — lexer generado por Flex
3. `sadScript` — binario ejecutable

### Ejecutar un programa

```bash
./sadScript tests/01_happy.sad
```

Salida exitosa:

```
Análisis léxico y sintáctico completado sin errores.
```

### Ejecutar todos los tests

```bash
./run_tests.sh
```

---

## Guía del lenguaje

### Tipos de datos

| SadScript   | Significado         | Ejemplo                       |
| ----------- | ------------------- | ----------------------------- |
| `dolor`     | Entero (`int`)      | `dolor edad = 20;`            |
| `vacio`     | Flotante (`float`)  | `vacio promedio = 3.14;`      |
| `esperanza` | Booleano (`bool`)   | `esperanza ok = vivo;`        |
| `recuerdo`  | Cadena (`string`)   | `recuerdo msg = "hola";`      |
| `cicatriz`  | Vector / arreglo 1D | `cicatriz nums = [1,2,3];`    |
| `trauma`    | Matriz / arreglo 2D | `trauma mat = [[1,2],[3,4]];` |

### Literales y valores

```sadscript
vivo      // true
muerto    // false
nulo      // null
'a'       // caracter
"texto"   // cadena
42        // entero
3.14      // flotante
1.5e10    // notación científica
```

### Declaración de variables

```sadscript
dolor edad = 20;
vacio promedio = 3.14;
esperanza vivo = vivo;
recuerdo msg = "hola mundo";
cicatriz nums = [1, 2, 3, 4];
trauma mat = [[1.2, 3.4], [5.6, 7.8]];
```

Las variables se pueden declarar sin inicializar:

```sadscript
dolor edad;
recuerdo nombre;
```

### Asignación

```sadscript
edad = 21;
edad += 1;
edad -= 1;
edad *= 2;
edad /= 2;
edad %= 3;
```

### Operadores

#### Aritméticos

| Operador | Operación      |
| -------- | -------------- |
| `+`      | Suma           |
| `-`      | Resta          |
| `*`      | Multiplicación |
| `/`      | División       |
| `%`      | Módulo         |
| `**`     | Potencia       |
| `++`     | Incremento     |
| `--`     | Decremento     |

#### Relacionales

| Operador | Significado                |
| -------- | -------------------------- |
| `==`     | Igual a                    |
| `!=`     | Diferente de               |
| `<>`     | Diferente de (alternativo) |
| `<`      | Menor que                  |
| `<=`     | Menor o igual que          |
| `>`      | Mayor que                  |
| `>=`     | Mayor o igual que          |

#### Lógicos

| Símbolo | Palabra | Significado |
| ------- | ------- | ----------- |
| `&&`    | `y`     | AND         |
| `\|\|`  | `o`     | OR          |
| `!`     | `no`    | NOT         |

Puedes usar ambas formas:

```sadscript
si_duele (edad > 18 && vivo) { ... }
si_duele (edad > 18 y vivo) { ... }
```

#### Operadores de reducción

SadScript incluye operadores de agregación sobre colecciones:

```sadscript
sum([1, 2, 3])    // → 6
prod([2, 3, 4])   // → 24
max([1, 5, 2])    // → 5
min([1, 5, 2])    // → 1
prom([1, 2, 3])   // → 2.0
```

### Precedencia de operadores

De menor a mayor precedencia:

| Precedencia  | Operadores            | Asociatividad |
| ------------ | --------------------- | ------------- |
| 1 (más baja) | `= += -= *= /= %=`    | Derecha       |
| 2            | `\|\|` `o`            | Izquierda     |
| 3            | `&&` `y`              | Izquierda     |
| 4            | `==` `!=` `<>`        | Izquierda     |
| 5            | `>` `<` `>=` `<=`     | Izquierda     |
| 6            | `+` `-`               | Izquierda     |
| 7            | `*` `/` `%`           | Izquierda     |
| 8            | `**`                  | Derecha       |
| 9 (más alta) | `!` `no` `-` (unario) | Derecha       |

### Control de flujo

#### If / Else if / Else

```sadscript
si_duele (edad > 18) {
    confesar("adulto");
} si_no_duele_pero (edad > 12) {
    confesar("adolescente");
} si_no_duele {
    confesar("niño");
}
```

#### While

```sadscript
mientras_duela (vivo) {
    confesar("todavía respiro");
    cortarme;           // break
}
```

#### For

```sadscript
para_que_duela (dolor i = 0; i < 10; i = i + 1) {
    confesar("duele");
}
```

#### Do-While

```sadscript
aunque_no_quiera {
    confesar("una vez");
} mientras_duela (condicion);
```

#### Switch

```sadscript
segun_mi_animo (edad) {
    caso 18:
        confesar("ya casi");
        cortarme;
    caso 21:
        confesar("legalmente adulto");
        cortarme;
    por_defecto_mio:
        confesar("sin rumbo");
}
```

### Break y Continue

```sadscript
cortarme;              // break
seguir_fingiendo;      // continue
```

### Funciones

#### Definición con tipo de retorno

```sadscript
ritual llorar() : vacio {
    confesar("hola mundo");
    regresar_a_llorar 0.0;
}
```

#### Definición sin tipo de retorno

```sadscript
ritual gritar(dolor intensidad) {
    confesar("AHH");
}
```

#### Con múltiples parámetros

```sadscript
ritual sumar(dolor a, dolor b) : dolor {
    regresar_a_llorar a + b;
}
```

#### Llamada a función

```sadscript
llorar();
gritar(intensidad: 10);           // argumento nombrado
sumar(a: 5, b: 3);                // múltiples argumentos nombrados
```

### Colecciones

#### Vectores (arreglos 1D)

```sadscript
cicatriz numeros = [1, 2, 3, 4];
numeros[0] = 10;
confesar(numeros[2]);   // imprime 3
```

#### Matrices (arreglos 2D)

```sadscript
trauma sombras = [[1.2, 3.4], [5.6, 7.8]];
confesar(sombras[0][1]);   // imprime 3.4
```

### Manejo de excepciones

#### Try / Catch

```sadscript
intentar_sentir {
    confesar("intentando...");
} romperse(error) {
    confesar(error);
}
```

#### Throw

```sadscript
colapsar("algo salió mal");
```

#### Assert

```sadscript
afirmar(edad > 0);
```

### Print (salida por consola)

```sadscript
confesar("mensaje");
confesar(edad);
confesar(3.14);
```

### Comentarios

```sadscript
// Comentario de línea

/* Comentario
   multilínea */
```

---

## Ejemplos completos

### Programa feliz (válido)

```sadscript
// Declaraciones base con tipos emo
dolor edad = 20;
vacio promedio = 3.14;
esperanza seguir_vivo = vivo;
recuerdo mensaje = "nadie me entiende";

// Colecciones
cicatriz numeros = [1, 2, 3, 4];
trauma sombras = [[1.2, 3.4], [5.6, 7.8]];

// Condicional
si_duele (edad > 18) {
    confesar("ya soy adulto");
}

// Ciclo while con break
mientras_duela (seguir_vivo) {
    confesar("todavia respiro");
    cortarme;
}

// Función con retorno
ritual llorar() : vacio {
    confesar("hola mundo");
    regresar_a_llorar 0.0;
}
```

### Switch con caso y default

```sadscript
dolor edad = 15+3-0;

segun_mi_animo (edad) {
    caso 18:
        confesar("ya casi");
    por_defecto_mio:
        confesar("sin rumbo");
}
```

### Con errores

#### Error léxico (carácter inválido)

```sadscript
dolor edad = 20;
confesar("léxico roto");
  ~   // ← error: '~' no está en el alfabeto del lenguaje
```

Salida:

```
Error léxico en línea 4, columna 3: token no reconocido '~'
```

#### Error sintáctico (keyword mal escrita)

```sadscript
dolor edad = 20;
si_duel (edad > 18) {     // ← error: debería ser "si_duele"
    confesar("typo en keyword");
}
```

Salida:

```
Error sintáctico en línea 4, columna 18: syntax error, unexpected LLAVE_IZQ, expecting PUNTO_COMA cerca de '{'
```

#### Error sintáctico (bloque sin cerrar)

```sadscript
dolor edad = 21;
si_duele (edad > 18) {
    confesar("parser roto");
    // falta la llave de cierre
```

Salida:

```
Error sintáctico en línea 4, columna 4: syntax error, unexpected end of file
```

#### Error sintáctico (punto y coma faltante)

```sadscript
dolor edad = 20
confesar("falta punto y coma");    // ← error: falta ; en línea anterior
```

---

## Arquitectura

SadScript sigue el modelo clásico de **frontend de compilador** en dos fases:

```
Código fuente (.sad)
       │
       ▼
┌─────────────────┐
│  Flex Lexer      │  a_lexico.l
│  (análisis       │  → produce tokens
│   léxico)        │
└────────┬─────────┘
         │ tokens
         ▼
┌─────────────────┐
│  Bison Parser    │  a_sintactico.y
│  (análisis       │  → valida gramática
│   sintáctico)    │  → llama yyerror() si falla
└────────┬─────────┘
         │
         ▼
  ✅ Éxito (exit 0)
  ❌ Error (exit 1 + mensaje)
```

### Lexer (`a_lexico.l`)

- **243 líneas** de definiciones Flex
- Reconoce ~50 tokens: palabras reservadas, operadores, literales, identificadores
- Soporta caracteres con acentos del español (`áéíóúüñÁÉÍÓÚÜÑ`)
- Comentarios multilínea mediante estados Flex (`COMENTARIO_MULTI`)
- Reporte de errores léxicos con línea y columna exacta
- Los identificadores soportan caracteres Unicode del español

### Parser (`a_sintactico.y`)

- **356 líneas** de gramática Bison
- Precedencia de operadores declarativa con `%left`, `%right`, `%nonassoc`
- `%define parse.error verbose` para mensajes de error descriptivos
- `yyerror()` imprime: `Error sintáctico en línea X, columna Y: <mensaje> cerca de '<token>'`

### Reporte de errores

- **Errores léxicos** → se reportan a **stdout**
- **Errores sintácticos** → se reportan a **stderr**
- Ambos incluyen **número de línea y columna**
- `main()` devuelve `exit 0` en éxito, `exit 1` en cualquier error

### Build system (`build.sh`)

```bash
bison -d a_sintactico.y      # genera parser + header
flex a_lexico.l              # genera lexer
cc lex.yy.c a_sintactico.tab.c -o sadScript -lfl -lm  # compila
```

---

## Testing

### Suite de tests

| Archivo                               | Esperado  | Descripción              |
| ------------------------------------- | --------- | ------------------------ |
| `tests/01_happy.sad`                  | ✅ exit 0 | Programa válido completo |
| `tests/02_typo_keyword_fail.sad`      | ❌ exit 1 | Keyword mal escrita      |
| `tests/03_missing_semicolon_fail.sad` | ❌ exit 1 | Punto y coma faltante    |
| `tests/04_default_switch.sad`         | ✅ exit 0 | Switch con default       |
| `tests/05_lexer_fail.sad`             | ❌ exit 1 | Caracter inválido `~`    |
| `tests/06_parser_fail.sad`            | ❌ exit 1 | Bloque sin cerrar        |

### Ejecutar tests

```bash
./run_tests.sh
```

El script:

1. Compila el proyecto con `build.sh`
2. Ejecuta cada `.sad` verificando código de salida
3. Verifica mensajes de salida esperados (stdout/stderr)
4. Reporta PASS/FAIL con resumen

---

## Glosario de keywords

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

---

## Próximos pasos (ideas para contribuir)

Estas son las áreas donde SadScript puede crecer:

1. **Árbol de sintaxis abstracta (AST)** — construir un AST en las acciones semánticas del parser
2. **Intérprete** — evaluar el AST y ejecutar programas
3. **Type checker** — validar tipos en tiempo de compilación
4. **Transpilador** — generar código JavaScript, Python o C
5. **Standard library** — funciones incorporadas (IO, matemáticas, strings)
6. **Sistema de módulos** — imports y exports entre archivos `.sad`
7. **Editor support** — resaltado de sintaxis para VS Code, Vim, etc.
8. **Playground web** — intérprete en el navegador

---

## Estructura del proyecto

```
sadScript/
├── a_lexico.l              # Lexer (Flex)
├── a_sintactico.y          # Parser (Bison)
├── a_sintactico.tab.c      # Parser generado (no editar)
├── a_sintactico.tab.h      # Tokens generados (no editar)
├── lex.yy.c                # Lexer generado (no editar)
├── sadScript               # Binario compilado
├── build.sh                # Script de compilación
├── run_tests.sh            # Suite de tests automatizada
├── requirements.md         # Especificación del lenguaje
└── tests/
    ├── 01_happy.sad
    ├── 02_typo_keyword_fail.sad
    ├── 03_missing_semicolon_fail.sad
    ├── 04_default_switch.sad
    ├── 05_lexer_fail.sad
    └── 06_parser_fail.sad
```

---

## Licencia

MIT — haz con esto lo que quieras, pero si duele, ya sabes por qué.

---

## Contribuciones

¿Te duele algo y querés contribuir? Bienvenido. Este proyecto acepta:

- Pull requests con mejoras al lexer/parser
- Nuevos tests (especialmente casos negativos)
- Ideas para la semántica del lenguaje
- Implementación de intérprete o transpilador
- Temática: mientras más depresión existencial, mejor

---

_"Duele, pero al menos compila."_
