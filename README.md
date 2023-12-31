# CONCEITO PADRÃO MVC JAVASCRIPT:  👩🏻‍💻 <h1>


![img sobre funcionamento do mvc](https://github.com/GiselePorto/mvc/assets/132604471/93b3b114-4071-4a63-9269-37a606e19066)


<hr>

  A implementação de cada uma das camadas no MVC proporciona aos desenvolvedores uma manutenção mais fácil e o possível reaproveitamento de classes e partes do projeto em projetos futuros.
 o conceito principal do modelo MVC é utilizar uma solução já definida para separar partes distintas do projeto reduzindo suas dependências ao máximo. 
  
## Quais papéis de cada camada? 


● Model:  A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação.

● View : A view é responsável pela interface que será apresentada, mostrando as informações do model para o usuário.

● Controller :  É a camada de controle, responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa.
 
 **Algumas vantagens:**

* Aumento de produtividade;

* Uniformidade na estrutura do software;
 
* Redução de complexidade no código;

* As aplicações ficam mais fácies de manter;

* Facilita a documentação;

* Estabelece um vocabulário comum de projeto entre desenvolvedores;

* Permite a reutilização de módulos do sistema em outros sistemas;

* É considerada uma boa prática utilizar um conjunto de padrões para resolver problemas maiores que, sozinhos, não conseguiriam;

* Ajuda a construir softwares confiáveis com arquiteturas testadas;
Reduz o tempo de desenvolvimento de um projeto.

 <hr>

# CONCEITO FRAMEWORK JAVASCRIPT: 🖱️ <h2>
![img framework colorida](https://github.com/GiselePorto/mvc/assets/132604471/b6b548f3-5ae4-4f1d-bedb-a448f043e54c)

<hr>

 O framework nada mais é do que uma ferramenta que vai te ajudar a ter como único objetivo focar em desenvolver o projeto, não em detalhes de configurações. o framework trouxe a prática de evitar que tenhamos que fazer tarefas repetitivas, automatizando parte do trabalho. Pensando numa situação de desenvolvimento, se precisarmos criar um formulário de cadastro de usuário, ele sempre vai requerer algum tipo de validação como email e senha. O framework já terá essa validação pronta para ser utilizada.
 <br> <br> 
 Framework é um conjunto de bibliotecas, que abordam funcionalidades, e estruturas, para o desenvolvimento de aplicações, a fim de fornecer soluções para um mesmo domínio de problema, permitindo a reutilização do seu código.
 
 <br> <br> 
=======
 <br> 

 *Um Framework possui duas partes fundamentais:*

**Hot-Spots** –> são as partes específicas de sistemas individuais, projetados para serem genéricos, os quais podem ser adaptados às necessidades da aplicação.

**Frozen-Spots** -> definem a arquitetura geral de um sistema de software, seus componentes básicos e os relacionamentos entre eles, imutáveis em todas as instanciações do Framework.

 **Algumas vantagens:**

 ● Agiliza nosso trabalho com seus padrões;

 ● Comunidade de pessoas programadoras são responsáveis pelo desenvolvimento dos frameworks, por isso, é mais seguro;

 ● Padrão de código mais limpo e claro para fácil entedimento.

 **Desvantagens:**

 ● Problemas de configurações, o que demanda tempo para a manutenção;

 ● Conforme as dependências são inseridas no projeto, muitas configurações são baixadas sem necessidade;

 ●  Pode ser uma dificuldade caso você não consiga fornecer as dependências diretamente no código do próprio teste.

 ## Quais frameworks utilizamos em cada linguagem: 

|  JavaScript 	|  CSS 	|  PHP 	|  Java 	| Phyton  	|
|---	|--:	|---	|---	|---	|
| Angular  	| Bootstrap  	| Laravel  |  Spring Framework 	|  Django 	|
|  Vue.js 	|   	|   	|   	| Symfony  |
|  React JS 	|   	|   	|   	|   	|

<hr>

# CONCEITO BIBLIOTECA JAVASCRIPT: 📚 <h2>
![img Acessando biblioteca código](https://github.com/GiselePorto/mvc/assets/132604471/5af138df-8ffa-4c31-96ff-917b72bcd204)

<hr>

 Como programadores, devemos reutilizar códigos existentes sempre que pudermos, assim não perdemos tempo escrevendo códigos que outro programador já escreveu.
Em JavaScript, fazemos isso usando uma biblioteca.
<br> <br>

Uma biblioteca é um arquivo de JavaScript que contém um monte de funções, e essas funções realizam alguma tarefa útil para sua página web.
Vamos imaginar que precisamos calcular quantos dias existem entre duas datas utilizando JavaScript. <br> Contudo, no momento não há uma funcionalidade da linguagem que faça este cálculo para nós. Então teremos que criar uma função em que a gente passe duas datas e ela nos retornará a quantidade de dias. 

 Em conclusão, podemos dizer que uma biblioteca (do inglês library, não confundir com livraria que em inglês é book store) é uma coleção de códigos voltados a resolver um determinado tipo de problema.


## Exemplos de biblioteca JavaScript: 

* **Moment.js**: Biblioteca para converter, validar, manipular e exibir datas e horários;

* **Chart.js**: Biblioteca para a criação de gráficos;

* **Voca**: Biblioteca para trabalhar com Strings;

* **mo.js**: Biblioteca para criar animações incríveis com SVG; 

* **React**: Biblioteca para criar interfaces de usuário;

<hr>

# FRAMEWORK VS BIBLIOTECA, QUAL O MELHOR? 📊 <h2>
![biblioteca e framework](https://github.com/GiselePorto/mvc/assets/132604471/e3f07d8c-81fc-4723-b4a6-2eadc2f420ce)

<hr>


Podemos concluir que enquanto na biblioteca nós mesmos criamos a base e o fluxo, no framework já temos toda a estrutura pronta para utilizarmos e seguirmos. Mas isso não significa necessariamente que um é melhor do que o outro. São ferramentas diferentes para propósitos diferentes.

Ao passo que no Angular nós já temos toda a estrutura pronta, nos poupando desse trabalho, teremos menos liberdade para certas escolhas. Em contrapartida, no React temos que definir coisas comuns como arquitetura e fluxo, mas teremos mais liberdade de escolher cada biblioteca responsável por cada funcionalidade em nossa aplicação.

<hr>

# CONEXÃO COM BANCO DE DADOS: NOSQL-MONGODB 📊 <h2>

![acessando banco de dados após erros](https://github.com/GiselePorto/mvc/assets/132604471/4e733a98-050f-4fb9-afa6-d9deb12abe37)
<hr>

* Acessar MongoDB Atlas e fazer cadastro free.
* Clicar em connect, copiar e colar informações (menor comando de git, maior colar no file do vscode).
* Verificar se todos os apis necessários e usados estão baixados.
* Colocar no terminal ***" npm run start "*** e ver se o servidor rodará.

* PS: se der erro em questão de modules, vá ao package.json e verifique o type. Se seus files utilizarem required será "commonjs",
  se for **import x export** será "module".

  <hr>



## Links para saber mais sobre o conteúdo: 

**Conceito MVC JavaScript:**
 *  [*Introdução ao padrão MVC DevMedia*](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
 * 	[*O que é MVC? TreinaWeb*](https://www.treinaweb.com.br/blog/o-que-e-mvc)
 *  [*Vídeo : canal Código FonteTV*](https://youtu.be/jyTNhT67ZyY)

**Conceito Framework:**
  *  [*O que é um Framework? Balta.io*](https://balta.io/blog/o-que-e-um-framework)
  *  [*Para que serve Framework? Alura*](https://www.alura.com.br/artigos/framework-o-que-e-pra-que-serve-essa-ferramenta?gclid=EAIaIQobChMIyP2rk-7U_wIVFkJIAB06QgP7EAAYASAAEgJd1PD_BwE)
  
     
**Conceito biblioteca JS:**
  *   [*O que é biblioteca JS? - KhanAcademy*](https://pt.khanacademy.org/computing/computer-programming/html-css-js/using-js-libraries-in-your-webpage/a/whats-a-js-library)
  *   [*Difereça entre Biblioteca e Framework - TreinaWeb*](https://www.treinaweb.com.br/blog/qual-a-diferenca-entre-framework-e-biblioteca)

**Sobre MongoDB**

*   [*O que é NoSQL?*](https://blog.revelo.com.br/banco-de-dados-nosql)
*   [*Site de cadastro MongoDB*](https://www.mongodb.com/atlas/database)


<hr>



![Gif legal meme](https://github.com/GiselePorto/mvc/assets/132604471/f137e9bd-8a2c-44c0-9691-50bafdd82a81)


