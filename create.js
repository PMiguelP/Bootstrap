botaoRegistrarAluno.addEventListener("click", function (event) {
  event.preventDefault();
  let aluno = obtemAlunoDoFormulario(formularioAlunos);
  alert(aluno.nome);
  alert(aluno.nif);
  alert(aluno.telemovel);
  montaTr(aluno);
  formularioAlunos.reset();
});

function obtemAlunoDoFormulario(formularioAlunos) {
  let aluno = {
    nome: formularioAlunos.name.value,
    nif: formularioAlunos.nif.value,
    telemovel: formularioAlunos.telemovel.value,
  };
  return aluno;
}

function montaTr(aluno) {
  let alunoTr = document.createElement("Tr");
  alunoTr.classList.add("aluno");

  let alunoTd = document.createElement("Td");
  alunoTd.classList.add("teste");
}

function montaTd(tabela) {
  let alunoTd = document.createElement("Td");
  alunoTd.classList.add("teste");

  let niftd = montaTd("nif", aluno.nif);
  let telemovel = montaTd("tel", aluno.telemovel);
  let nome = montaTd("name", aluno.nome);
}

function montaTh(name) {
  let alunoTh = document.createElement("Th");
  alunoTh.classList.add("name");
  alunoTh.setAttribute("scope", "row");
}
function resetardados(canelarRegistro) {
  x;
}
