    const form = document.getElementById('form-agenda')
    let linhas = '';
    form.addEventListener('submit' , function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('inputNome')
    const inputTelContato = document.getElementById('inputTel')

    


    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;


    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;








})

