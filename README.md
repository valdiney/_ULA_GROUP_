<h1> Introdução básica a algoritmos  </h1>

<p>
	Os algoritmos são descritos em uma linguagem chamada pseudocódigo, este nome é uma alusão a posterior implementação em uma linguagem de programação, ou seja, quando formos programar em uma linguagem, por exemplo C, estaremos gerando códigos C. Por isso os algoritmos são independentes das linguagens de programação. Você pode usar relativamente o mesmo algoritmo em qualquer linguagem.
</p>

<h3> Regras para construção de Algoritmos: </h3>

<p>
	Para escrevermos um algoritmo temos que descrever a sequência de instruções, de maneira simples e objetiva. Para isso utilizaremos algumas técnicas:
</p>

<ul>
	<li> Usar somente um verbo por frase </li>
	<li> Imaginar que você está desenvolvendo um algoritmo para pessoas que não trabalham com informática </li>
	<li> Usar frases curtas, simples e ser objetivo </li>
	<li> Procurar usar palavras que não tenham sentido Dúbio ( Indefinível, que não se pode explicar bem ou definir. </li>
</ul>

<h3> Fases: </h3>

<p>
	Vimos que algoritmo é uma sequencia lógica de instruções que podem ser executadas. É importante ressaltar que qualquer tarefa que siga determinado padrão pode ser descrita por um algoritmo, como por exemplo: Como fazer arroz doce.
  Calcular o saldo financeiro de um estoque: Para montar o algoritmo precisamos em primeiro passo dividir o problema apresentado em três fases fundamentais. <b>( Entrada | Processamento | Saída )</b>
    
</p>

<p>Onde temos:</p>

<ul>
	<li> <b> Entrada: </b>  São os dados de entrada do algoritmo. </li> 
    <li> <b> Processamento: </b> São os procedimentos utilizados para chegar ao resultado final </li>
    <li> <b> Saída: </b> São os dados já processados </li>

</ul>

<h3> Exemplo de um algoritmo: </h3>

<p>
  Vamos imaginar ás seguintes situações: Calcularemos a média final dos alunos da 3ª Série. Os alunos realizarão quatro provas:
  nota1, nota2, nota3, nota4. Onde média final = ( nota1, nota2, nota3, nota4 ) / 4

</p>

<p>
   Então para montarmos o algoritmo proposto, temos que nos fazer-mos três perguntas:
</p>

<ul>
  <li> <b> Quais são os dados de entrada? </b> </li>
  <li> <b> Resposta: </b> nota1, nota2, nota3, nota4. </li>
  <li> <b> Qual será o processamento a ser utilizado? </b> </li>
  <li> <b> Resposta: </b> O procedimento será somar todos os dados de entrada e dividi-los por 4 (quatro) </li>
  <li> <b> Quais os dados de saída? </b> </li>
  <li> <b> Resposta: </b> O resultado do processamento, ou seja, a média final </li>
</ul>

<b> Um exemplo na linguagem C </b>

```c
#include<stdio.h>
#include<stdlib.h>

  int main() {
   
      float nota1 = 3.3; nota2 = 5; nota3 = 4.1; nota4 = 0.9;
      float media = ( nota1 + nota2 + nota3 + nota4 ) / 4;
      printf("%f", media);

  } //end main...

```

<b> Segundo exemplo em linguagem C </b>

```c

#include<stdio.h>
#include<stdlib.h>
#define quantidade 4

int main() {

  float vetor[ quantidade ], media = 0;
  int cont = 0;

   for ( cont = 0; cont < quantidade; cont++ ) {
      printf("Digite aqui as notas: ");
      scanf("%f", &vetor[ cont ]);
      media += ( vetor[ cont ] ) / 4;
   }

   printf("media %2.f: ", media);
   system("pause");

} // end main...

```

<p>
  Mesmo que os códigos do primeiro exemplo sejam bem diferentes do segundo, ambos fazem a mesma tarefa que consiste em calcular a média de quatro provas. Realmente o segundo exemplo está utilizando técnicas um pouco mais inteligentes do que o primeiro. Ele usa vetor, controle de repetição, constante e permite que o usuário digite suas notas sem ter contato algum com os códigos da aplicação.
</p>

<p>
  Como eu havia descrito acima, um algoritmo pode ser implementado em qualquer linguagem de programação, logo abaixo, um exemplo do mesmo algoritmo de calcular a média, desta vez sendo usado na linguagem JavaScript.
  Reparem que basicamente o que muda é o sistema léxico, ou seja, O conjunto de palavras que compõem a linguagem, porem a lógica continua sendo a mesma.
</p>

<b> Exemplo em Javascript </b>

```javascript

  
window.onload = function() {

 const quantidade = 4;
 var vetor = [ quantidade ], entrada, cont, media = 0;

 for ( cont = 0; cont < quantidade; cont++ ) {
    entrada = Number( prompt('Digite aqui as notas') );
    vetor[ cont ] = entrada;
    media += ( vetor[ cont ] ) / 4;
 }

 console.log( media );

} // end...


```
<b> Exemplo em C# </b>

```c#

static void Main(string[] args)
        {
            int numero, media = 0, soma = 0, cont;
            const int quantidade = 4;
            int[] vetor = new int[ quantidade ];

            for (cont = 0; cont < quantidade; cont++)
            {
                Console.WriteLine("Digite aqui os números:");
                numero = int.Parse(Console.ReadLine());
                vetor[cont] = numero;

                soma += vetor[cont];
                media = soma / quantidade;
            }

            Console.WriteLine(media);
            Console.ReadKey();
        }


```
<p> 
  e assim prosseguimos tendo como base principal o algoritmo, já a linguagem, essa é escolhida seguindo outros fatores, como: gosto, ou mais indicado, característica do projeto. 
</p>
