var app = angular.module('questioned', []);
/*
    a função recebe um parâmetro chamado $scope. O angular
    preenche o valor dessa variável de acordo com o seu nome (é o que
    chamamos de injeção de dependências).
*/
app.controller('QuestionedController', function($scope){
    //declaração de variáveis
    $scope.exibir = true;

    $scope.dados = {};
    $scope.perguntas = [
    {
      titulo: "História - Revolução Francesa",
       pergunta: `Alguém sabe resolver??? Urgente
                            (UNICAMP) Em sua obra Os sans-culottes de Paris, o
historiador Albert Soboul escreveu: “Os cidadãos de
aparência pobre e que em outros tempos não se atreveriam
a apresentar-se em lugares reservados a pessoas elegantes
passeavam agora nos mesmos locais que os ricos, de cabeça
erguida.”
(Citado por Eric Hobsbawm, A Era das Revoluções, São
Paulo, Paz e Terra, 1976, p.231.)
(nota: sans-culottes significa “sem culotes”, “sem-calças”)
a) Caracterize o movimento dos sans-culottes na Revolução
Francesa.
b) Compare o movimento dos sans-culottes com o
movimento dos sem-terra no Brasil.`, 
data: "01/02/2018 11:25:15"
}];

    //atribuição de funções ao $scope
    $scope.inserirPergunta = function()
    {
      var pergunta = {
          titulo: $scope.dados.titulo,
          pergunta: $scope.dados.pergunta,
          data: new Date().toLocaleString(), 
          resposta: ""
      };

      if(pergunta.titulo != "" && pergunta.pergunta){
        $scope.perguntas.push(pergunta);
        $scope.dados.titulo = "";
        $scope.dados.pergunta = "";
    }
    };

        //atribuição de funções ao $scope
    $scope.inserirResposta = function(pergunta)
    {
      pergunta.resposta = $scope.dados.resposta;
      $scope.dados.resposta = "";
      $scope.exibir= false;
    };

    // $scope.fazerTarefa = function(tarefa)
    // {
    //   tarefa.feita = true;
    // };

    // $scope.limparperguntas = function()
    // {
    //   //Remove todas as perguntas
    //   $scope.perguntas = [];
    // };

    // $scope.apagar = function(tarefa)
    // {
    //   //pega o index da tarefa
    //   var index = $scope.perguntas.indexOf(tarefa);
    //    //Remove a tarefa selecionada
    //   $scope.perguntas.splice(index, 1 );
    // };

});
