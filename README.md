Caixas de Diálogo
- [x] prompt
- [x] alert
- [x] confirm

Temporizadores
- [x] setInterval
- [x] setTimeout
- [x] Funções
- [ ] Função anônima com argumento
- [x] Função anônima sem argumento
- [x] Função anônima com retorno
- [x] Função auto-executável - não será aceita a mesma do Module Pattern
- [x] Função com nome
- [x] Função aninhada/local - declarar uma função dentro de outra
- [ ] Passagem de uma função como parâmetro para outra função - ambas as funções precisam ser implementadas pelo aluno
- [x] Função Flecha - Arrow Function

Eventos
- [x] Evento de carregamento do documento - onload
- [ ] Evento de movimento do mouse
- [ ] Evento de teclado - usar charCode ou keyCode
- [x] Eventos de formulário - usar onfocus e onblur
- [ ] Imprimir alguma propriedade/atributo do objeto event recebido como parâmetro na função tratadora de evento

Acesso aos elementos DOM do HTML
- [ ] Via referência DOM pelo id do elemento HTML - acesso sem uso do getElementByID ou querySelector, o id do objeto DOM é o próprio nome da variável
- [x] Via getElementByID()
- [ ] Via getElementsByName()
- [ ] Via getElementsByTagName()
- [ ] Via seletores CSS usados na função querySelector() ou querySelectorAll()

Tratadores de Evento
- [ ] Especificar o tratador de evento inline - registro do evento no HTML
- [ ] Especificar o tratador de evento no modo tradicional - registro do evento no JS com prefixo on via atributo de um objeto DOM
- [x] Especificar o tratador de evento com a função addEventListener - registro do evento no JS
- [ ] Usar o operador this em funções tratadoras de eventos.

Objetos Nativos
- [ ] Usar pelo menos 3 métodos de manipulação de array
- [ ] Usar laço de repetição (for..in ou for..of ou forEach)
- [ ] Usar pelo menos 3 métodos para manipulação de string
- [x] String Template - a String com crase e ${}
- [x] Manipulação do CSS de forma nativa via atributo style e classList

Objetos
- [x] Criar objeto usando função construtora ou notação literal
- [x] (Obrigatório) Criar objetos a partir da definição de classes do ES6 - a classe precisa ser definida em arquivo separado, sendo o nome do arquivo em letras minúsculas no estilo dashed-case e nome da - [ ] classe em UpperCamelCase
- [ ] Usar herança prototipal nativa ou herança de classes do ES6

\\ prova 1

Qualidade do código
- [ ] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
- [x] Usar um Lint - corrigir todos os problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [x] Usar strict mode - em todos os arquivos
- [ ] Usar Module Pattern com função auto-executável ou o conceito de módulo do ES6 com operadores export e import
- [x] Usar pasta assets e subpastas resources e libraries para organizar o código
- [x] Usar let ou const ao invés de var
- [x] Nomes de arquivos HTML, JS e CSS minúsculos e separados por hífen (dashed-case)

Formulário
- [x] Validação de formulário com onsubmit usando os métodos tradicionais - é a fase executada após a validação via HTML5
- [x] Validação de formulário com HTML5 API
- [x] Customizar as mensagens nos balões de mensagem
- [x] Usar os atributos de validação dos inputs - required ou type="email" ou outros
- [x] Usar expressões regulares para validação - usar no atributo pattern do respectivo input
- [x] Ler e escrever em elementos input com a propriedade value
- [x] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [ ] Manipulação de elemento de listagem, como checkbox, radio ou select
- [ ] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

\\ prova 2

jQuery
- [x] Uso de seletores CSS - id, classe e tag
- [ ] Uso de seletores CSS hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [x] Uso de seletores hierárquicos dinâmicos, ou seja, via métodos do JQuery - parent/children/next
- [x] Efeitos fade ou slide
- [ ] Especificar o tratador de algum evento para um elemento DOM via jQuery - deve ser um evento diferente do ready
- [ ] Manipulação do CSS via função css() e addClass() ou removeClass()
- [x] Manipulação do conteúdo de um input e div usando jQuery
- [x] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)

Web Storage - LocalStorage ou SessionStorage
- [x] Leitura e escrita de dados simples - dados primivos como string, number, boolean
- [x] Leitura e escrita de JSON - dado transformado a partir de um objeto
- [ ] Criar e guardar um dado em um Cookie

Requisições assíncronas
- [ ] Requisições AJAX para uma implementação funcional do backend em ExpressJS na plataforma Node
- [x] (Obrigatório) Requisições AJAX para uma API Fake - JSON Server 
- [ ] Requisições AJAX para uma API Rest pública qualquer (Busca CEP API ou IBGE API ou outra).

\\ prova 3