const contenidoEntrada = `
<section>
    <h2>Factorización II</h2>
    <p>En la entrada anterior vimos factor común, trinomio cuadrado perfecto y diferencia de cuadrados. Aquí agrego cuatro casos más: la suma y la diferencia de cubos, los trinomios de la forma x<sup>2</sup> + bx + c y los trinomios de la forma ax<sup>2</sup> + bx + c, que resolvemos con el método del aspa simple.</p>

    <h3>1. Suma y diferencia de cubos</h3>
    <p><strong>Cómo reconocerlo:</strong> son exactamente dos términos, unidos por suma o por resta, y los dos son cubos perfectos (como 8, 27, 64, 125 o x<sup>3</sup>). Ojo: si es una resta de cuadrados, ese es otro caso.</p>
    <p><strong>Fórmulas:</strong></p>
    <ul>
        <li>a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)</li>
        <li>a<sup>3</sup> − b<sup>3</sup> = (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)</li>
    </ul>
    <p><strong>Procedimiento (con mis palabras):</strong></p>
    <ol>
        <li>Saco la raíz cúbica de cada término para obtener a y b.</li>
        <li>Escribo el primer factor, que es un binomio con a y b y el mismo signo que tenía la expresión original.</li>
        <li>Escribo el segundo factor, que es un trinomio: a al cuadrado, el producto a·b y b al cuadrado. El signo del medio es el contrario al del binomio, y el último término siempre es positivo.</li>
    </ol>
    <p>Un truco para no confundirme: en el trinomio, el signo del medio es opuesto al del binomio y el último siempre es +.</p>
    <p><strong>Ejemplo 1 (suma):</strong> 27x<sup>3</sup> + 8</p>
    <ul>
        <li>a = 3x porque (3x)<sup>3</sup> = 27x<sup>3</sup>, y b = 2 porque 2<sup>3</sup> = 8.</li>
        <li>27x<sup>3</sup> + 8 = (3x + 2)(9x<sup>2</sup> − 6x + 4)</li>
    </ul>
    <p><strong>Comprobación:</strong> (3x + 2)(9x<sup>2</sup> − 6x + 4) = 27x<sup>3</sup> − 18x<sup>2</sup> + 12x + 18x<sup>2</sup> − 12x + 8 = 27x<sup>3</sup> + 8 ✓</p>
    <p><strong>Ejemplo 2 (diferencia):</strong> 64y<sup>3</sup> − 125</p>
    <ul>
        <li>a = 4y y b = 5.</li>
        <li>64y<sup>3</sup> − 125 = (4y − 5)(16y<sup>2</sup> + 20y + 25)</li>
    </ul>
    <p><strong>Comprobación:</strong> (4y − 5)(16y<sup>2</sup> + 20y + 25) = 64y<sup>3</sup> + 80y<sup>2</sup> + 100y − 80y<sup>2</sup> − 100y − 125 = 64y<sup>3</sup> − 125 ✓</p>

    <h3>2. Trinomio de la forma x<sup>2</sup> + bx + c</h3>
    <p><strong>Cómo reconocerlo:</strong> son tres términos, el primero es x<sup>2</sup> con coeficiente 1, el segundo tiene x y el tercero es un número. No es trinomio cuadrado perfecto porque el término del medio no cumple el doble producto.</p>
    <p><strong>Procedimiento (con mis palabras):</strong></p>
    <ol>
        <li>Abro dos paréntesis con x en cada uno: (x )(x ).</li>
        <li>Busco dos números que multiplicados den c (el término independiente) y sumados den b (el coeficiente del medio).</li>
        <li>Los coloco uno en cada paréntesis, con su signo.</li>
    </ol>
    <p>Para encontrarlos, escribo las parejas de factores de c y reviso cuál suma b. Si c es positivo, los dos números tienen el mismo signo (el de b); si c es negativo, tienen signos distintos y el número más grande lleva el signo de b.</p>
    <p><strong>Ejemplo:</strong> x<sup>2</sup> − 5x − 24</p>
    <ul>
        <li>Necesito dos números que multiplicados den −24 y sumados den −5.</li>
        <li>Pruebo: 1 y −24 suman −23; 2 y −12 suman −10; 3 y −8 suman −5 ✓</li>
        <li>x<sup>2</sup> − 5x − 24 = (x + 3)(x − 8)</li>
    </ul>
    <p><strong>Comprobación:</strong> (x + 3)(x − 8) = x<sup>2</sup> − 8x + 3x − 24 = x<sup>2</sup> − 5x − 24 ✓</p>

    <h3>3. Trinomio de la forma ax<sup>2</sup> + bx + c (aspa simple)</h3>
    <p><strong>Cómo reconocerlo:</strong> son tres términos, pero el coeficiente de x<sup>2</sup> es distinto de 1 (por ejemplo 6x<sup>2</sup> + 7x − 20) y no es un trinomio cuadrado perfecto.</p>
    <p><strong>Procedimiento (con mis palabras):</strong></p>
    <ol>
        <li>Descompongo el primer término ax<sup>2</sup> en dos factores y los escribo en una columna.</li>
        <li>Descompongo el último término c en dos factores y los escribo en otra columna, al lado.</li>
        <li>Multiplico en cruz (de ahí el nombre de aspa) y sumo los dos productos cruzados.</li>
        <li>Si esa suma da exactamente el término del medio bx (con su signo), acerté. Si no, pruebo otras combinaciones de factores o cambio los signos.</li>
        <li>Los factores finales se leen en filas: cada fila es un paréntesis.</li>
    </ol>
    <p><strong>Ejemplo:</strong> 6x<sup>2</sup> + 7x − 20</p>
    <ul>
        <li>Primer término: 6x<sup>2</sup> = (3x)(2x).</li>
        <li>Último término: −20 = (−4)(5).</li>
        <li>Producto en cruz: 3x · 5 = 15x y 2x · (−4) = −8x. Suma: 15x − 8x = 7x ✓ (coincide con el término del medio).</li>
        <li>6x<sup>2</sup> + 7x − 20 = (3x − 4)(2x + 5)</li>
    </ul>
    <p><strong>Comprobación:</strong> (3x − 4)(2x + 5) = 6x<sup>2</sup> + 15x − 8x − 20 = 6x<sup>2</sup> + 7x − 20 ✓</p>

    <h3>Estrategia de factorización</h3>
    <p>Cuando me dan una expresión y no sé qué caso usar, sigo estos pasos en orden:</p>
    <ol>
        <li><strong>Busco un factor común.</strong> Siempre es el primer paso. Si lo hay, lo saco y trabajo con lo que queda dentro del paréntesis.</li>
        <li><strong>Cuento los términos</strong> de la expresión (o de lo que quedó dentro del paréntesis).</li>
        <li><strong>Si tiene 2 términos:</strong>
            <ul>
                <li>¿Es una resta de dos cuadrados perfectos? → diferencia de cuadrados: (a + b)(a − b).</li>
                <li>¿Son dos cubos perfectos, sumados o restados? → suma o diferencia de cubos.</li>
                <li>Si es una suma de cuadrados (como x<sup>2</sup> + 9), no se puede factorizar con números reales.</li>
            </ul>
        </li>
        <li><strong>Si tiene 3 términos:</strong>
            <ul>
                <li>¿El primero y el tercero son cuadrados perfectos y el del medio es el doble producto de sus raíces? → trinomio cuadrado perfecto.</li>
                <li>Si no, ¿el coeficiente de x<sup>2</sup> es 1? → trinomio x<sup>2</sup> + bx + c.</li>
                <li>Si no, ¿el coeficiente de x<sup>2</sup> es distinto de 1? → trinomio ax<sup>2</sup> + bx + c (aspa simple).</li>
            </ul>
        </li>
        <li><strong>Si tiene 4 o más términos:</strong> intento agrupar términos para sacar factor común por grupos (este caso no lo desarrollo en esta entrada).</li>
        <li><strong>Reviso si algún factor se puede factorizar más.</strong> Por ejemplo, una diferencia de cuadrados puede esconder otra dentro.</li>
        <li><strong>Compruebo</strong> multiplicando los factores para ver si regreso a la expresión original.</li>
    </ol>

    <p><strong>Resumen rápido:</strong></p>
    <table border="1" cellpadding="6" cellspacing="0">
        <tr><th>Términos</th><th>Pregunta clave</th><th>Caso</th></tr>
        <tr><td>Cualquiera</td><td>¿Hay una parte común en todos los términos?</td><td>Factor común</td></tr>
        <tr><td>2</td><td>¿Resta de cuadrados perfectos?</td><td>Diferencia de cuadrados</td></tr>
        <tr><td>2</td><td>¿Dos cubos perfectos?</td><td>Suma o diferencia de cubos</td></tr>
        <tr><td>3</td><td>¿Cumple el doble producto?</td><td>Trinomio cuadrado perfecto</td></tr>
        <tr><td>3</td><td>¿Coeficiente de x<sup>2</sup> igual a 1?</td><td>x<sup>2</sup> + bx + c</td></tr>
        <tr><td>3</td><td>¿Coeficiente de x<sup>2</sup> distinto de 1?</td><td>ax<sup>2</sup> + bx + c (aspa simple)</td></tr>
    </table>

    <p><strong>Ejemplo completo:</strong> 2x<sup>3</sup> + 16</p>
    <ol>
        <li>Factor común: 2 → 2(x<sup>3</sup> + 8).</li>
        <li>Dentro del paréntesis hay 2 términos y son cubos (x<sup>3</sup> y 2<sup>3</sup>) → suma de cubos.</li>
        <li>2x<sup>3</sup> + 16 = 2(x + 2)(x<sup>2</sup> − 2x + 4).</li>
        <li>El trinomio x<sup>2</sup> − 2x + 4 ya no se puede factorizar más.</li>
    </ol>
    <p><strong>Comprobación:</strong> (x + 2)(x<sup>2</sup> − 2x + 4) = x<sup>3</sup> − 2x<sup>2</sup> + 4x + 2x<sup>2</sup> − 4x + 8 = x<sup>3</sup> + 8, y al multiplicar por 2 queda 2x<sup>3</sup> + 16 ✓</p>
</section>`;
