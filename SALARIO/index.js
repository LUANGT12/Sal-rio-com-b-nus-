 
 function calcular() {

 var nome_funcionario = document.getElementById("nome_funcionario");
 var salario_fixo = document.getElementById("salario_fixo");
 var total_vendido = document.getElementById("total_vendido");

 if (nome_funcionario.value.length == 0 || salario_fixo == 0 || total_vendido == 0) {
    window.alert('[ERRO!] Faltam dados!'); 
  }
 }
