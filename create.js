// aqui vou criar tudo o que peguei dos botoes 

botaoRegistrarAluno.addEventListener("click", function(event) {
    event.preventDefault();
    let aluno = obtemAlunoDoFormulario(formularioAlunos);
    alert(aluno.nif);
    alert(aluno.telemovel);
    montaTr(aluno);
    formularioAlunos.reset();
})


function obtemAlunoDoFormulario(formularioAlunos) {
    let aluno = {
        nome: formularioAlunos.name.value,
        nif: formularioAlunos.nif.value,
        telemovel: formularioAlunos.telemovel.value
    }
    return aluno;
}

function montaTr(aluno) {
    let alunoTr = document.createElement("Tr");
    alunoTr.classList.add("aluno");

        let alunoTh = document.createElement("th");
        alunoTh.classList.add("name");
        alunoTh.setAttribute("scope", "row");

        let niftd = montaTd("nif", aluno.nif);
        let telemovel = montaTd("tel", aluno.telemovel);
        let 

}