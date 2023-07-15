const calcularButton = document.getElementById('calcular');
const tipoTrianguloElement = document.getElementById('tipoTriangulo');
const perimetro = document.getElementById('perimetro');
const area = document.getElementById('area');

calcularButton.addEventListener('click', () => {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);

    if (validarMedidas(ladoA, ladoB, ladoC)) {
        const tipoTriangulo = classificarTriangulo(ladoA, ladoB, ladoC);
        const perimetro2 = ladoA+ladoB+ladoC;
        const area2 = ladoA*ladoB/2;
        tipoTrianguloElement.textContent = `O triângulo é ${tipoTriangulo}`;
        perimetro.textContent = `O perímetro é igual a ${perimetro2}`
        area.textContent = `A aréa é igual a ${area2}`
        tipoTrianguloElement.style.display = 'block';

        // Exibir a seção de resultado
        document.getElementById('resultado').style.display = 'block';
    } else {
        tipoTrianguloElement.textContent = 'Medidas inválidas. Verifique os valores digitados.';
        tipoTrianguloElement.style.display = 'block';
        document.getElementById('resultado').style.display = 'block';
    }
});

function validarMedidas(ladoA, ladoB, ladoC) {
    return ladoA > 0 && ladoB > 0 && ladoC > 0;
}

function classificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'equilátero';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return 'isósceles';
    } else {
        return 'escaleno';
    }
}
