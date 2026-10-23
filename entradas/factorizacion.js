const contenidoEntrada = `
  <h2>Introducción</h2>
  <h2>Caso 1: Factor común</h2>

  <h3>Cómo reconocerlo</h3>
  <p>
    Todos los términos del polinomio comparten algo: un número que los divide a todos,
    una letra que aparece en todos, o las dos cosas. Si al mirar los términos puedes "sacar"
    algo que se repite en cada uno, es este caso.
  </p>

  <h3>Procedimiento</h3>
  <ul>
    <li>Busca el mayor número que divide a todos los coeficientes (el MCD).</li>
    <li>De cada letra repetida, toma la que tenga el exponente más pequeño.</li>
    <li>Junta lo anterior: ese es el factor común y va fuera del paréntesis.</li>
    <li>Divide cada término entre el factor común y escribe los resultados dentro del paréntesis, conservando los signos.</li>
  </ul>

  <h3>Ejemplo 1 (ejercicio 38): 7x<sup>2</sup> + 5x</h3>
  <p>
    Los coeficientes 7 y 5 solo comparten el 1, así que no hay número común.
    Las letras son x<sup>2</sup> y x, y la de menor exponente es x. El factor común es x.<br>
    7x<sup>2</sup> ÷ x = 7x &nbsp;&nbsp; y &nbsp;&nbsp; 5x ÷ x = 5.<br>
    <strong>Resultado: x(7x + 5)</strong>
  </p>
  <p>
    <strong>Comprobación:</strong> x · 7x = 7x<sup>2</sup> y x · 5 = 5x.
    Sumando queda 7x<sup>2</sup> + 5x, que es el polinomio original. ✔
  </p>

  <h3>Ejemplo 2 (ejercicio 56): 600a<sup>7</sup> − 6a</h3>
  <p>
    El MCD de 600 y 6 es 6. Las letras son a<sup>7</sup> y a, y la de menor exponente es a.
    El factor común es 6a.<br>
    600a<sup>7</sup> ÷ 6a = 100a<sup>6</sup> &nbsp;&nbsp; y &nbsp;&nbsp; −6a ÷ 6a = −1.<br>
    <strong>Resultado: 6a(100a<sup>6</sup> − 1)</strong>
  </p>
  <p>
    <strong>Comprobación:</strong> 6a · 100a<sup>6</sup> = 600a<sup>7</sup> y 6a · (−1) = −6a.
    Queda 600a<sup>7</sup> − 6a. ✔
  </p>
  <p>
    Nota: lo que quedó dentro del paréntesis, 100a<sup>6</sup> − 1, es una diferencia de cuadrados,
    así que se puede seguir factorizando con el Caso 3.
  </p>

  <h2>Caso 2: Trinomio cuadrado perfecto</h2>

  <h3>Cómo reconocerlo</h3>
  <p>
    Tiene tres términos. El primero y el último son cuadrados perfectos (y positivos),
    y el término de en medio es exactamente el doble del producto de sus raíces.
    El signo del término de en medio decide si el binomio lleva suma o resta.
  </p>

  <h3>Procedimiento</h3>
  <ul>
    <li>Saca la raíz cuadrada del primer término y la del último.</li>
    <li>Multiplica esas dos raíces por 2 y revisa que el resultado sea el término de en medio. Si no coincide, no es este caso.</li>
    <li>Escribe un binomio con las dos raíces, usando el signo del término de en medio.</li>
    <li>Elévalo al cuadrado.</li>
  </ul>

  <h3>Ejemplo 1 (ejercicio 43): 64m<sup>2</sup> − 112m + 49</h3>
  <p>
    Raíz de 64m<sup>2</sup> es 8m. Raíz de 49 es 7.<br>
    Doble producto: 2 · 8m · 7 = 112m, que coincide con el término de en medio.
    Como es negativo, el binomio lleva resta.<br>
    <strong>Resultado: (8m − 7)<sup>2</sup></strong>
  </p>
  <p>
    <strong>Comprobación:</strong> (8m − 7)<sup>2</sup> = (8m)<sup>2</sup> − 2(8m)(7) + 7<sup>2</sup>
    = 64m<sup>2</sup> − 112m + 49. ✔
  </p>

  <h3>Ejemplo 2 (ejercicio 45): 81x<sup>6</sup> − 90x<sup>3</sup> + 25</h3>
  <p>
    Raíz de 81x<sup>6</sup> es 9x<sup>3</sup> (porque (9x<sup>3</sup>)<sup>2</sup> = 81x<sup>6</sup>). Raíz de 25 es 5.<br>
    Doble producto: 2 · 9x<sup>3</sup> · 5 = 90x<sup>3</sup>, que coincide. El signo es negativo.<br>
    <strong>Resultado: (9x<sup>3</sup> − 5)<sup>2</sup></strong>
  </p>
  <p>
    <strong>Comprobación:</strong> (9x<sup>3</sup> − 5)<sup>2</sup> = 81x<sup>6</sup> − 2(9x<sup>3</sup>)(5) + 25
    = 81x<sup>6</sup> − 90x<sup>3</sup> + 25. ✔
  </p>

  <h2>Caso 3: Diferencia de cuadrados</h2>

  <h3>Cómo reconocerlo</h3>
  <p>
    Tiene solo dos términos, separados por una resta, y los dos son cuadrados perfectos.
    Si hay suma en lugar de resta, no es este caso.
  </p>

  <h3>Procedimiento</h3>
  <ul>
    <li>Saca la raíz cuadrada de cada uno de los dos términos.</li>
    <li>Escribe dos binomios con esas mismas raíces: en uno van sumadas y en el otro restadas.</li>
    <li>El orden de los dos binomios no importa.</li>
  </ul>

  <h3>Ejemplo 1 (ejercicio 49): 9x<sup>2</sup> − 49</h3>
  <p>
    Raíz de 9x<sup>2</sup> es 3x. Raíz de 49 es 7.<br>
    <strong>Resultado: (3x + 7)(3x − 7)</strong>
  </p>
  <p>
    <strong>Comprobación:</strong> (3x + 7)(3x − 7) = 9x<sup>2</sup> − 21x + 21x − 49 = 9x<sup>2</sup> − 49.
    Los términos de en medio se cancelan. ✔
  </p>

  <h3>Ejemplo 2 (ejercicio 53): 81k<sup>6</sup> − 16</h3>
  <p>
    Raíz de 81k<sup>6</sup> es 9k<sup>3</sup>. Raíz de 16 es 4.<br>
    <strong>Resultado: (9k<sup>3</sup> + 4)(9k<sup>3</sup> − 4)</strong>
  </p>
  <p>
    <strong>Comprobación:</strong> (9k<sup>3</sup> + 4)(9k<sup>3</sup> − 4)
    = 81k<sup>6</sup> − 36k<sup>3</sup> + 36k<sup>3</sup> − 16 = 81k<sup>6</sup> − 16. ✔
  </p>

  <h2>Ida y regreso</h2>
  <p>
    Cada caso de factorización deshace una multiplicación conocida. La "ida" es multiplicar
    (de los factores al desarrollo) y el "regreso" es factorizar (del desarrollo a los factores).
  </p>

  <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
    <tr>
      <th>Caso de factorización</th>
      <th>Producto del que es inverso</th>
      <th>Ida (multiplicar)</th>
      <th>Regreso (factorizar)</th>
    </tr>
    <tr>
      <td>Factor común</td>
      <td>Monomio por polinomio (propiedad distributiva)</td>
      <td>x(7x + 5) = 7x<sup>2</sup> + 5x</td>
      <td>7x<sup>2</sup> + 5x = x(7x + 5)</td>
    </tr>
    <tr>
      <td>Trinomio cuadrado perfecto</td>
      <td>Binomio al cuadrado</td>
      <td>(8m − 7)<sup>2</sup> = 64m<sup>2</sup> − 112m + 49</td>
      <td>64m<sup>2</sup> − 112m + 49 = (8m − 7)<sup>2</sup></td>
    </tr>
    <tr>
      <td>Diferencia de cuadrados</td>
      <td>Binomios conjugados</td>
      <td>(3x + 7)(3x − 7) = 9x<sup>2</sup> − 49</td>
      <td>9x<sup>2</sup> − 49 = (3x + 7)(3x − 7)</td>
    </tr>
  </table>

  <p>
    Por eso la comprobación siempre funciona: si multiplicas de regreso el resultado de una
    factorización, tienes que volver exactamente al polinomio con el que empezaste.
  </p>
`;