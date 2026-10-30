const contenidoEntrada = `
<section>
    <h2>Ecuaciones de Primer Grado</h2>
    <p>Una ecuación de primer grado (o lineal) es una igualdad con una incógnita elevada a la potencia 1, por ejemplo 3x + 5 = 20. Resolverla significa encontrar el valor de la incógnita que hace verdadera la igualdad.</p>

    <h3>Procedimiento general</h3>
    <p>Este orden funciona para cualquier ecuación de primer grado:</p>
    <ol>
        <li><strong>Quito los signos de agrupación</strong> (paréntesis, corchetes) multiplicando con la propiedad distributiva. Si hay varios, empiezo por los de adentro.</li>
        <li><strong>Quito los denominadores</strong> multiplicando ambos lados por el mínimo común múltiplo (mcm) de todos los denominadores.</li>
        <li><strong>Transpongo términos:</strong> paso las incógnitas a un lado y los números al otro. Al cruzar el igual, cada término cambia de signo.</li>
        <li><strong>Reduzco términos semejantes</strong> en cada lado.</li>
        <li><strong>Despejo la incógnita</strong> dividiendo entre su coeficiente.</li>
        <li><strong>Compruebo</strong> sustituyendo el resultado en la ecuación original: ambos lados deben valer lo mismo.</li>
    </ol>
    <p>No siempre se usan todos los pasos: si no hay paréntesis ni fracciones, empiezo directo en el paso 3.</p>

    <h3>1. Ecuación entera</h3>
    <p><strong>Cómo reconocerla:</strong> solo tiene números enteros, sin paréntesis ni denominadores.</p>
    <p><strong>Ejemplo:</strong> 7x − 12 = 3x + 20</p>
    <ol>
        <li>Paso las x a la izquierda y los números a la derecha: 7x − 3x = 20 + 12</li>
        <li>Reduzco: 4x = 32</li>
        <li>Despejo: x = 32 ÷ 4 = 8</li>
    </ol>
    <p><strong>Comprobación:</strong> lado izquierdo: 7(8) − 12 = 56 − 12 = 44. Lado derecho: 3(8) + 20 = 24 + 20 = 44 ✓</p>

    <h3>2. Ecuación fraccionaria</h3>
    <p><strong>Cómo reconocerla:</strong> la incógnita aparece en fracciones o hay denominadores numéricos.</p>
    <p><strong>Ejemplo:</strong> <sup>x + 1</sup>&frasl;<sub>3</sub> − <sup>x − 2</sup>&frasl;<sub>4</sub> = 2</p>
    <ol>
        <li>El mcm de 3 y 4 es 12. Multiplico todo por 12: 4(x + 1) − 3(x − 2) = 24</li>
        <li>Distribuyo: 4x + 4 − 3x + 6 = 24</li>
        <li>Reduzco: x + 10 = 24</li>
        <li>Despejo: x = 24 − 10 = 14</li>
    </ol>
    <p><strong>Comprobación:</strong> <sup>14 + 1</sup>&frasl;<sub>3</sub> − <sup>14 − 2</sup>&frasl;<sub>4</sub> = <sup>15</sup>&frasl;<sub>3</sub> − <sup>12</sup>&frasl;<sub>4</sub> = 5 − 3 = 2 ✓</p>

    <h3>3. Ecuación con signos de agrupación</h3>
    <p><strong>Cómo reconocerla:</strong> tiene paréntesis, corchetes o llaves, a veces anidados.</p>
    <p><strong>Ejemplo:</strong> 5 − [2x − (3 − x)] = 2(x + 1) − 4</p>
    <ol>
        <li>Quito primero el paréntesis interior: 2x − (3 − x) = 2x − 3 + x = 3x − 3</li>
        <li>Ahora el corchete, que tiene un signo menos adelante: 5 − (3x − 3) = 5 − 3x + 3 = 8 − 3x</li>
        <li>Lado derecho: 2(x + 1) − 4 = 2x + 2 − 4 = 2x − 2</li>
        <li>La ecuación queda: 8 − 3x = 2x − 2</li>
        <li>Transpongo: −3x − 2x = −2 − 8, es decir, −5x = −10</li>
        <li>Despejo: x = −10 ÷ (−5) = 2</li>
    </ol>
    <p><strong>Comprobación:</strong> lado izquierdo: 5 − [2(2) − (3 − 2)] = 5 − [4 − 1] = 5 − 3 = 2. Lado derecho: 2(2 + 1) − 4 = 6 − 4 = 2 ✓</p>

    <h3>4. Ecuación con literales</h3>
    <p><strong>Cómo reconocerla:</strong> además de la incógnita (x), tiene otras letras que se tratan como números conocidos (a, b, c...). La solución queda en términos de esas letras.</p>
    <p><strong>Ejemplo:</strong> 3(x − a) = 2x + 5a</p>
    <ol>
        <li>Distribuyo: 3x − 3a = 2x + 5a</li>
        <li>Paso las x a la izquierda y los términos con a a la derecha: 3x − 2x = 5a + 3a</li>
        <li>Reduzco y despejo: x = 8a</li>
    </ol>
    <p><strong>Comprobación:</strong> sustituyo x = 8a. Lado izquierdo: 3(8a − a) = 3(7a) = 21a. Lado derecho: 2(8a) + 5a = 16a + 5a = 21a ✓</p>

    <h3>Problema de planteamiento propio</h3>
    <p><strong>Enunciado:</strong> estoy eligiendo un servicio de almacenamiento en la nube para guardar los proyectos de mis clases de programación. El plan A cobra una cuota fija de $60 al mes más $0.50 por cada GB. El plan B cobra $20 al mes más $1.50 por cada GB. ¿Con cuántos GB cuestan lo mismo los dos planes?</p>
    <ol>
        <li><strong>Incógnita:</strong> sea g la cantidad de GB almacenados en el mes.</li>
        <li><strong>Traducción:</strong>
            <ul>
                <li>Costo del plan A: 60 + 0.50g</li>
                <li>Costo del plan B: 20 + 1.50g</li>
                <li>"Cuestan lo mismo" significa que los dos costos son iguales.</li>
            </ul>
        </li>
        <li><strong>Ecuación:</strong> 60 + 0.50g = 20 + 1.50g</li>
        <li><strong>Solución:</strong>
            <ul>
                <li>Transpongo: 60 − 20 = 1.50g − 0.50g</li>
                <li>Reduzco: 40 = g</li>
                <li>g = 40 GB</li>
            </ul>
        </li>
        <li><strong>Validación contra el enunciado:</strong> con 40 GB, el plan A cuesta 60 + 0.50(40) = 60 + 20 = $80 y el plan B cuesta 20 + 1.50(40) = 20 + 60 = $80. Los dos cuestan lo mismo ✓. Además tiene sentido: con 10 GB el plan B es más barato ($35 contra $65) y con 100 GB el plan A es más barato ($110 contra $170).</li>
    </ol>
    <p><strong>Respuesta:</strong> los planes cuestan lo mismo con 40 GB ($80). Si uso menos de 40 GB me conviene el plan B, y si uso más, el plan A.</p>
</section>`;