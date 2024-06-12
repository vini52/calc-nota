function calcularNota() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let trabalho = parseFloat(document.getElementById('trabalho').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(trabalho)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira todas as notas.";
        return;
    }

    let notaFinal = (nota1 * 0.35) + (nota2 * 0.35) + (trabalho * 0.3);

    if (notaFinal >= 6) {
        document.getElementById('resultado').innerHTML = `A nota final é: ${notaFinal.toFixed(2)}. Você passou 🤙`;
    } else {
        document.getElementById('resultado').innerHTML = `Nota parcial: ${notaFinal.toFixed(2)}. Você precisa de mais: ${(6 - notaFinal).toFixed(2)}`;
        document.getElementById('pre_p3_group').style.display = 'block';
        document.getElementById('recalcular').style.display = 'block';
    }
}

function calcularNotaFinal() {
    let notaFinal = parseFloat(document.getElementById('resultado').innerText.match(/Nota parcial: (\d+\.\d+)/)[1]);
    let preP3 = parseFloat(document.getElementById('pre_p3').value);

    if (isNaN(preP3)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira a nota da pré P3.";
        return;
    }

    notaFinal += preP3;

    if (notaFinal >= 6) {
        document.getElementById('resultado').innerHTML = `Passou 👋`;
    } else {
        document.getElementById('resultado').innerHTML = `Nota parcial: ${notaFinal.toFixed(2)}`;
        document.getElementById('nota3_group').style.display = 'block';
        document.getElementById('recalcular').onclick = calcularNotaFinal3;
    }
}

function calcularNotaFinal3() {
    let notaFinal = parseFloat(document.getElementById('resultado').innerText.match(/Nota parcial: (\d+\.\d+)/)[1]);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota3)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira a nota 3.";
        return;
    }

    notaFinal = (notaFinal * 0.5) + (nota3 * 0.5);

    if (notaFinal >= 6) {
        document.getElementById('resultado').innerHTML = `Passou 👋`;
    } else {
        document.getElementById('resultado').innerHTML = `Sua nota foi: ${notaFinal.toFixed(2)} e você infelizmente não passou 👎`;
    }
}
