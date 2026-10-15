// script.js — Neguebas Adventure

/* ================================================================
   1. PERGUNTAS (nível 1 = fácil, 2 = médio, 3 = difícil)
   q(nível, pergunta, "alt1|alt2|alt3|alt4", posição da certa (de 0), explicação)
   ================================================================ */

const q = (nivel, texto, opcoes, correta, explicacao) => ({ nivel, tipo: "Quiz", texto, opcoes: opcoes.split("|"), correta, explicacao });
const vf = (nivel, texto, verdadeiro, explicacao) => ({ nivel, tipo: "Verdadeiro ou Falso", texto, opcoes: ["Verdadeiro", "Falso"], correta: verdadeiro ? 0 : 1, explicacao });

const BANCO = {
  matematica: [
    q(1, "Quanto é 345 + 278?", "613|623|633|723", 1, "345 + 278 = 623. Some unidades, dezenas e centenas, lembrando do 'vai um'."),
    q(1, "Quanto é 12 × 6?", "62|66|68|72", 3, "10 × 6 = 60 e 2 × 6 = 12. Então 60 + 12 = 72."),
    q(1, "No número 3.527, qual é o valor do algarismo 5?", "5|50|500|5.000", 2, "O 5 está na ordem das centenas, então vale 500."),
    q(1, "Quanto é 144 ÷ 12?", "10|11|12|14", 2, "12 × 12 = 144, então 144 ÷ 12 = 12."),
    q(1, "Quanto é 1.000 − 356?", "644|654|744|634", 0, "1.000 − 356 = 644. Confira: 644 + 356 = 1.000."),
    q(1, "Quantos lados tem um hexágono?", "5|6|7|8", 1, "Hexágono é o polígono de 6 lados (hexa = seis)."),
    q(1, "Quanto é 7 × 8?", "54|56|63|64", 1, "7 × 8 = 56. Dica: 7 × 4 = 28 e 28 × 2 = 56."),
    vf(1, "O número 0,5 é igual a 1/2.", true, "0,5 é a metade de 1, ou seja, 1/2."),

    q(2, "Qual destes números é primo?", "15|21|27|17", 3, "17 só é divisível por 1 e por ele mesmo. Os outros têm mais divisores."),
    vf(2, "A fração 1/2 é igual a 2/4.", true, "Multiplicando 1 e 2 por 2, temos 2/4. São frações equivalentes."),
    q(2, "Qual fração é equivalente a 1/2?", "2/3|3/6|3/5|1/4", 1, "Dividindo 3 e 6 por 3, chegamos em 1/2."),
    q(2, "Quanto é 2,5 + 1,75?", "3,25|4,25|4,05|3,75", 1, "Alinhe as vírgulas: 2,50 + 1,75 = 4,25."),
    q(2, "Quanto vale 5 + 3 × 2?", "16|13|11|10", 2, "A multiplicação vem antes da adição: 3 × 2 = 6 e 5 + 6 = 11."),
    q(2, "Um quadrado tem lados de 5 cm. Qual é o perímetro?", "10 cm|15 cm|20 cm|25 cm", 2, "Perímetro é a soma dos lados: 5 + 5 + 5 + 5 = 20 cm."),
    q(2, "Um retângulo mede 6 cm por 4 cm. Qual é a área?", "10 cm²|20 cm²|24 cm²|28 cm²", 2, "Área = base × altura = 6 × 4 = 24 cm²."),
    vf(2, "O número 7 é divisor de 40.", false, "40 ÷ 7 não é exata (sobra resto), então 7 não é divisor de 40."),

    q(3, "Qual é o menor múltiplo comum (MMC) de 4 e 6?", "2|10|12|24", 2, "Múltiplos de 4: 4, 8, 12... Múltiplos de 6: 6, 12... O primeiro em comum é o 12."),
    q(3, "Qual é o maior divisor comum (MDC) de 12 e 18?", "2|3|6|9", 2, "Divisores de 12: 1, 2, 3, 4, 6, 12. Divisores de 18: 1, 2, 3, 6, 9, 18. O maior em comum é 6."),
    q(3, "Um retângulo mede 8 cm por 5 cm. Qual é o perímetro?", "13 cm|26 cm|40 cm|45 cm", 1, "8 + 5 + 8 + 5 = 26 cm. (40 seria a área, não o perímetro.)"),
    q(3, "Um quadrado tem lado de 9 cm. Qual é a área?", "18 cm²|36 cm²|72 cm²|81 cm²", 3, "Área = lado × lado = 9 × 9 = 81 cm²."),
    q(3, "Quanto é 1/2 + 1/4?", "2/6|2/4|3/4|1/6", 2, "1/2 = 2/4. Então 2/4 + 1/4 = 3/4."),
    q(3, "Quanto é (8 + 4) × 3 − 10?", "14|26|34|46", 1, "Parênteses primeiro: 12 × 3 = 36. Depois, 36 − 10 = 26."),
    vf(3, "Todo número primo é ímpar.", false, "O número 2 é primo e é par. Ele é o único primo par."),
    q(3, "Uma pizza foi cortada em 8 pedaços e 3 foram comidos. Que fração sobrou?", "3/8|5/8|3/5|5/3", 1, "Sobraram 8 − 3 = 5 pedaços de 8, ou seja, 5/8."),

    // Nível 4: desafios dos chefes
    q(4, "Quanto é 2³ × 3 + 12 ÷ 4?", "27|30|33|36", 0, "Potência primeiro: 2³ = 8. Depois multiplicação e divisão: 8 × 3 = 24 e 12 ÷ 4 = 3. Por fim, 24 + 3 = 27."),
    q(4, "Qual é o MMC de 6, 8 e 12?", "12|24|48|72", 1, "24 é múltiplo de 8 (8 × 3), de 6 (6 × 4) e de 12 (12 × 2), e é o menor número assim."),
    q(4, "Um terreno retangular mede 12 m por 7 m. Quantos metros de cerca são necessários para contorná-lo por completo?", "19 m|38 m|84 m|76 m", 1, "Perímetro = 2 × (12 + 7) = 38 m. O 84 seria a área, em m²."),
    q(4, "Maria comeu 2/5 de uma pizza e João comeu 1/5. Que fração da pizza sobrou?", "2/5|3/5|1/5|3/10", 0, "Comeram 2/5 + 1/5 = 3/5. Sobrou 5/5 − 3/5 = 2/5."),
    q(4, "Quanto é 0,6 + 3/4?", "1,35|0,95|1,25|1,05", 0, "3/4 = 0,75. Então 0,6 + 0,75 = 1,35."),
    q(4, "Qual destes números tem exatamente 6 divisores?", "11|12|15|16", 1, "12 tem os divisores 1, 2, 3, 4, 6 e 12 (6 no total). 16 tem 5, 15 tem 4 e 11 tem 2."),
    q(4, "Um trem saiu às 14h50 e chegou às 17h25. Quanto tempo durou a viagem?", "2h25min|2h35min|2h45min|3h35min", 1, "De 14h50 até 17h50 seriam 3h; como chegou 25 min antes, são 3h − 25min = 2h35min."),
    vf(4, "A fração 7/3 é maior que 2.", true, "2 = 6/3, e 7/3 é maior que 6/3. Por isso 7/3 é maior que 2 (2 inteiros e 1/3).")
  ],

  ciencias: [
    q(1, "Qual destes é um estado físico da matéria?", "Sólido|Quadrado|Azul|Pesado", 0, "Os estados físicos da matéria são sólido, líquido e gasoso."),
    q(1, "Qual estrela fornece luz e calor para a Terra?", "Lua|Sol|Marte|Júpiter", 1, "O Sol é a estrela do nosso Sistema Solar. A Lua e os planetas apenas refletem a luz dele."),
    q(1, "A água dentro de um copo está em qual estado físico?", "Sólido|Líquido|Gasoso|Pastoso", 1, "A água em temperatura ambiente é líquida: ela escorre e toma a forma do copo."),
    q(1, "Qual gás as plantas absorvem do ar para fazer fotossíntese?", "Oxigênio|Gás carbônico|Nitrogênio|Hélio", 1, "As plantas absorvem gás carbônico e liberam oxigênio na fotossíntese."),
    q(1, "Qual é a menor unidade que forma os seres vivos?", "Órgão|Tecido|Célula|Sistema", 2, "A célula é a unidade básica da vida."),

    q(2, "A passagem da água do estado líquido para o gasoso chama-se:", "Fusão|Solidificação|Evaporação|Condensação", 2, "Evaporação: a água líquida vira vapor ao receber calor."),
    q(2, "O movimento de rotação da Terra causa:", "As estações do ano|O dia e a noite|As fases da Lua|Os eclipses", 1, "A Terra gira em torno de si mesma em cerca de 24 horas, formando o dia e a noite."),
    q(2, "Qual destes é uma mistura homogênea?", "Água e óleo|Água com sal dissolvido|Água e areia|Granito", 1, "Na mistura homogênea vemos uma só fase. O sal dissolvido não aparece na água."),
    vf(2, "A Terra leva cerca de 365 dias para dar uma volta em torno do Sol.", true, "É o movimento de translação, que dura cerca de um ano."),
    q(2, "Qual é a camada mais externa e sólida da Terra, onde vivemos?", "Núcleo|Manto|Crosta|Magma", 2, "A crosta terrestre é a camada superficial e sólida do planeta."),

    q(3, "Qual método separa a areia misturada com água?", "Filtração|Imantação|Destilação|Catação", 0, "Na filtração, a água passa pelo filtro e a areia fica retida."),
    q(3, "Qual método separa pregos de ferro misturados com areia?", "Peneiração|Separação magnética|Evaporação|Filtração", 1, "O ímã atrai o ferro e deixa a areia."),
    q(3, "Qual é a principal causa das estações do ano?", "A distância da Terra ao Sol|A inclinação do eixo da Terra|As fases da Lua|A rotação da Terra", 1, "O eixo inclinado faz cada hemisfério receber mais ou menos luz solar ao longo do ano."),
    q(3, "Em uma célula, qual estrutura guarda o material genético (DNA)?", "Membrana|Núcleo|Citoplasma|Parede celular", 1, "O núcleo guarda o DNA e comanda as atividades da célula."),
    q(3, "Qual é a ordem correta dos níveis de organização do corpo?", "Célula, tecido, órgão, sistema|Órgão, célula, tecido, sistema|Tecido, órgão, célula, sistema|Sistema, órgão, tecido, célula", 0, "Células formam tecidos, tecidos formam órgãos e órgãos formam sistemas."),

    // Nível 4: desafios dos chefes
    q(4, "Uma mistura de areia, sal e água pode ser separada com quais processos, nesta ordem?", "Filtração e depois evaporação|Evaporação e depois filtração|Imantação e depois catação|Peneiração e depois imantação", 0, "A filtração retira a areia (sólido). Depois, a evaporação da água deixa o sal para trás."),
    q(4, "Em qual situação ocorre uma transformação química?", "Uma folha de papel queimando|Gelo derretendo|Sal dissolvido na água|Uma barra de chocolate sendo quebrada", 0, "Na queima surgem substâncias novas (cinzas e gases). Nas outras opções só mudam a forma ou o estado."),
    q(4, "Quanto tempo a Terra leva para girar em torno de si mesma e quanto leva para dar uma volta em torno do Sol?", "24 horas e 365 dias|365 dias e 24 horas|12 horas e 30 dias|24 horas e 30 dias", 0, "A rotação dura cerca de 24 horas (dia e noite). A translação dura cerca de 365 dias (um ano)."),
    q(4, "As fases da Lua acontecem principalmente porque:", "Vemos partes diferentes da face iluminada da Lua enquanto ela gira em torno da Terra|A sombra da Terra cobre a Lua|A Lua muda de tamanho|As nuvens escondem a Lua", 0, "Metade da Lua é sempre iluminada pelo Sol, mas vemos mais ou menos dessa metade conforme a posição dela. A sombra da Terra causa os eclipses, não as fases."),
    q(4, "Qual célula tem parede celular e cloroplastos e faz fotossíntese?", "Célula vegetal|Célula animal|Glóbulo vermelho|Neurônio", 0, "Só as células vegetais têm cloroplastos, onde acontece a fotossíntese, e parede celular."),
    vf(4, "Um objeto de ferro parece mais frio ao toque que um de madeira no mesmo ambiente porque o ferro conduz melhor o calor.", true, "Os dois têm a mesma temperatura, mas o ferro é bom condutor e retira calor da sua mão mais rápido."),
    q(4, "Qual processo pode transformar água do mar em água potável, deixando o sal para trás?", "Destilação|Filtração simples|Imantação|Peneiração", 0, "Na destilação a água evapora e depois condensa de novo, e o sal fica no recipiente.")
  ],

  geografia: [
    q(1, "Quais são os pontos cardeais?", "Norte, Sul, Leste e Oeste|Norte, Sul, Centro e Leste|Acima, Abaixo, Direita e Esquerda|Norte, Nordeste, Sul e Sudeste", 0, "Os pontos cardeais são Norte, Sul, Leste e Oeste."),
    q(1, "Qual instrumento usamos para encontrar o Norte?", "Régua|Bússola|Balança|Relógio", 1, "A agulha da bússola aponta para o Norte."),
    q(1, "Em qual direção o Sol nasce?", "Oeste|Norte|Leste|Sul", 2, "O Sol nasce no lado Leste e se põe no lado Oeste."),
    q(1, "Qual é o maior oceano do planeta?", "Atlântico|Índico|Pacífico|Ártico", 2, "O Oceano Pacífico é o maior e o mais profundo."),
    q(1, "Como chamamos tudo o que vemos em um lugar, como rios, casas e árvores?", "Paisagem|Mapa|Escala|Legenda", 0, "A paisagem é o conjunto de elementos naturais e construídos que vemos."),

    q(2, "Qual linha imaginária divide a Terra em hemisfério Norte e hemisfério Sul?", "Meridiano de Greenwich|Linha do Equador|Trópico de Câncer|Círculo Polar", 1, "A Linha do Equador divide a Terra em Norte e Sul."),
    q(2, "O que a legenda de um mapa mostra?", "O significado dos símbolos|A idade do mapa|O preço do mapa|O nome do autor", 0, "A legenda explica o que cada cor e símbolo do mapa representa."),
    q(2, "O desenho plano que representa a superfície da Terra de forma reduzida é o:", "Mapa|Termômetro|Relógio|Globo", 0, "Isso é um mapa. O globo também representa a Terra, mas é esférico."),
    q(2, "Como se chama o lugar onde um rio nasce?", "Foz|Nascente|Afluente|Leito", 1, "A nascente é o ponto onde o rio começa."),
    vf(2, "A Linha do Equador passa pelo território do Brasil.", true, "Ela cruza o norte do país, em estados como Amapá, Pará, Amazonas e Roraima."),

    q(3, "O Meridiano de Greenwich divide a Terra em hemisférios:", "Norte e Sul|Leste (Oriental) e Oeste (Ocidental)|Claro e escuro|Frio e quente", 1, "Ele separa o hemisfério Oriental do Ocidental."),
    q(3, "A distância, em graus, ao norte ou ao sul da Linha do Equador chama-se:", "Longitude|Altitude|Latitude|Escala", 2, "Latitude mede a distância ao Equador. Longitude mede a distância a Greenwich."),
    q(3, "Em um mapa com escala 1:100.000, 1 cm no mapa equivale a quanto na realidade?", "100 m|1 km|10 km|100 km", 1, "100.000 cm = 1.000 m = 1 km."),
    q(3, "Como se chama o local onde um rio termina, desaguando no mar?", "Nascente|Foz|Afluente|Margem", 1, "A foz é o ponto em que o rio deságua no mar ou em outro rio."),
    q(3, "Qual é a camada da atmosfera onde acontecem chuva, vento e nuvens?", "Troposfera|Estratosfera|Exosfera|Mesosfera", 0, "A troposfera é a camada mais próxima do solo, onde ocorre o tempo."),
    q(1, "Em qual continente fica o Brasil?", "África|América do Sul|Europa|Ásia", 1, "O Brasil fica na América do Sul."),
    q(1, "Qual ponto cardeal é o oposto do Norte?", "Leste|Oeste|Sul|Centro", 2, "O oposto do Norte é o Sul."),
    vf(1, "A agulha da bússola aponta para o Norte magnético da Terra.", true, "A agulha magnetizada se alinha ao campo magnético da Terra e aponta para o Norte magnético."),
    q(2, "Os paralelos e os meridianos servem para:", "Localizar pontos na Terra|Medir a temperatura|Contar habitantes|Marcar fronteiras de países", 0, "Eles formam uma rede de linhas imaginárias que permite localizar qualquer ponto do planeta."),
    q(2, "A Rosa dos Ventos serve para indicar:", "As direções|A altitude|A população|O clima", 0, "A rosa dos ventos mostra as direções: pontos cardeais, colaterais e subcolaterais."),
    q(3, "Além da Linha do Equador, qual paralelo importante passa pelo sul do Brasil?", "Trópico de Capricórnio|Círculo Polar Ártico|Trópico de Câncer|Círculo Polar Antártico", 0, "O Trópico de Capricórnio cruza o sul do país, passando por estados como São Paulo e Paraná."),

    // Nível 4: desafios dos chefes
    q(4, "Uma cidade está a 0° de latitude e 45° de longitude Oeste. Onde ela fica?", "Na Linha do Equador, a oeste de Greenwich|No hemisfério Sul, a leste de Greenwich|No Polo Norte|No Trópico de Capricórnio", 0, "A latitude 0° é a Linha do Equador. A longitude Oeste fica a oeste do Meridiano de Greenwich."),
    q(4, "Em um mapa de escala 1:50.000, dois pontos estão a 4 cm um do outro. Qual é a distância real?", "200 m|2 km|20 km|500 m", 1, "4 cm × 50.000 = 200.000 cm = 2.000 m = 2 km."),
    q(4, "O Brasil fica, na maior parte, em quais hemisférios?", "Sul e Ocidental (Oeste)|Norte e Oriental (Leste)|Sul e Oriental (Leste)|Norte e Ocidental (Oeste)", 0, "A maior parte do território fica abaixo da Linha do Equador (Sul) e a oeste de Greenwich (Ocidental)."),
    q(4, "Qual é a diferença entre tempo e clima?", "Tempo é o estado da atmosfera em um momento; clima é o padrão ao longo de muitos anos|Tempo é a temperatura do mar; clima é o vento|São a mesma coisa|Tempo é o clima da noite", 0, "O tempo muda de hora em hora (chuva, sol). O clima é o comportamento médio da atmosfera ao longo de muitos anos."),
    q(4, "Por que as estações do ano são opostas nos hemisférios Norte e Sul?", "Por causa da inclinação do eixo da Terra|Por causa da distância entre a Terra e a Lua|Por causa das marés|Por causa da velocidade da Lua", 0, "Com o eixo inclinado, quando um hemisfério recebe mais luz solar (verão), o outro recebe menos (inverno)."),
    q(4, "Você está de frente para o Norte com uma bússola. Em qual lado o Sol nasce?", "À sua direita|À sua esquerda|À sua frente|Às suas costas", 0, "Voltado para o Norte, o Leste fica à direita. O Sol nasce no Leste."),
    vf(4, "A Linha do Equador divide a Terra em hemisfério Norte e hemisfério Sul, e o Meridiano de Greenwich a divide em Leste e Oeste.", true, "Equador: Norte e Sul. Greenwich: Oriental (Leste) e Ocidental (Oeste).")
  ],

  historia: [
    q(1, "A ciência que estuda o passado da humanidade é a:", "Geografia|História|Biologia|Física", 1, "A História estuda o que as pessoas fizeram no passado."),
    q(1, "Um documento antigo, uma foto ou um objeto que ajuda a estudar o passado é uma:", "Fonte histórica|Lenda|Maquete|Receita", 0, "Fontes históricas são pistas do passado, como documentos, fotos e objetos."),
    q(1, "Em qual período da Pré-história os humanos eram nômades, vivendo da caça e da coleta?", "Paleolítico|Idade Média|Idade Moderna|Idade Contemporânea", 0, "No Paleolítico, os grupos se mudavam em busca de alimento."),
    q(1, "Os faraós governavam qual civilização antiga?", "Egito|Grécia|Roma|Mesopotâmia", 0, "Faraó era o título dos governantes do Egito Antigo."),
    q(1, "Qual rio era essencial para a vida no Egito Antigo?", "Nilo|Amazonas|Tâmisa|Sena", 0, "As cheias do Nilo deixavam a terra fértil para a agricultura."),

    q(2, "O que foi a Revolução Agrícola (Neolítico)?", "Quando as pessoas aprenderam a plantar e criar animais|Quando inventaram o computador|Quando o Brasil foi descoberto|Quando a escrita foi proibida", 0, "Ao plantar e criar animais, os grupos puderam viver fixos em um lugar."),
    q(2, "A escrita dos egípcios, feita com desenhos, chamava-se:", "Cuneiforme|Hieróglifos|Alfabeto latino|Braille", 1, "Os hieróglifos eram símbolos e desenhos que representavam ideias e sons."),
    q(2, "A escrita cuneiforme foi criada por povos da:", "Mesopotâmia|Roma|Grécia|Austrália", 0, "Os sumérios, da Mesopotâmia, escreviam em tábuas de argila."),
    q(2, "Qual cidade grega é conhecida como o berço da democracia?", "Esparta|Atenas|Tebas|Roma", 1, "Em Atenas, os cidadãos votavam nas decisões da cidade."),
    vf(2, "As pirâmides do Egito foram construídas como tumbas para os faraós.", true, "As grandes pirâmides serviam de túmulo para os faraós."),

    q(3, "Os Jogos Olímpicos antigos nasceram em qual civilização?", "Romana|Grega|Egípcia|Persa", 1, "Eles surgiram na Grécia Antiga, em Olímpia, em honra ao deus Zeus."),
    q(3, "Qual civilização construiu o Coliseu?", "Grega|Egípcia|Romana|Mesopotâmica", 2, "O Coliseu fica em Roma e recebia lutas e espetáculos."),
    q(3, "Quais rios ficavam na região da Mesopotâmia?", "Tigre e Eufrates|Nilo e Amazonas|Tâmisa e Sena|Danúbio e Reno", 0, "Mesopotâmia significa 'terra entre rios': o Tigre e o Eufrates."),
    q(3, "A sigla 'a.C.' significa:", "Antes de Cristo|Após o Comércio|Antes da Civilização|Ano Comum", 0, "a.C. = antes de Cristo. Nesses anos, a contagem vai diminuindo até o ano 1."),
    vf(3, "O português vem do latim, a língua falada pelos romanos.", true, "O latim deu origem ao português, ao espanhol, ao italiano e ao francês."),

    // Nível 4: desafios dos chefes
    q(4, "Qual povo da Mesopotâmia criou o Código de Hamurabi, um dos conjuntos de leis escritas mais antigos?", "Babilônios|Egípcios|Gregos|Romanos", 0, "Hamurabi foi rei da Babilônia, na Mesopotâmia. Seu código tinha leis escritas em pedra."),
    q(4, "Por que o Egito Antigo é chamado de 'dádiva do Nilo'?", "As cheias do rio fertilizavam a terra e permitiam a agricultura no deserto|O Nilo trazia ouro do mar|O rio protegia o Egito de guerras|Os egípcios inventaram o rio", 0, "As cheias anuais deixavam o solo fértil, e assim era possível plantar perto do rio, no meio do deserto."),
    q(4, "Um vaso de cerâmica encontrado em uma escavação é um exemplo de fonte histórica:", "Material|Escrita|Oral|Digital", 0, "Fontes materiais são objetos deixados pelas pessoas. Escritas são textos; orais são relatos falados."),
    q(4, "Qual foi a principal mudança trazida pela Revolução Neolítica?", "Passou-se da vida nômade para a vida fixa, com agricultura e criação de animais|Começou o uso do computador|As pessoas deixaram de usar ferramentas|Surgiram os primeiros carros", 0, "Plantando e criando animais, os grupos humanos puderam se fixar e formar as primeiras aldeias."),
    q(4, "Na República Romana, o poder era exercido principalmente por:", "Senado e magistrados eleitos, como os cônsules|Um faraó|Um rei que herdava o trono|Sacerdotes do Nilo", 0, "Na República, o Senado e os magistrados (cônsules) governavam. O faraó era o governante do Egito."),
    vf(4, "Os fenícios ficaram famosos por criar um alfabeto que influenciou os alfabetos grego e latino.", true, "O alfabeto fenício, de sinais simples, deu origem a outros alfabetos, como o grego, que influenciou o latino."),
    q(4, "Qual destas civilizações usava hieróglifos e construiu pirâmides como túmulos?", "Egípcia|Grega|Romana|Fenícia", 0, "Os egípcios escreviam com hieróglifos e construíram pirâmides para os faraós.")
  ],

  portugues: [
    q(1, "Qual palavra é um substantivo?", "Correr|Bonito|Casa|Rapidamente", 2, "Substantivo dá nome a seres e coisas. 'Casa' é o nome de um lugar."),
    q(1, "Qual é o sinônimo de 'feliz'?", "Triste|Alegre|Cansado|Bravo", 1, "Sinônimos têm significado parecido. Feliz e alegre se aproximam."),
    q(1, "Qual é o antônimo de 'grande'?", "Enorme|Largo|Pequeno|Alto", 2, "Antônimos têm significados opostos. O oposto de grande é pequeno."),
    q(1, "Quantas sílabas tem a palavra 'janela'?", "2|3|4|5", 1, "Ja-ne-la: 3 sílabas."),
    q(1, "Qual sinal usamos no final de uma pergunta?", "Ponto final|Ponto de exclamação|Ponto de interrogação|Vírgula", 2, "A pergunta termina com ponto de interrogação (?)."),

    q(2, "Qual palavra é um verbo?", "Cantar|Cantor|Canção|Cantiga", 0, "Verbos indicam ações. 'Cantar' é uma ação."),
    q(2, "Em 'A menina inteligente ganhou o prêmio', qual palavra é um adjetivo?", "menina|inteligente|ganhou|prêmio", 1, "Adjetivo dá uma característica ao substantivo. 'Inteligente' descreve a menina."),
    q(2, "Qual palavra está escrita corretamente?", "Exceção|Esceção|Excessão|Ecxeção", 0, "O certo é 'exceção', com 'xc' e terminação 'ção'."),
    q(2, "Qual é o plural de 'animal'?", "Animais|Animales|Animals|Animaises", 0, "Palavras terminadas em 'al' trocam o 'l' por 'is': animal, animais."),
    q(2, "Qual palavra é proparoxítona (sílaba mais forte é a antepenúltima)?", "Árvore|Café|Sapato|Jacaré", 0, "Ár-vo-re: a sílaba forte é a terceira, contando do fim."),

    q(3, "Qual palavra contém um ditongo?", "Pai|Sala|Bola|Fada", 0, "Ditongo é o encontro de uma vogal e uma semivogal na mesma sílaba, como em 'pai'."),
    q(3, "Qual palavra contém um hiato?", "Saúde|Pai|Rei|Céu", 0, "Em sa-ú-de, as vogais ficam em sílabas separadas. Isso é um hiato."),
    q(3, "Na frase 'Os alunos estudaram muito.', qual é o sujeito?", "Os alunos|estudaram|muito|estudaram muito", 0, "O sujeito é quem pratica a ação: os alunos."),
    q(3, "Qual frase está correta quanto à concordância?", "Os meninos brincam no parque.|Os meninos brinca no parque.|O meninos brincam no parque.|Os menino brincam no parque.", 0, "O verbo e o artigo concordam com o sujeito no plural: os meninos brincam."),
    q(3, "Complete: 'Quero ___ água, por favor.'", "mas|mais|más|mês", 1, "'Mais' indica quantidade. 'Mas' é uma conjunção, como em 'tentei, mas não consegui'."),

    // Nível 4: desafios dos chefes
    q(4, "Em 'Os alunos estudaram bastante ontem', quais palavras são advérbios?", "bastante e ontem|alunos e estudaram|Os e alunos|estudaram e ontem", 0, "Advérbios modificam o verbo: 'bastante' indica intensidade e 'ontem' indica tempo."),
    q(4, "Em qual frase o verbo está no passado?", "Eu cantei ontem.|Eu canto hoje.|Eu cantarei amanhã.|Eu quero cantar.", 0, "'Cantei' é pretérito (passado). 'Canto' é presente e 'cantarei' é futuro."),
    q(4, "Em 'A casa de Ana é grande', qual é o sujeito?", "A casa de Ana|Ana|é grande|grande", 0, "O sujeito é aquilo de que se fala: 'A casa de Ana'. O predicado é 'é grande'."),
    q(4, "Qual palavra leva acento por ser oxítona terminada em 'a'?", "Sofá|Casa|Mesa|Janela", 0, "Oxítonas terminadas em a, e, o (seguidas ou não de s) são acentuadas: sofá."),
    q(4, "Qual é o plural correto de 'cidadão'?", "Cidadãos|Cidadões|Cidadães|Cidadans", 0, "O plural de cidadão é cidadãos, como mão/mãos e irmão/irmãos."),
    q(4, "Em 'Choveu, por isso ficamos em casa', a expressão 'por isso' indica:", "Consequência|Oposição|Tempo|Dúvida", 0, "'Por isso' liga a causa (choveu) à consequência (ficamos em casa)."),
    vf(4, "As palavras 'saúde' e 'país' têm hiato.", true, "Em sa-ú-de e pa-ís, as vogais ficam em sílabas separadas, e isso é um hiato.")
  ]
};

const MATERIAS = { matematica: "Matemática", ciencias: "Ciências", geografia: "Geografia", historia: "História", portugues: "Português" };

/* ================================================================
   2. CAMPANHA E CONFIGURAÇÕES
   ================================================================ */

const W = 360, H = 520; // tamanho lógico do palco (canvas)

// Cada fase tem um tipo de jogabilidade diferente. Só se avança concluindo a anterior.
const FASES = [
  { id: "ilha", tipo: "ilha", nome: "Ilha do Despertar", icone: "🏝️", materia: "Ciências e História", materias: ["ciencias", "historia"], n: 8, premio: 40, xp: 40,
    desc: "Exploração: ache as 8 runas e conserte o barco.",
    hist: [
      ["🌅", "Narrador", "{nome} acorda na areia, com o barco em pedaços e a cabeça girando. Quem é você? De onde veio? Só resta uma lembrança: o seu nome."],
      ["🦜", "Louro José", "Acordou, capitão {nome}! O Vulcão Magmar roubou o Cristal do Saber, e as ilhas esqueceram tudo."],
      ["🔮", "Louro José", "Há 8 runas espalhadas pela ilha. Cada uma guarda uma peça do seu barco. Deslize o dedo ou use as setas para andar!"]
    ] },
  { id: "mar", tipo: "nav", nome: "Travessia dos Ventos", icone: "🌊", materia: "Geografia", materias: ["geografia"], n: 8, premio: 70, xp: 70,
    boss: "bombardiro", bossNome: "Bombardiro Crocodilo", premioPers: "b_bombardiro",
    desc: "Navegação e chefe: pegue as boias ❓ e enfrente o Bombardiro Crocodilo.",
    hist: [
      ["⛵", "Louro José", "Barco novinho em folha! Agora é cruzar o mar até a ilha do outro lado. Desvie das pedras e pegue as boias ❓ para consultar o mapa."],
      ["🧭", "Narrador", "Estranho... o mapa de bordo já tem o seu nome escrito, como se alguém soubesse que você viria."],
      ["✈️", "Louro José", "Atenção: no fim da travessia, o Bombardiro Crocodilo vai bombardear o seu barco! Seu canhão atira sozinho. Desvie das bombas e fique embaixo dele!"]
    ] },
  { id: "corsario", tipo: "cartas", nome: "Tralalero Tralala", icone: "🦈", materia: "Geografia (chefe)", materias: ["geografia"], n: 8, evita: "mar", chefe: true, nivelMin: 3, nivelMax: 4,
    bossNome: "Tralalero Tralala", premioPers: "b_tralalero", premio: 110, xp: 110,
    desc: "Chefe do mar: batalha naval com cartas contra o tubarão de tênis.",
    hist: [
      ["🦈", "Narrador", "Das águas surge Tralalero Tralala, o tubarão de três tênis! Ele só luta com perguntas difíceis."],
      ["🃏", "Louro José", "Acertou? Escolha uma carta: atacar, defender ou reparar. Errou? O barco bate na pedra e o tubarão ataca!"]
    ] },
  { id: "praia", tipo: "corrida", nome: "Praia das Palavras", icone: "🏖️", materia: "Língua Portuguesa", materias: ["portugues"], n: 8, premio: 120, xp: 120,
    boss: "tungtung", bossNome: "Tung Tung Tung Sahur", premioPers: "b_tungtung",
    desc: "Corrida em 3 faixas e chefe: Tung Tung Tung Sahur.",
    hist: [
      ["🏖️", "Narrador", "Letras brilham na areia desta praia desconhecida. Uma sombra de lava se aproxima: corra!"],
      ["📖", "Louro José", "Pule as barreiras, deslize sob as traves e pegue os livros 📖 para decifrar as palavras."],
      ["🪵", "Louro José", "No fim da praia, Tung Tung Tung Sahur espera com seu bastão. Aguente firme e esquive!"]
    ] },
  { id: "selva", tipo: "tiro", nome: "Selva dos Números", icone: "🌴", materia: "Matemática", materias: ["matematica"], n: 8, premio: 140, xp: 140,
    boss: "chimpanzini", bossNome: "Chimpanzini Bananini", premioPers: "b_chimpanzini",
    desc: "Tiro ao alvo e chefe: Chimpanzini Bananini.",
    hist: [
      ["🌴", "Narrador", "A trilha termina numa selva misteriosa. Guardiões de números bloqueiam o caminho."],
      ["🎯", "Louro José", "Atire na bolha com a resposta certa! Cuidado com os troncos e os macacos atiradores. Arraste na faixa de baixo para andar."],
      ["🍌", "Louro José", "E fique esperto: o Chimpanzini Bananini guarda o fim da trilha, e ele joga banana pra todo lado!"]
    ] },
  { id: "arena", tipo: "cobra", nome: "Arena dos Heróis", icone: "🐍", materia: "Todas as matérias", materias: ["matematica", "ciencias", "geografia", "historia", "portugues"], n: 8, premio: 160, xp: 160,
    desc: "Cobrinha: cada resposta certa liberta um personagem para o seu time.",
    hist: [
      ["🐍", "Narrador", "O portal leva {nome} a uma arena onde heróis de várias terras estão presos em bolhas de saber."],
      ["❓", "Louro José", "Guie a fila de heróis e pegue os blocos ❓. Resposta certa liberta um personagem, que entra na fila no lugar da cauda!"],
      ["🪨", "Louro José", "Cuidado: pedras e a própria fila machucam. Mas as bordas são portais: dá para atravessar!"]
    ] },
  { id: "vulcao", tipo: "chefe", nome: "Vulcão Magmar", icone: "🌋", materia: "Todas as matérias (desafios)", materias: ["matematica", "ciencias", "geografia", "historia", "portugues"], n: 6, chefe: true, nivelMin: 4, nivelMax: 4,
    boss: "magmar", bossNome: "Magmar", premio: 350, xp: 350,
    desc: "Chefão final estilo Cuphead: 4 fases e perguntas de desafio.",
    hist: [
      ["🌋", "Narrador", "No topo do vulcão, Magmar guarda o Cristal do Saber. Ele sussurra: 'Eu conheço você, {nome}...'"],
      ["💨", "Louro José", "Aqui não tem pausa: ele ataca sem parar! Use o dash 💨 para esquivar, toque nas bolas rosas no dash para dar PARRY e carregue o super ⭐."],
      ["❓", "Louro José", "Cristais ❓ trazem perguntas de desafio, as mais difíceis do jogo, e valem cartas. Cada golpe tira 20% da sua vida. Boa sorte, capitão {nome}!"]
    ] }
];

const HIST_FIM = [
  ["💎", "Narrador", "O Cristal do Saber brilha e as memórias das ilhas voltam, uma a uma."],
  ["🦜", "Louro José", "Mas a sua memória, capitão {nome}, continua em branco... Quem apagou?"],
  ["🌌", "Narrador", "Talvez a próxima aventura responda."]
];

const PISTAS = [
  "🧩 Peça 1: o leme. A runa diz: 'Você já esteve aqui.'",
  "🧩 Peça 2: o mastro. Há um nome riscado na pedra... será o seu?",
  "🧩 Peça 3: a vela. Marcas de passos antigos, do seu tamanho.",
  "🧩 Peça 4: o casco. A runa murmura: 'Quem apagou sua memória?'",
  "🧩 Peça 5: a âncora. Um cristal quebrado brilha ao longe.",
  "🧩 Peça 6: o convés. Louro José olha para o lado, nervoso.",
  "🧩 Peça 7: a bússola. Ela aponta para um vulcão.",
  "🧩 Peça 8: o timão! O barco está pronto!"
];

const BARCOS = [
  { id: "veleiro",  nome: "Veleiro",          emoji: "⛵",  vida: 100, dano: 30, moedas: 0,    preco: 0,    nivel: 1 },
  { id: "patinho",  nome: "Patinho Gigante",  emoji: "🦆",  vida: 90,  dano: 32, moedas: 0.05, preco: 120,  nivel: 1, nota: "Fofo e bem valente!" },
  { id: "canoa",    nome: "Canoa Pirata",     emoji: "🛶",  vida: 80,  dano: 40, moedas: 0,    preco: 150,  nivel: 1 },
  { id: "lancha",   nome: "Lancha Tubarão",   emoji: "🚤",  vida: 120, dano: 35, moedas: 0.10, preco: 450,  nivel: 3 },
  { id: "iate",     nome: "Iate Dourado",     emoji: "🛥️", vida: 140, dano: 40, moedas: 0.25, preco: 1000, nivel: 6 },
  { id: "cruzeiro", nome: "Cruzeiro Real",    emoji: "🛳️", vida: 180, dano: 38, moedas: 0.15, preco: 1800, nivel: 7 },
  { id: "titanic",  nome: "Titanic",          emoji: "🚢",  vida: 250, dano: 36, moedas: 0.20, preco: 3000, nivel: 8, nota: "Enorme! Cuidado com icebergs 🧊" },
  { id: "dragao",   nome: "Barco Dragão",     emoji: "🐲",  vida: 200, dano: 55, moedas: 0.20, preco: 4500, nivel: 9 },
  { id: "ovni",     nome: "Nave Alienígena",  emoji: "🛸",  vida: 220, dano: 60, moedas: 0.35, preco: 6500, nivel: 10 }
];

const MELHORIAS = [
  { id: "casco",   nome: "Casco reforçado",    icone: "🧱", desc: "+10 de vida máxima",    base: 60 },
  { id: "canhao",  nome: "Canhão potente",     icone: "💣", desc: "+5 de dano",            base: 80 },
  { id: "reparo",  nome: "Kit de reparo",      icone: "🔧", desc: "+5 de cura",            base: 50 },
  { id: "ima",     nome: "Ímã de moedas",      icone: "🧲", desc: "+10% de moedas",        base: 100 },
  { id: "relogio", nome: "Ampulheta",          icone: "⏳", desc: "+2 s em cada pergunta", base: 70 },
  { id: "livro",   nome: "Livro de sabedoria", icone: "📚", desc: "+10% de XP",            base: 90 }
];
const NIVEL_MAX_MELHORIA = 5;
const NIVEL_MAXIMO = 10;
const MAX_ELENCO = 6; // tamanho do time da cobrinha

// Preços e regras fixos
const PRECO_VIDA = 1000;      // vida extra
const PRECO_DEFESA = 500;     // defesa (escudo) extra
const MAX_EQUIPAMENTOS = 2;   // limite estrito de equipamentos carregados
const BONUS_PRIMEIRA_VITORIA = 50;

// Personagem secreto: chance = 1% + 0,5% por falha, teto de 15%, garantia após 60 falhas
const CHANCE_BASE = 0.01;
const PASSO_CHANCE = 0.005;
const CHANCE_MAX = 0.15;
const GARANTIA = 60;

const EQUIPAMENTOS = [
  { id: "cota",    nome: "Cota de malha",    emoji: "🦺", desc: "+20 de vida máxima", preco: 300, vida: 20 },
  { id: "mira",    nome: "Mira de latão",    emoji: "🎯", desc: "+4 de dano",         preco: 300, dano: 4 },
  { id: "bussola", nome: "Relógio de bolso", emoji: "⌚", desc: "+3 s por pergunta",  preco: 250, tempo: 3 },
  { id: "bolsa",   nome: "Bolsa de moedas",  emoji: "👝", desc: "+10% de moedas",     preco: 350, moeda: 0.1 }
];

/* Estaleiro */
const SLOTS = [
  { id: "mascote",    nome: "Mascote",           icone: "🦜" },
  { id: "tripulante", nome: "Tripulante",        icone: "🧑‍✈️" },
  { id: "vela",       nome: "Bandeira",          icone: "🏴‍☠️" },
  { id: "canhao",     nome: "Munição do canhão", icone: "💣" },
  { id: "cor",        nome: "Pintura do barco",  icone: "🎨" }
];

const ITENS = [
  { id: "papagaio",   slot: "mascote",    emoji: "🦜", nome: "Louro José",      ref: "O papagaio falante da TV", preco: 80 },
  { id: "macaco",     slot: "mascote",    emoji: "🐒", nome: "Macaco Prego",    ref: "Companheiro esperto",      preco: 60 },
  { id: "gato",       slot: "mascote",    emoji: "🐱", nome: "Gato Pirata",     ref: "Caçador de ratos",         preco: 70 },
  { id: "caranguejo", slot: "mascote",    emoji: "🦀", nome: "Sr. Caranguejo",  ref: "Anda de lado",             preco: 50 },
  { id: "tubarao",    slot: "mascote",    emoji: "🦈", nome: "Tubarãozinho",    ref: "Pequeno, mas feroz",       preco: 120 },
  { id: "polvo",      slot: "mascote",    emoji: "🐙", nome: "Polvinho",        ref: "Oito braços de ajuda",     preco: 90 },
  { id: "cao",        slot: "mascote",    emoji: "🐶", nome: "Cão Pirata",      ref: "Fiel ao capitão",          preco: 70 },
  { id: "pinguim",    slot: "mascote",    emoji: "🐧", nome: "Pinguim",         ref: "Vem do gelo",              preco: 100 },
  { id: "coruja",     slot: "mascote",    emoji: "🦉", nome: "Coruja Sábia",    ref: "Vigia a noite",            preco: 110 },
  { id: "dragaozinho", slot: "mascote",   emoji: "🐉", nome: "Dragãozinho",     ref: "Cospe fogo de brincadeira", preco: 250 },

  { id: "marujo",     slot: "tripulante", emoji: "🧑‍✈️", nome: "Marujo",         ref: "Pronto para o mar",        preco: 60 },
  { id: "luffy",      slot: "tripulante", emoji: "👒", nome: "Chapéu de Palha", ref: "Capitão de chapéu de palha", preco: 150 },
  { id: "jack",       slot: "tripulante", emoji: "🧔", nome: "Capitão Jack",    ref: "Pirata de chapéu bicorne",      preco: 150 },
  { id: "cozinheiro", slot: "tripulante", emoji: "👨‍🍳", nome: "Cozinheiro",      ref: "Rancho garantido",         preco: 70 },
  { id: "robo",       slot: "tripulante", emoji: "🤖", nome: "Robô-pirata",     ref: "Tripulante do futuro",     preco: 200 },
  { id: "mago",       slot: "tripulante", emoji: "🧙", nome: "Mago do Mar",     ref: "Feitiços de vento",        preco: 180 },
  { id: "ninja",      slot: "tripulante", emoji: "🥷", nome: "Ninja",           ref: "Silencioso e rápido",      preco: 160 },
  { id: "sereia",     slot: "tripulante", emoji: "🧜", nome: "Sereia",          ref: "Canta para as ondas",      preco: 170 },
  { id: "heroi",      slot: "tripulante", emoji: "🦸", nome: "Super-herói",     ref: "Salva o dia",              preco: 220 },
  { id: "alien",      slot: "tripulante", emoji: "👽", nome: "Alienígena",      ref: "De outro planeta",         preco: 240 },

  { id: "jolly",      slot: "vela",       emoji: "🏴‍☠️", nome: "Bandeira Pirata", ref: "A famosa Jolly Roger",    preco: 40 },
  { id: "brasil",     slot: "vela",       emoji: "🇧🇷", nome: "Brasil",          ref: "Vai, Brasil!",             preco: 50 },
  { id: "estrela",    slot: "vela",       emoji: "⭐", nome: "Estrela",         ref: "Brilha no mastro",         preco: 40 },
  { id: "fogo",       slot: "vela",       emoji: "🔥", nome: "Chama",           ref: "Quente e veloz",           preco: 60 },
  { id: "coroa",      slot: "vela",       emoji: "👑", nome: "Coroa Real",      ref: "Para capitães ricos",      preco: 100 },
  { id: "xadrez",     slot: "vela",       emoji: "🏁", nome: "Xadrez",          ref: "Chegada de corrida",       preco: 50 },
  { id: "arco",       slot: "vela",       emoji: "🌈", nome: "Arco-íris",       ref: "Cheio de cor",             preco: 80 },
  { id: "caveira",    slot: "vela",       emoji: "💀", nome: "Caveira",         ref: "Muito assustadora",        preco: 90 },
  { id: "unicornio",  slot: "vela",       emoji: "🦄", nome: "Unicórnio",       ref: "Mágico!",                  preco: 130 },

  { id: "bola",       slot: "canhao",     emoji: "⚽", nome: "Bola de futebol", ref: "Gol de canhão!",           preco: 70 },
  { id: "pizza",      slot: "canhao",     emoji: "🍕", nome: "Pizza",           ref: "Entrega rápida",           preco: 80 },
  { id: "melancia",   slot: "canhao",     emoji: "🍉", nome: "Melancia",        ref: "Suculenta",                preco: 80 },
  { id: "neve",       slot: "canhao",     emoji: "❄️", nome: "Bola de neve",    ref: "Geladinha",                preco: 90 },
  { id: "ninjastar",  slot: "canhao",     emoji: "🌟", nome: "Estrela ninja",   ref: "Gira no ar",               preco: 110 },
  { id: "diamante",   slot: "canhao",     emoji: "💎", nome: "Diamante",        ref: "Brilha ao acertar",        preco: 200 },

  { id: "rosa",       slot: "cor",        emoji: "🩷", nome: "Rosa",            ref: "Barco cor-de-rosa",        preco: 60,  filtro: "hue-rotate(300deg) saturate(1.6)" },
  { id: "verde",      slot: "cor",        emoji: "💚", nome: "Verde",           ref: "Barco verde",              preco: 60,  filtro: "hue-rotate(100deg) saturate(1.6)" },
  { id: "roxo",       slot: "cor",        emoji: "💜", nome: "Roxo",            ref: "Barco roxo",               preco: 60,  filtro: "hue-rotate(230deg) saturate(1.6)" },
  { id: "laranja",    slot: "cor",        emoji: "🧡", nome: "Laranja",         ref: "Barco laranja",            preco: 60,  filtro: "hue-rotate(20deg) saturate(1.8)" },
  { id: "gelo",       slot: "cor",        emoji: "🧊", nome: "Gelo",            ref: "Azul congelante",          preco: 70,  filtro: "hue-rotate(160deg) brightness(1.2)" },
  { id: "sombra",     slot: "cor",        emoji: "🖤", nome: "Sombra",          ref: "Barco misterioso",         preco: 90,  filtro: "grayscale(1) brightness(0.45)" },
  { id: "neon",       slot: "cor",        emoji: "💡", nome: "Neon",            ref: "Brilha no escuro",         preco: 140, filtro: "saturate(3) hue-rotate(60deg) drop-shadow(0 0 6px #0ff)" },
  { id: "dourado",    slot: "cor",        emoji: "✨", nome: "Dourado",         ref: "Brilha como ouro",         preco: 120, filtro: "sepia(1) saturate(3) hue-rotate(-10deg)" }
];

/* Avatar do jogador */
const PELES = ["#ffe0bd", "#f1c27d", "#e0ac69", "#c68642", "#8d5524", "#5c3a21"];
const CORES_CABELO = ["#2b1b12", "#6b3e1e", "#c9a227", "#d9381e", "#7a3cff", "#2a7fff", "#ff6fb1", "#f2f2f2"];
const CORES_ROUPA = ["#e63946", "#ff9f1c", "#ffd23f", "#2ecc71", "#19c3c9", "#2a6fdb", "#7a3cff", "#ff6fb1", "#ffffff", "#222222"];

const AV_CAMPOS = [
  { id: "genero",    nome: "Personagem",    tipo: "texto", opcoes: [["m", "👦 Menino"], ["f", "👧 Menina"]] },
  { id: "pele",      nome: "Cor da pele",   tipo: "cor",   opcoes: PELES },
  { id: "cabelo",    nome: "Cabelo",        tipo: "texto", opcoes: [["nenhum", "Careca"], ["curto", "Curto"], ["comprido", "Comprido"], ["cacheado", "Cacheado"], ["coque", "Coque"], ["rabo", "Rabo de cavalo"], ["espetado", "Espetado"], ["moicano", "Moicano"], ["trancas", "Maria-chiquinha"], ["afro", "Black power"], ["lateral", "Topete"], ["bob", "Chanel"]] },
  { id: "corCabelo", nome: "Cor do cabelo", tipo: "cor",   opcoes: CORES_CABELO },
  { id: "chapeu",    nome: "Chapéu",        tipo: "texto", opcoes: [["nenhum", "Nenhum"], ["pirata", "🏴‍☠️ Pirata"], ["bone", "🧢 Boné"], ["palha", "👒 Palha"], ["gorro", "Gorro"], ["coroa", "👑 Coroa"], ["cartola", "🎩 Cartola"], ["chef", "👨‍🍳 Chef"], ["bruxo", "🧙 Bruxo"]] },
  { id: "olhos",     nome: "Olhos",         tipo: "texto", opcoes: [["normal", "👀 Normal"], ["feliz", "😊 Felizes"], ["sono", "😴 Sonolentos"], ["estrela", "🤩 Estrela"], ["oculos", "🤓 Óculos"], ["piscada", "😉 Piscada"], ["anime", "✨ Anime"], ["anime2", "🌟 Anime brilhante"], ["bravo", "😠 Bravo"], ["escuros", "😎 Escuros"]] },
  { id: "boca",      nome: "Boca",          tipo: "texto", opcoes: [["sorriso", "🙂 Sorriso"], ["riso", "😄 Riso"], ["surpreso", "😮 Surpresa"], ["lingua", "😛 Língua"], ["serio", "😐 Séria"]] },
  { id: "camisa",    nome: "Camisa",        tipo: "cor",   opcoes: CORES_ROUPA },
  { id: "bermuda",   nome: "Bermuda",       tipo: "cor",   opcoes: CORES_ROUPA },
  { id: "vestido",   nome: "Vestido",       tipo: "cor",   opcoes: CORES_ROUPA, semNenhum: true, so: "f" },
  { id: "sapato",    nome: "Sapato",        tipo: "cor",   opcoes: CORES_ROUPA },
  { id: "camisaTipo", nome: "Estilo da camisa", tipo: "texto", opcoes: [["lisa", "Lisa"], ["listras", "Listras"], ["numero", "Número"]] },
  { id: "extra",     nome: "Acessório",     tipo: "texto", opcoes: [["nenhum", "Nenhum"], ["fone", "🎧 Fone"], ["bandana", "Bandana"], ["faixa", "Faixa"], ["orelhas", "🐱 Orelhas"], ["chifres", "Chifres"], ["tiara", "Tiara"], ["bigode", "🥸 Bigode"], ["mascara", "Máscara"], ["cachecol", "🧣 Cachecol"]] }
];

function avatarPadrao() {
  return { genero: "m", pele: PELES[1], cabelo: "curto", corCabelo: CORES_CABELO[0], chapeu: "nenhum", olhos: "normal", boca: "sorriso", camisa: CORES_ROUPA[0], bermuda: CORES_ROUPA[5], vestido: null, sapato: CORES_ROUPA[9], extra: "nenhum", camisaTipo: "lisa", corOlhos: "#3a2418", corExtra: "#e63946", numero: "10" };
}

// Clareia (f > 0) ou escurece (f < 0) uma cor "#rrggbb"
function corAj(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const alvo = f < 0 ? 0 : 255, p = Math.abs(f);
  const canal = v => Math.round(v + (alvo - v) * p);
  return "#" + ((1 << 24) + (canal(n >> 16) << 16) + (canal((n >> 8) & 255) << 8) + canal(n & 255)).toString(16).slice(1);
}
function luz(hex) {
  const n = parseInt(hex.slice(1), 16);
  return ((n >> 16) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114) / 255;
}

// Rosto: coordenadas do centro da cabeça em (50,36). O grupo da cabeça é ampliado depois.
const OLHOS_SVG = {
  normal: a => [41, 59].map(x => '<ellipse cx="' + x + '" cy="36" rx="4.4" ry="5.2" fill="#fff" stroke="#2b1b12" stroke-width="0.8"/><circle cx="' + x + '" cy="37" r="2.8" fill="' + a.corOlhos + '"/><circle cx="' + (x - 1) + '" cy="35.8" r="1" fill="#fff"/>').join(""),
  feliz: () => [41, 59].map(x => '<path d="M' + (x - 4.6) + ' 38 Q' + x + ' 30.5 ' + (x + 4.6) + ' 38" stroke="#2b1b12" stroke-width="2.6" fill="none" stroke-linecap="round"/>').join(""),
  sono: () => [41, 59].map(x => '<path d="M' + (x - 4.6) + ' 35 Q' + x + ' 40.5 ' + (x + 4.6) + ' 35" stroke="#2b1b12" stroke-width="2.6" fill="none" stroke-linecap="round"/>').join(""),
  estrela: () => [41, 59].map(x => '<text x="' + x + '" y="41" font-size="14" text-anchor="middle" fill="#ffb703" stroke="#c97a00" stroke-width="0.5">★</text>').join(""),
  oculos: a => OLHOS_SVG.normal(a) + '<circle cx="41" cy="36" r="7.4" fill="#cfefff" fill-opacity="0.25" stroke="#222" stroke-width="1.8"/><circle cx="59" cy="36" r="7.4" fill="#cfefff" fill-opacity="0.25" stroke="#222" stroke-width="1.8"/><path d="M48.4 36 H51.6" stroke="#222" stroke-width="1.8"/>',
  piscada: a => '<ellipse cx="41" cy="36" rx="4.4" ry="5.2" fill="#fff" stroke="#2b1b12" stroke-width="0.8"/><circle cx="41" cy="37" r="2.8" fill="' + a.corOlhos + '"/><path d="M54.5 37 Q59 33 63.5 37" stroke="#2b1b12" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
  anime: a => [41, 59].map(x => '<ellipse cx="' + x + '" cy="37" rx="5.2" ry="6.8" fill="#1b1b2b"/><ellipse cx="' + x + '" cy="37.6" rx="4.1" ry="5.8" fill="' + a.corOlhos + '"/><ellipse cx="' + x + '" cy="39" rx="2.3" ry="3.2" fill="#10101c"/><circle cx="' + (x - 1.7) + '" cy="34.6" r="1.8" fill="#fff"/><circle cx="' + (x + 1.9) + '" cy="40.4" r="0.9" fill="#fff"/><path d="M' + (x - 5.6) + ' 32.2 Q' + x + ' 29.4 ' + (x + 5.6) + ' 32.2" stroke="#1b1b2b" stroke-width="1.8" fill="none" stroke-linecap="round"/>').join(""),
  anime2: a => [41, 59].map(x => '<ellipse cx="' + x + '" cy="37" rx="5.8" ry="7.6" fill="#1b1b2b"/><ellipse cx="' + x + '" cy="37.6" rx="4.7" ry="6.6" fill="' + a.corOlhos + '"/><ellipse cx="' + x + '" cy="40" rx="3.4" ry="3.6" fill="' + corAj(a.corOlhos, 0.45) + '"/><circle cx="' + (x - 2) + '" cy="34" r="2.3" fill="#fff"/><circle cx="' + (x + 2.2) + '" cy="41" r="1.2" fill="#fff"/><circle cx="' + (x + 2.4) + '" cy="35.6" r="0.8" fill="#fff"/><path d="M' + (x - 6.2) + ' 31.6 Q' + x + ' 28.4 ' + (x + 6.2) + ' 31.6" stroke="#1b1b2b" stroke-width="2" fill="none" stroke-linecap="round"/>').join(""),
  bravo: a => OLHOS_SVG.normal(a) + '<path d="M34.5 30 L47 33.6" stroke="#2b1b12" stroke-width="2.8" stroke-linecap="round"/><path d="M65.5 30 L53 33.6" stroke="#2b1b12" stroke-width="2.8" stroke-linecap="round"/>',
  escuros: () => '<rect x="31.5" y="31" width="16.5" height="10" rx="4.5" fill="#15151c"/><rect x="52" y="31" width="16.5" height="10" rx="4.5" fill="#15151c"/><path d="M48 34 H52" stroke="#15151c" stroke-width="2.4"/><path d="M34.5 33.6 H40" stroke="#fff" stroke-width="1.6" opacity="0.5" stroke-linecap="round"/><path d="M55 33.6 H60.5" stroke="#fff" stroke-width="1.6" opacity="0.5" stroke-linecap="round"/>'
};
const BOCAS_SVG = {
  sorriso: '<path d="M42 47 Q50 55 58 47" stroke="#8a2b2b" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
  riso: '<path d="M40 46 Q50 62 60 46Z" fill="#8a2b2b"/><path d="M42.5 46 H57.5 V49.2 H42.5Z" fill="#fff"/><path d="M44 54 Q50 51 56 54 Q50 58 44 54Z" fill="#ff6f91"/>',
  surpreso: '<ellipse cx="50" cy="50.5" rx="3.6" ry="4.6" fill="#8a2b2b"/>',
  lingua: '<path d="M42 47 Q50 55 58 47" stroke="#8a2b2b" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M48 51 Q50 60 54.5 51Z" fill="#ff6f91"/>',
  serio: '<path d="M43 50 H57" stroke="#8a2b2b" stroke-width="2.6" stroke-linecap="round"/>'
};

// Cabelo: devolve [parte de trás, parte da frente]
function cabeloPartes(a) {
  const c = a.corCabelo, e = corAj(c, -0.3), l = corAj(c, 0.4);
  const franja = '<path d="M28 38 Q26 12 50 12 Q74 12 72 38 Q64 24 50 24 Q36 24 28 38Z" fill="' + c + '"/>';
  const brilho = '<path d="M36 19 Q50 12 64 19" stroke="' + l + '" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.75"/>';
  switch (a.cabelo) {
    case "curto": return ["", franja + brilho];
    case "comprido": return ['<path d="M25 34 Q24 9 50 9 Q76 9 75 34 L82 90 Q50 98 18 90Z" fill="' + e + '"/>', franja + brilho];
    case "coque": return ["", franja + '<circle cx="50" cy="8" r="8.5" fill="' + c + '"/><circle cx="47" cy="6" r="2.4" fill="' + l + '" opacity="0.7"/>' + brilho];
    case "rabo": return ['<path d="M68 24 Q94 28 86 70 Q80 44 70 36Z" fill="' + e + '"/>', franja + '<circle cx="71" cy="27" r="3.4" fill="#ff4d6d"/>' + brilho];
    case "cacheado": return ["", [[30, 28, 10], [42, 17, 11], [58, 17, 11], [70, 28, 10], [26, 41, 8], [74, 41, 8], [50, 14, 10]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="' + c + '"/>').join("") + '<circle cx="44" cy="14" r="3" fill="' + l + '" opacity="0.6"/>'];
    case "espetado": return ["", '<path d="M27 40 L21 15 L35 23 L38 3 L48 20 L56 1 L61 20 L75 7 L73 40 Q64 26 50 26 Q36 26 27 40Z" fill="' + c + '"/><path d="M38 3 L40 18 M56 1 L55 17 M21 15 L30 24" stroke="' + e + '" stroke-width="1.4" fill="none"/><path d="M41 8 L43 17" stroke="' + l + '" stroke-width="2" opacity="0.7"/>'];
    case "moicano": return ["", '<path d="M28 38 Q26 20 36 16 Q31 28 33 38Z" fill="' + e + '"/><path d="M72 38 Q74 20 64 16 Q69 28 67 38Z" fill="' + e + '"/><path d="M43 27 L45 7 L50 -7 L55 7 L57 27Z" fill="' + c + '"/><path d="M47 6 L49 -2" stroke="' + l + '" stroke-width="2" opacity="0.8"/>'];
    case "trancas": return ['<path d="M26 28 Q2 44 12 86 Q22 60 31 42Z" fill="' + e + '"/><path d="M74 28 Q98 44 88 86 Q78 60 69 42Z" fill="' + e + '"/>', franja + '<circle cx="24" cy="33" r="3.8" fill="#ff4d6d"/><circle cx="76" cy="33" r="3.8" fill="#ff4d6d"/>' + brilho];
    case "afro": return ['<circle cx="50" cy="25" r="32" fill="' + e + '"/><circle cx="50" cy="25" r="28" fill="' + c + '"/>', '<path d="M30 36 Q50 12 70 36 Q60 26 50 26 Q40 26 30 36Z" fill="' + c + '"/>' + brilho];
    case "lateral": return ["", '<path d="M27 40 Q21 8 52 8 Q80 10 73 40 Q70 25 56 21 Q42 27 36 36 Q33 41 27 40Z" fill="' + c + '"/><path d="M34 18 Q50 8 66 14" stroke="' + l + '" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.7"/>'];
    case "bob": return ['<path d="M24 30 Q24 7 50 7 Q76 7 76 30 L77 58 Q50 64 23 58Z" fill="' + e + '"/>', franja + brilho];
    default: return ["", ""];
  }
}

function chapeuSVG(tipo) {
  switch (tipo) {
    case "pirata": return '<ellipse cx="50" cy="21" rx="31" ry="7" fill="#222"/><path d="M31 21 Q50 -4 69 21Z" fill="#2c2c34"/><circle cx="50" cy="12" r="3.2" fill="#fff"/><path d="M46 10 L54 14 M54 10 L46 14" stroke="#222" stroke-width="1.2"/>';
    case "bone": return '<path d="M28 28 Q50 2 72 28Z" fill="#e63946"/><path d="M33 20 Q50 8 67 20" stroke="#fff" stroke-width="2" fill="none" opacity="0.4"/><rect x="48" y="25" width="38" height="5.5" rx="2.7" fill="#b3232f"/>';
    case "palha": return '<ellipse cx="50" cy="24" rx="36" ry="7.5" fill="#e8c15a"/><path d="M34 24 Q50 0 66 24Z" fill="#f0cf74"/><rect x="35" y="19" width="30" height="4.4" fill="#d63f3f"/><ellipse cx="50" cy="24" rx="36" ry="7.5" fill="none" stroke="#c9a23a" stroke-width="1"/>';
    case "gorro": return '<path d="M28 28 Q50 -6 72 28Z" fill="#2a6fdb"/><rect x="27" y="24" width="46" height="6.5" rx="3.2" fill="#1b4fa0"/><circle cx="50" cy="1" r="5.4" fill="#fff"/>';
    case "coroa": return '<path d="M31 23 L35 3 L43 15 L50 0 L57 15 L65 3 L69 23Z" fill="#ffd23f" stroke="#c9961a" stroke-width="1.2"/><circle cx="50" cy="12" r="2.4" fill="#e63946"/>';
    case "cartola": return '<ellipse cx="50" cy="20" rx="30" ry="6" fill="#1f1f2b"/><rect x="35" y="-9" width="30" height="29" rx="3.5" fill="#26263a"/><rect x="35" y="9" width="30" height="5.5" fill="#c9961a"/>';
    case "chef": return '<rect x="35" y="-6" width="30" height="24" rx="10" fill="#fff" stroke="#ddd" stroke-width="1"/><rect x="33" y="14" width="34" height="8" rx="3" fill="#f2f2f2" stroke="#ddd" stroke-width="1"/>';
    case "bruxo": return '<ellipse cx="50" cy="21" rx="32" ry="6.5" fill="#2d2a6e"/><path d="M34 21 Q44 8 48 -10 Q58 8 66 21Z" fill="#3b378c"/><rect x="34" y="16" width="32" height="4.4" fill="#ffd23f"/><circle cx="46" cy="6" r="2.4" fill="#ffd23f"/>';
    default: return "";
  }
}

// Acessórios do rosto (depois da boca) e do topo da cabeça (depois do cabelo)
function extraRosto(a) {
  const x = a.corExtra;
  switch (a.extra) {
    case "bigode": return '<path d="M37 49 Q43 44.5 50 49 Q57 44.5 63 49 Q57 54 50 50.6 Q43 54 37 49Z" fill="#3a2418"/>';
    case "mascara": return '<path d="M28 41 Q50 46 72 41 Q74 60 50 62 Q26 60 28 41Z" fill="' + x + '"/><path d="M32 46 Q50 50 68 46" stroke="#000" stroke-opacity="0.2" stroke-width="1.4" fill="none"/>';
    case "bigodesgato": return '<path d="M26 44 L38 46 M26 50 L38 49 M74 44 L62 46 M74 50 L62 49" stroke="#2b1b12" stroke-width="1.2" stroke-linecap="round"/>';
    default: return "";
  }
}
function extraTopo(a) {
  const x = a.corExtra;
  switch (a.extra) {
    case "fone": return '<path d="M25 36 Q24 5 50 5 Q76 5 75 36" stroke="#26263a" stroke-width="4.4" fill="none"/><rect x="19" y="31" width="10" height="17" rx="5" fill="' + x + '" stroke="#26263a" stroke-width="1.5"/><rect x="71" y="31" width="10" height="17" rx="5" fill="' + x + '" stroke="#26263a" stroke-width="1.5"/>';
    case "bandana": return '<path d="M27 28 Q50 19 73 28 L73 34.5 Q50 26 27 34.5Z" fill="' + x + '"/><path d="M72 29 L88 38 L76 40Z" fill="' + x + '"/><path d="M72 30 L86 44 L75 38Z" fill="' + corAj(x, -0.2) + '"/><rect x="44" y="23" width="12" height="7" rx="1.5" fill="#c0c7d0" stroke="#7d8794" stroke-width="0.8"/>';
    case "faixa": return '<path d="M27 28 Q50 19 73 28 L73 34 Q50 26 27 34Z" fill="' + x + '"/>';
    case "orelhas": return '<path d="M29 22 L30 0 L45 13Z" fill="' + a.corCabelo + '"/><path d="M71 22 L70 0 L55 13Z" fill="' + a.corCabelo + '"/><path d="M32 17 L33 6 L40 13Z" fill="#ff9ec4"/><path d="M68 17 L67 6 L60 13Z" fill="#ff9ec4"/>';
    case "chifres": return '<path d="M32 18 Q24 6 30 -4 Q36 6 40 14Z" fill="' + x + '"/><path d="M68 18 Q76 6 70 -4 Q64 6 60 14Z" fill="' + x + '"/>';
    case "tiara": return '<path d="M32 21 Q50 8 68 21" stroke="#ffd23f" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M46 14 L50 6 L54 14Z" fill="#ffd23f"/><circle cx="50" cy="12" r="2.6" fill="' + x + '"/>';
    default: return "";
  }
}

// Cabeça e rosto (desenhados em coordenadas antigas e ampliados no avatarSVG)
function cabecaSVG(a, posicaoCapaCabelo) {
  const pele = a.pele, borda = corAj(pele, -0.38);
  const partes = cabeloPartes(a);
  return partes[0] +
    '<circle cx="28" cy="38.5" r="4.6" fill="' + pele + '" stroke="' + borda + '" stroke-width="0.9"/>' +
    '<circle cx="72" cy="38.5" r="4.6" fill="' + pele + '" stroke="' + borda + '" stroke-width="0.9"/>' +
    '<circle cx="50" cy="36" r="22" fill="' + pele + '" stroke="' + borda + '" stroke-width="1"/>' +
    '<ellipse cx="42" cy="21" rx="9" ry="3.6" fill="#fff" opacity="0.2"/>' +
    '<ellipse cx="33" cy="46.5" rx="4.8" ry="3" fill="#ff6f91" opacity="0.3"/>' +
    '<ellipse cx="67" cy="46.5" rx="4.8" ry="3" fill="#ff6f91" opacity="0.3"/>' +
    '<path d="M48.6 43.4 Q50 45.2 51.6 43.4" stroke="' + corAj(pele, -0.32) + '" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
    (OLHOS_SVG[a.olhos] || OLHOS_SVG.normal)(a) +
    (BOCAS_SVG[a.boca] || BOCAS_SVG.sorriso) +
    extraRosto(a) +
    partes[1] + chapeuSVG(a.chapeu) + extraTopo(a);
}

// Figura inteira (100x142) ou só o busto (para a cobrinha e os cartões)
function avatarSVG(a, busto) {
  const menina = a.genero === "f";
  const vestido = menina && a.vestido;
  const pele = a.pele, sombraPele = corAj(pele, -0.16);
  const camisa = a.camisa;
  const sombraCam = corAj(camisa, -0.18);
  const sleeve = a.mangaLonga ? 24 : 13;
  const cor = vestido ? a.vestido : camisa;
  let b = "";

  if (a.capa) b += '<path d="M33 80 Q50 73 67 80 L84 131 Q50 143 16 131Z" fill="' + a.capa + '"/><path d="M33 80 Q50 73 67 80 L72 104 Q50 112 28 104Z" fill="#000" opacity="0.13"/>';

  // pernas e sapatos
  if (a.longa && !vestido) {
    b += '<rect x="36" y="108" width="13" height="24" rx="4" fill="' + a.bermuda + '"/><rect x="51" y="108" width="13" height="24" rx="4" fill="' + a.bermuda + '"/>';
  } else {
    b += '<rect x="38" y="118" width="9" height="15" rx="4" fill="' + pele + '"/><rect x="53" y="118" width="9" height="15" rx="4" fill="' + pele + '"/>';
    if (!vestido) b += '<rect x="36" y="108" width="13.5" height="15" rx="4" fill="' + a.bermuda + '"/><rect x="50.5" y="108" width="13.5" height="15" rx="4" fill="' + a.bermuda + '"/>';
  }
  b += '<ellipse cx="42.5" cy="135.5" rx="9.5" ry="4.6" fill="' + a.sapato + '"/><ellipse cx="57.5" cy="135.5" rx="9.5" ry="4.6" fill="' + a.sapato + '"/>' +
       '<ellipse cx="40" cy="134" rx="4" ry="1.6" fill="#fff" opacity="0.35"/><ellipse cx="55" cy="134" rx="4" ry="1.6" fill="#fff" opacity="0.35"/>';

  // braços (manga curta ou longa) e mãos
  b += '<rect x="26.5" y="82" width="10" height="' + (sleeve + 8) + '" rx="5" fill="' + (a.mangaLonga || vestido ? cor : pele) + '"/>' +
       '<rect x="63.5" y="82" width="10" height="' + (sleeve + 8) + '" rx="5" fill="' + (a.mangaLonga || vestido ? cor : pele) + '"/>';
  if (!a.mangaLonga && !vestido) b += '<rect x="26.5" y="81" width="10" height="13" rx="5" fill="' + camisa + '"/><rect x="63.5" y="81" width="10" height="13" rx="5" fill="' + camisa + '"/>';
  b += '<circle cx="31.5" cy="' + (sleeve + 92) + '" r="4.6" fill="' + pele + '"/><circle cx="68.5" cy="' + (sleeve + 92) + '" r="4.6" fill="' + pele + '"/>';

  // pescoço e tronco
  b += '<rect x="44" y="72" width="12" height="14" rx="4" fill="' + sombraPele + '"/>';
  if (vestido) {
    b += '<path d="M36 82 Q50 78 64 82 L75 126 Q50 134 25 126Z" fill="' + a.vestido + '"/><path d="M33 112 Q50 122 67 112 L75 126 Q50 134 25 126Z" fill="#000" opacity="0.1"/><rect x="36" y="95" width="28" height="4" fill="' + corAj(a.vestido, 0.3) + '" opacity="0.7"/>';
  } else {
    b += '<rect x="35" y="80" width="30" height="31" rx="9" fill="' + camisa + '"/><rect x="35" y="101" width="30" height="10" rx="6" fill="' + sombraCam + '" opacity="0.55"/>';
    if (a.camisaTipo === "listras") {
      const faixa = a.corExtra2 || corAj(camisa, luz(camisa) > 0.55 ? -0.55 : 0.7);
      for (let y = 85; y < 106; y += 8) b += '<rect x="35" y="' + y + '" width="30" height="4" fill="' + faixa + '"/>';
    } else if (a.camisaTipo === "numero") {
      b += '<path d="M44 80 Q50 87 56 80Z" fill="' + corAj(camisa, -0.35) + '"/><text x="50" y="102" font-size="15" font-weight="800" text-anchor="middle" fill="' + (luz(camisa) > 0.55 ? "#1b1b2b" : "#ffffff") + '" font-family="Arial,sans-serif">' + (a.numero || "10") + '</text>';
    }
  }
  if (a.colar) b += '<path d="M42 80 Q50 92 58 80" stroke="#ffd23f" stroke-width="2.4" fill="none"/><circle cx="50" cy="90.5" r="3.4" fill="#ffd23f" stroke="#c9961a" stroke-width="0.8"/>';
  if (a.extra === "cachecol") b += '<path d="M38 77 Q50 85 62 77 L63 85 Q50 92 37 85Z" fill="' + a.corExtra + '"/><path d="M58 84 L68 104 L60 106 L54 88Z" fill="' + corAj(a.corExtra, -0.18) + '"/>';

  const cabeca = '<g transform="translate(50 52) scale(1.22) translate(-50 -36)">' + cabecaSVG(a) + "</g>";
  const caixa = busto ? 'viewBox="8 -10 84 116" width="84" height="116"' : 'viewBox="0 0 100 142"';
  return '<svg ' + (busto ? "" : 'class="av-svg" ') + caixa + ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + b + cabeca + "</svg>";
}



// Artes originais (montagens de emoji) dos personagens e chefes inspirados em memes "brain rot"
const ARTES = {
  tungtung:    [["🪵", 0, 0.05, 1.15], ["👀", 0, -0.02, 0.5], ["🏏", 0.62, 0.15, 0.7]],
  tralalero:   [["🦈", 0, -0.08, 1.1], ["👟", -0.3, 0.52, 0.5], ["👟", 0, 0.58, 0.5], ["👟", 0.3, 0.52, 0.5]],
  bombardiro:  [["🐊", 0, 0.15, 0.95], ["✈️", 0, -0.28, 0.8], ["💣", 0.34, 0.5, 0.4]],
  ballerina:   [["☕", 0, 0.12, 0.95], ["🎀", 0, -0.42, 0.5], ["🩰", 0, 0.55, 0.4]],
  chimpanzini: [["🍌", 0, 0.12, 1.1], ["🐵", 0, -0.34, 0.62]],
  lirili:      [["🌵", 0, 0.1, 1.05], ["🐘", 0, -0.32, 0.6]],
  patapim:     [["🌳", 0, 0.05, 1.05], ["👃", 0, 0.1, 0.45], ["🦶", -0.25, 0.55, 0.35], ["🦶", 0.25, 0.55, 0.35]],
  cappuccino:  [["☕", 0, 0.2, 0.9], ["🥷", 0, -0.32, 0.6], ["🗡️", 0.42, 0.1, 0.4]],
  bombombini:  [["🪿", 0, 0.1, 1], ["💣", 0.32, 0.5, 0.4], ["✈️", -0.1, -0.38, 0.45]],
  trippi:      [["🦐", 0, 0.05, 1], ["🐱", 0, -0.35, 0.55]]
};

/* ================================================================
   PERSONAGENS (coleção, loja e time da cobrinha)
   São todos originais: inspirados em estilos (streamers, craques, animes), sem nomes nem rostos de pessoas
   ou personagens reais.
   ================================================================ */

const RARIDADES = {
  comum:    { nome: "Comum",    preco: 200,  cor: "#8fb3c9" },
  raro:     { nome: "Raro",     preco: 500,  cor: "#4f9dff" },
  epico:    { nome: "Épico",    preco: 1200, cor: "#b57cff" },
  lendario: { nome: "Lendário", preco: 2500, cor: "#ffb703" }
};

const CATEGORIAS = [
  { id: "turma",      nome: "🎓 Turma" },
  { id: "influencer", nome: "⭐ Influencers" },
  { id: "craque",     nome: "⚽ Craques" },
  { id: "anime",      nome: "🎌 Animes" },
  { id: "brainrot",   nome: "🧠 Brain Rot" }
];

const av = o => ({ ...avatarPadrao(), ...o });
const PERS = [
  // Turma (grátis) e secretos
  { id: "t_aluno",     cat: "turma", nome: "Aluno Nota 10",   raridade: "comum", gratis: true, desc: "Sempre de óculos e caderno em dia",
    cfg: av({ pele: "#f1c27d", cabelo: "curto", corCabelo: "#2b1b12", olhos: "oculos", camisa: "#2a6fdb", bermuda: "#222222" }) },
  { id: "t_capita",    cat: "turma", nome: "Capitã do Time",  raridade: "comum", gratis: true, desc: "Lidera a turma no recreio",
    cfg: av({ genero: "f", pele: "#c68642", cabelo: "rabo", corCabelo: "#2b1b12", olhos: "feliz", camisa: "#e63946", camisaTipo: "numero", numero: "7", bermuda: "#ffffff", extra: "faixa", corExtra: "#ffd23f" }) },
  { id: "t_explorador", cat: "turma", nome: "Explorador",     raridade: "comum", gratis: true, desc: "Adora mapas e trilhas",
    cfg: av({ pele: "#e0ac69", cabelo: "curto", corCabelo: "#6b3e1e", chapeu: "palha", camisa: "#2ecc71", bermuda: "#6b4a2b", boca: "riso" }) },
  { id: "s_tiozao",    cat: "turma", nome: "Tiozão do Zap",   raridade: "epico", secreto: true, desc: "Manda bom dia em tudo",
    cfg: av({ pele: "#ffe0bd", cabelo: "nenhum", olhos: "feliz", boca: "riso", extra: "bigode", camisa: "#19c3c9", camisaTipo: "listras", bermuda: "#222222" }) },
  { id: "s_cabra",     cat: "turma", nome: "Cabra Capitã",    raridade: "epico", secreto: true, desc: "Teimosa e corajosa",
    cfg: av({ genero: "f", pele: "#8d5524", cabelo: "trancas", corCabelo: "#f2f2f2", chapeu: "pirata", extra: "chifres", corExtra: "#d9c7a0", olhos: "estrela", boca: "lingua", vestido: "#7a3cff" }) },
  { id: "s_fantasma",  cat: "turma", nome: "Fantasma do Cais", raridade: "lendario", secreto: true, desc: "Assombra a tripulação",
    cfg: av({ pele: "#e8f1ff", cabelo: "nenhum", olhos: "sono", boca: "surpreso", extra: "cachecol", corExtra: "#9bb6ff", camisa: "#ffffff", capa: "#dfe9ff", bermuda: "#cfd8ff", sapato: "#cfd8ff" }) },
  { id: "s_neguebas",   cat: "turma", nome: "Neguebas, o Capitão", raridade: "lendario", secreto: true, exclusivo: true, desc: "Mascote do jogo. Só quem usa o código ganha!",
    cfg: av({ pele: "#c68642", cabelo: "cacheado", corCabelo: "#2b1b12", chapeu: "coroa", olhos: "escuros", boca: "riso", colar: true, camisa: "#ffd23f", camisaTipo: "listras", corExtra2: "#222222", capa: "#e63946", bermuda: "#222222", sapato: "#ffd23f" }) },
  { id: "s_magnata",   cat: "turma", nome: "Magnata Recebão", raridade: "lendario", secreto: true, desc: "Acha que é dono de tudo. RECEBA!",
    cfg: av({ pele: "#e0ac69", cabelo: "nenhum", chapeu: "cartola", extra: "bigode", colar: true, olhos: "estrela", boca: "riso", camisa: "#7a1f2a", bermuda: "#222222" }) },

  // Influencers
  { id: "i_streamer",  cat: "influencer", nome: "Streamer Gamer", raridade: "raro", desc: "Joga e narra ao vivo",
    cfg: av({ pele: "#f1c27d", cabelo: "lateral", corCabelo: "#7a3cff", extra: "fone", corExtra: "#19c3c9", olhos: "anime", corOlhos: "#19c3c9", camisa: "#222222", bermuda: "#2a6fdb" }) },
  { id: "i_dancarina", cat: "influencer", nome: "Dançarina Viral", raridade: "raro", desc: "Cada vídeo vira moda",
    cfg: av({ genero: "f", pele: "#c68642", cabelo: "comprido", corCabelo: "#2b1b12", olhos: "anime2", corOlhos: "#6b3e1e", boca: "riso", vestido: "#ff6fb1", colar: true }) },
  { id: "i_youtuber",  cat: "influencer", nome: "Youtuber de Ciências", raridade: "comum", desc: "Faz experimentos em casa",
    cfg: av({ pele: "#ffe0bd", cabelo: "espetado", corCabelo: "#6b3e1e", olhos: "oculos", camisa: "#ffffff", mangaLonga: true, bermuda: "#2a6fdb", longa: true, boca: "riso" }) },
  { id: "i_chef",      cat: "influencer", nome: "Chef Influencer", raridade: "comum", desc: "Receitas em 30 segundos",
    cfg: av({ genero: "f", pele: "#e0ac69", cabelo: "coque", corCabelo: "#2b1b12", chapeu: "chef", olhos: "feliz", boca: "riso", camisa: "#ffffff", mangaLonga: true, bermuda: "#222222", longa: true }) },
  { id: "i_skatista",  cat: "influencer", nome: "Skatista Radical", raridade: "raro", desc: "Manobras impossíveis",
    cfg: av({ pele: "#8d5524", cabelo: "moicano", corCabelo: "#2a7fff", olhos: "escuros", camisa: "#ff9f1c", bermuda: "#2a6fdb", sapato: "#ffffff", boca: "lingua" }) },
  { id: "i_vlogger",   cat: "influencer", nome: "Vlogger Viajante", raridade: "comum", desc: "Já conheceu 40 países",
    cfg: av({ genero: "f", pele: "#ffe0bd", cabelo: "trancas", corCabelo: "#c9a227", chapeu: "palha", camisa: "#19c3c9", camisaTipo: "listras", bermuda: "#ffffff" }) },
  { id: "i_cantora",   cat: "influencer", nome: "Cantora Pop", raridade: "epico", desc: "Hit atrás de hit",
    cfg: av({ genero: "f", pele: "#f1c27d", cabelo: "bob", corCabelo: "#ff6fb1", extra: "tiara", corExtra: "#7a3cff", olhos: "anime2", corOlhos: "#ff6fb1", vestido: "#7a3cff" }) },
  { id: "i_mestre",    cat: "influencer", nome: "Mestre dos Games", raridade: "epico", desc: "Campeão de todos os jogos",
    cfg: av({ pele: "#c68642", cabelo: "afro", corCabelo: "#2b1b12", extra: "fone", corExtra: "#e63946", olhos: "escuros", camisa: "#2ecc71", camisaTipo: "numero", numero: "99", bermuda: "#222222" }) },

  // Craques
  { id: "c_camisa10",  cat: "craque", nome: "Craque Camisa 10", raridade: "epico", desc: "Faz mágica com a bola",
    cfg: av({ pele: "#c68642", cabelo: "curto", corCabelo: "#2b1b12", olhos: "feliz", boca: "riso", camisa: "#ffd23f", camisaTipo: "numero", numero: "10", bermuda: "#2a6fdb", sapato: "#ffffff" }) },
  { id: "c_artilheiro", cat: "craque", nome: "Artilheiro", raridade: "raro", desc: "Gol em todo jogo",
    cfg: av({ pele: "#ffe0bd", cabelo: "espetado", corCabelo: "#c9a227", camisa: "#e63946", camisaTipo: "numero", numero: "9", bermuda: "#ffffff", sapato: "#222222" }) },
  { id: "c_goleiro",   cat: "craque", nome: "Goleiro Paredão", raridade: "raro", desc: "Nada passa por ele",
    cfg: av({ pele: "#8d5524", cabelo: "curto", corCabelo: "#2b1b12", chapeu: "bone", camisa: "#2ecc71", camisaTipo: "numero", numero: "1", mangaLonga: true, bermuda: "#222222" }) },
  { id: "c_zagueiro",  cat: "craque", nome: "Zagueirão", raridade: "comum", desc: "Muralha da defesa",
    cfg: av({ pele: "#5c3a21", cabelo: "nenhum", olhos: "bravo", camisa: "#2a6fdb", camisaTipo: "numero", numero: "4", bermuda: "#ffffff" }) },
  { id: "c_meia",      cat: "craque", nome: "Meia Driblador", raridade: "comum", desc: "Ninguém tira a bola",
    cfg: av({ pele: "#e0ac69", cabelo: "lateral", corCabelo: "#2b1b12", olhos: "feliz", camisa: "#2a6fdb", camisaTipo: "listras", bermuda: "#ffffff" }) },
  { id: "c_capitao",   cat: "craque", nome: "Capitão da Seleção", raridade: "lendario", desc: "Levanta todas as taças",
    cfg: av({ pele: "#f1c27d", cabelo: "curto", corCabelo: "#6b3e1e", extra: "faixa", corExtra: "#2a6fdb", boca: "riso", camisa: "#ffd23f", camisaTipo: "numero", numero: "5", bermuda: "#2a6fdb", sapato: "#ffffff" }) },
  { id: "c_craquea",   cat: "craque", nome: "Craque Camisa 7", raridade: "epico", desc: "Velocidade e drible",
    cfg: av({ genero: "f", pele: "#c68642", cabelo: "rabo", corCabelo: "#2b1b12", olhos: "feliz", extra: "faixa", corExtra: "#ffffff", camisa: "#e63946", camisaTipo: "numero", numero: "7", bermuda: "#ffffff" }) },
  { id: "c_artilheira", cat: "craque", nome: "Artilheira", raridade: "raro", desc: "Chute de pé esquerdo",
    cfg: av({ genero: "f", pele: "#ffe0bd", cabelo: "trancas", corCabelo: "#ff9f1c", camisa: "#2ecc71", camisaTipo: "numero", numero: "11", bermuda: "#222222", boca: "riso" }) },
  { id: "c_veterano",  cat: "craque", nome: "Craque Veterano", raridade: "raro", desc: "Experiência vale ouro",
    cfg: av({ pele: "#e0ac69", cabelo: "curto", corCabelo: "#f2f2f2", extra: "bigode", camisa: "#ffffff", camisaTipo: "numero", numero: "8", bermuda: "#2a6fdb" }) },

  // Animes (personagens originais)
  { id: "a_ninja",     cat: "anime", nome: "Ninja Raio", raridade: "raro", desc: "Rápido como um relâmpago",
    cfg: av({ pele: "#f1c27d", cabelo: "espetado", corCabelo: "#2a7fff", extra: "bandana", corExtra: "#222222", olhos: "anime", corOlhos: "#2a7fff", camisa: "#ff9f1c", bermuda: "#222222", longa: true }) },
  { id: "a_mago",      cat: "anime", nome: "Maga Estrela", raridade: "epico", desc: "Feitiços de luz",
    cfg: av({ genero: "f", pele: "#ffe0bd", cabelo: "comprido", corCabelo: "#7a3cff", chapeu: "bruxo", olhos: "anime2", corOlhos: "#ffd23f", vestido: "#2d2a6e", capa: "#7a3cff" }) },
  { id: "a_samurai",   cat: "anime", nome: "Samurai Lua", raridade: "epico", desc: "Honra acima de tudo",
    cfg: av({ pele: "#ffe0bd", cabelo: "rabo", corCabelo: "#222222", extra: "cachecol", corExtra: "#e63946", olhos: "anime", corOlhos: "#8a2b2b", camisa: "#ffffff", mangaLonga: true, bermuda: "#222222", longa: true, boca: "serio" }) },
  { id: "a_magica",    cat: "anime", nome: "Garota Mágica", raridade: "raro", desc: "Transforma o dia em festa",
    cfg: av({ genero: "f", pele: "#ffe0bd", cabelo: "trancas", corCabelo: "#ff6fb1", extra: "tiara", corExtra: "#e63946", olhos: "anime2", corOlhos: "#ff6fb1", vestido: "#ff8fc7" }) },
  { id: "a_fogo",      cat: "anime", nome: "Herói de Fogo", raridade: "raro", desc: "Coração em chamas",
    cfg: av({ pele: "#e0ac69", cabelo: "espetado", corCabelo: "#e63946", extra: "cachecol", corExtra: "#ff9f1c", olhos: "anime", corOlhos: "#ff9f1c", camisa: "#222222", capa: "#e63946", bermuda: "#2b2b3a", longa: true }) },
  { id: "a_cacador",   cat: "anime", nome: "Caçador Verde", raridade: "raro", desc: "Rastreia qualquer pista",
    cfg: av({ pele: "#f1c27d", cabelo: "espetado", corCabelo: "#2ecc71", olhos: "anime", corOlhos: "#2ecc71", camisa: "#3a7d44", capa: "#1e5a2c", bermuda: "#4a3b2a", longa: true }) },
  { id: "a_gelo",      cat: "anime", nome: "Guerreira do Gelo", raridade: "epico", desc: "Calma e invencível",
    cfg: av({ genero: "f", pele: "#ffe8e0", cabelo: "comprido", corCabelo: "#f2f2f2", extra: "tiara", corExtra: "#4fb6f2", olhos: "anime2", corOlhos: "#4fb6f2", vestido: "#5ab0ff" }) },
  { id: "a_detetive",  cat: "anime", nome: "Detetive Sombra", raridade: "comum", desc: "Resolve qualquer mistério",
    cfg: av({ pele: "#ffe0bd", cabelo: "bob", corCabelo: "#222222", olhos: "oculos", boca: "serio", camisa: "#8a6a3b", mangaLonga: true, bermuda: "#3b3b4f", longa: true }) },
  { id: "a_gatinha",   cat: "anime", nome: "Gatinha Ninja", raridade: "raro", desc: "Silenciosa e ágil",
    cfg: av({ genero: "f", pele: "#f1c27d", cabelo: "curto", corCabelo: "#7a3cff", extra: "orelhas", olhos: "anime", corOlhos: "#ffd23f", camisa: "#222222", bermuda: "#7a3cff", boca: "lingua" }) },
  { id: "a_dragao",    cat: "anime", nome: "Dragão Jovem", raridade: "lendario", desc: "Sopra fogo de verdade",
    cfg: av({ pele: "#e0ac69", cabelo: "moicano", corCabelo: "#ffd23f", extra: "chifres", corExtra: "#e63946", olhos: "anime", corOlhos: "#e63946", camisa: "#c0392b", capa: "#ffd23f", bermuda: "#222222", longa: true }) },

  // ---- mais influencers ----
  { id: "i_fitness",   cat: "influencer", nome: "Influencer Fitness", raridade: "comum", desc: "Treino todo dia, 6 da manhã",
    cfg: av({ genero: "f", pele: "#e0ac69", cabelo: "rabo", corCabelo: "#c9a227", extra: "faixa", corExtra: "#ff6fb1", olhos: "feliz", boca: "riso", camisa: "#ff6fb1", bermuda: "#222222" }) },
  { id: "i_comediante", cat: "influencer", nome: "Comediante", raridade: "comum", desc: "Faz a turma rir em 15 segundos",
    cfg: av({ pele: "#f1c27d", cabelo: "cacheado", corCabelo: "#2b1b12", olhos: "estrela", boca: "lingua", camisa: "#ffd23f", camisaTipo: "listras", bermuda: "#2a6fdb" }) },
  { id: "i_beauty",    cat: "influencer", nome: "Beauty Star", raridade: "raro", desc: "Dica de estilo para todo mundo",
    cfg: av({ genero: "f", pele: "#ffe0bd", cabelo: "comprido", corCabelo: "#d9381e", olhos: "anime2", corOlhos: "#8a2b2b", colar: true, vestido: "#e63946" }) },
  { id: "i_tech",      cat: "influencer", nome: "Tech Reviewer", raridade: "comum", desc: "Testa todo gadget do mundo",
    cfg: av({ pele: "#c68642", cabelo: "curto", corCabelo: "#2b1b12", olhos: "oculos", extra: "fone", corExtra: "#2a6fdb", camisa: "#222222", bermuda: "#555566" }) },
  // ---- mais craques ----
  { id: "c_lateral",   cat: "craque", nome: "Lateral Foguete", raridade: "comum", desc: "Corre o campo inteiro",
    cfg: av({ pele: "#5c3a21", cabelo: "moicano", corCabelo: "#ffd23f", camisa: "#ff9f1c", camisaTipo: "numero", numero: "2", bermuda: "#222222" }) },
  { id: "c_volante",   cat: "craque", nome: "Volante Guerreiro", raridade: "comum", desc: "Rouba todas as bolas",
    cfg: av({ pele: "#e0ac69", cabelo: "curto", corCabelo: "#2b1b12", olhos: "bravo", camisa: "#7a3cff", camisaTipo: "numero", numero: "6", bermuda: "#ffffff" }) },
  { id: "c_goleira",   cat: "craque", nome: "Goleira Mirim", raridade: "raro", desc: "Pega até pênalti",
    cfg: av({ genero: "f", pele: "#f1c27d", cabelo: "bob", corCabelo: "#2b1b12", chapeu: "bone", camisa: "#19c3c9", camisaTipo: "numero", numero: "1", mangaLonga: true, bermuda: "#222222" }) },
  { id: "c_tecnico",   cat: "craque", nome: "Professor Técnico", raridade: "raro", desc: "Prancheta e muita estratégia",
    cfg: av({ pele: "#ffe0bd", cabelo: "nenhum", extra: "bigode", olhos: "escuros", camisa: "#222222", mangaLonga: true, bermuda: "#222222", longa: true }) },

  // ---- Brain Rot (montagens originais de emoji, inspiradas em memes da internet) ----
  { id: "b_tungtung",  cat: "brainrot", nome: "Tung Tung Tung Sahur", raridade: "epico", desc: "Acorda a vizinhança com o bastão", arte: ARTES.tungtung },
  { id: "b_tralalero", cat: "brainrot", nome: "Tralalero Tralala", raridade: "lendario", desc: "O tubarão de três tênis", arte: ARTES.tralalero },
  { id: "b_bombardiro", cat: "brainrot", nome: "Bombardiro Crocodilo", raridade: "epico", desc: "Jacaré bombardeiro", arte: ARTES.bombardiro },
  { id: "b_ballerina", cat: "brainrot", nome: "Ballerina Cappuccina", raridade: "epico", desc: "Dança com cabeça de xícara", arte: ARTES.ballerina },
  { id: "b_chimpanzini", cat: "brainrot", nome: "Chimpanzini Bananini", raridade: "epico", desc: "Macaco-banana", arte: ARTES.chimpanzini },
  { id: "b_lirili",    cat: "brainrot", nome: "Lirili Larilà", raridade: "raro", desc: "Cacto com tromba", arte: ARTES.lirili },
  { id: "b_patapim",   cat: "brainrot", nome: "Brr Brr Patapim", raridade: "raro", desc: "Árvore narigudona", arte: ARTES.patapim },
  { id: "b_cappuccino", cat: "brainrot", nome: "Cappuccino Assassino", raridade: "raro", desc: "Ninja de café", arte: ARTES.cappuccino },
  { id: "b_bombombini", cat: "brainrot", nome: "Bombombini Gusini", raridade: "raro", desc: "Ganso bombardeiro", arte: ARTES.bombombini },
  { id: "b_trippi",    cat: "brainrot", nome: "Trippi Troppi", raridade: "comum", desc: "Camarão com cara de gato", arte: ARTES.trippi }
];
const SECRETOS = PERS.filter(p => p.secreto);

function possuiPersonagem(id) {
  const p = PERS.find(x => x.id === id);
  return Boolean(p && (p.gratis || save.personagens.includes(id) || save.secretos.includes(id)));
}

// O avatar usado nas fases: o seu personalizado ou um personagem da coleção
// Pré-visualização em HTML de uma montagem de emojis
function arteHTML(arte, tam) {
  return '<div class="arte-emoji" style="width:' + tam + 'px;height:' + tam + 'px">' + arte.map(p =>
    '<span style="font-size:' + Math.round(p[3] * tam * 0.85) + 'px;left:' + (50 + p[1] * 100) + '%;top:' + (50 + p[2] * 100) + '%">' + p[0] + "</span>").join("") + "</div>";
}

// Figura de um personagem em HTML (retrato desenhado ou montagem de emojis)
function figuraPers(p, tam) {
  return p.arte ? arteHTML(p.arte, tam) : avatarSVG(p.cfg, true).replace('width="84" height="116"', 'width="' + Math.round(tam * 0.72) + '" height="' + tam + '"');
}

function avatarEmUso() {
  const p = save.usando && possuiPersonagem(save.usando) ? PERS.find(x => x.id === save.usando) : null;
  return p ? p.cfg : save.avatar;
}

/* Cronômetro das perguntas e bônus */
const TEMPO_POR_NIVEL = { 1: 15, 2: 20, 3: 25, 4: 30 };
const LIMITE_RAPIDO = 0.6;   // acertar com 60% do tempo sobrando = resposta rápida
const MIN_RESPOSTAS_RANKING = 5;

/* Código promocional (maiúsculas e acentos não importam) */
const CODIGO_VIP = "neguebas";
const MOEDAS_VIP = 1000000;

/* Filtro de nomes ofensivos (jogo escolar) */
const NOMES_BLOQUEADOS_CONTEM = ["nigg", "caralho", "buceta", "viado", "merda", "porra", "cuzao", "retardad"];
const NOMES_BLOQUEADOS_INICIO = ["puta", "fdp", "pqp", "vsf", "vadia"];

/* ================================================================
   3. PROGRESSO SALVO
   ================================================================ */

const CHAVE_SAVE = "ilhas-esquecidas-v1";
const CHAVE_ANTIGA = "tesouro-dos-numeros-v2"; // save da versão anterior (migração)

function padraoSave() {
  return {
    versao: 3,
    nome: "",
    moedas: 0,
    xp: 0,
    vip: false,
    som: true,
    campanha: 0,          // quantas fases já foram concluídas
    historia: {},         // cenas de história já vistas
    recentes: {},         // perguntas usadas na última tentativa de cada fase
    barcos: ["veleiro"],
    barcoAtual: "veleiro",
    melhorias: { casco: 0, canhao: 0, reparo: 0, ima: 0, relogio: 0, livro: 0 },
    itens: [],
    equip: { mascote: null, tripulante: null, vela: null, canhao: null, cor: null },
    avatar: avatarPadrao(),
    stats: {
      matematica: { c: 0, t: 0 }, ciencias: { c: 0, t: 0 }, geografia: { c: 0, t: 0 },
      historia: { c: 0, t: 0 }, portugues: { c: 0, t: 0 }
    },
    recordes: { partidas: 0, vitorias: 0, navios: 0, maiorCombo: 0, maiorTime: 0 },
    ultimoBonus: "",
    sequencia: 0,
    vidas: 0,
    defesas: 0,
    equipamentos: [],
    carregados: [],
    secretos: [],
    falhasSecreto: 0,
    missoes: {},
    personagens: [],   // personagens comprados
    elenco: [],        // time da cobrinha (até 6)
    usando: null       // personagem usado como avatar
  };
}

// Junta um save (de qualquer versão) com os valores padrão: migrações simples e campos novos
function normalizarSave(lido) {
  const base = padraoSave();
  if (!lido || typeof lido !== "object") return base;
  const res = {
    ...base,
    ...lido,
    historia: { ...base.historia, ...lido.historia },
    recentes: { ...base.recentes, ...lido.recentes },
    melhorias: { ...base.melhorias, ...lido.melhorias },
    equip: { ...base.equip, ...lido.equip },
    avatar: { ...base.avatar, ...lido.avatar },
    stats: { ...base.stats, ...lido.stats },
    recordes: { ...base.recordes, ...lido.recordes },
    missoes: { ...base.missoes, ...lido.missoes },
    itens: Array.isArray(lido.itens) ? lido.itens : [],
    barcos: Array.isArray(lido.barcos) ? lido.barcos : base.barcos,
    equipamentos: Array.isArray(lido.equipamentos) ? lido.equipamentos : [],
    carregados: (Array.isArray(lido.carregados) ? lido.carregados : []).slice(0, MAX_EQUIPAMENTOS),
    secretos: Array.isArray(lido.secretos) ? lido.secretos : [],
    personagens: Array.isArray(lido.personagens) ? lido.personagens : [],
    elenco: (Array.isArray(lido.elenco) ? lido.elenco : []).slice(0, MAX_ELENCO)
  };
  // Versão 2 colocou o chefe do barco na posição 3; a versão 3 colocou a Arena antes do Vulcão.
  // Cada inserção avança a campanha de quem já tinha passado daquele ponto.
  const v = lido.versao || 1;
  if (v < 2 && res.campanha >= 3) res.campanha++;
  if (v < 3 && res.campanha >= 6) res.campanha++;
  res.versao = 3;
  // Quem já usou o código promocional ganha o personagem secreto exclusivo
  if (res.vip && !res.secretos.includes("s_neguebas")) res.secretos.push("s_neguebas");
  return res;
}

/* ================================================================
   BANCO DE JOGADORES
   - Banco local: vários jogadores no mesmo aparelho, cada um com apelido único e o próprio progresso.
   - Banco online (opcional): preencha NUVEM com um projeto Supabase gratuito. Com ele, o apelido é único
     entre todos os aparelhos e o progresso acompanha o jogador. Sem isso, tudo funciona só neste aparelho.

   Tabela do Supabase (rode no SQL Editor):
     create table jogadores (
       chave text primary key, apelido text not null, pin_hash text,
       xp integer default 0, nivel integer default 1, moedas integer default 0, campanha integer default 0,
       personagens integer default 0, maior_time integer default 0,
       dados jsonb, atualizado timestamptz default now()
     );
     alter table jogadores enable row level security;
     create policy "ler" on jogadores for select using (true);
     create policy "criar" on jogadores for insert with check (true);
     create policy "atualizar" on jogadores for update using (true) with check (true);

   Cuidado: guarde só apelido e progresso (nunca nome real, telefone ou e-mail). A senha de 4 números
   serve para evitar brincadeiras entre colegas e não é uma proteção forte.
   ================================================================ */

const CHAVE_BD = "neguebas-bd-v1";
const NUVEM = { url: "", chave: "" };
const nuvemAtiva = () => Boolean(NUVEM.url && NUVEM.chave);
let estadoNuvem = "off"; // off | ok | erro

const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chaveApelido = nick => normalizar(nick);

function validarApelido(nick) {
  const n = Array.from(nick).length;
  if (n < 3) return "O apelido precisa ter pelo menos 3 caracteres.";
  if (n > 10) return "O apelido pode ter no máximo 10 caracteres.";
  if (!/^[\p{L}\p{N} _.-]+$/u.test(nick)) return "Use só letras, números, espaço, _ . ou -.";
  if (chaveApelido(nick).length < 3) return "Use pelo menos 3 letras ou números.";
  if (nomeProibido(nick)) return "Esse apelido não pode ser usado. Escolha outro, por favor.";
  return "";
}

// Hash simples (cyrb53) da senha de 4 números
function hashPin(chave, pin) {
  const texto = chave + ":" + pin;
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < texto.length; i++) {
    const c = texto.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 2654435761);
    h2 = Math.imul(h2 ^ c, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

function carregarBd() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CHAVE_BD));
    if (guardado && guardado.usuarios) return guardado;
  } catch (erro) { /* começa um banco novo */ }
  const novo = { v: 1, atual: null, usuarios: {} };
  // Migra o save da versão com um único jogador por aparelho
  try {
    const bruto = localStorage.getItem(CHAVE_SAVE) || localStorage.getItem(CHAVE_ANTIGA);
    if (bruto) {
      const lido = normalizarSave(JSON.parse(bruto));
      if (lido.xp > 0 || lido.campanha > 0 || lido.nome) {
        const nome = (lido.nome || "").trim();
        const nick = validarApelido(nome) === "" ? nome : "Jogador";
        const chave = chaveApelido(nick);
        lido.nome = nick;
        novo.usuarios[chave] = { chave, apelido: nick, pin: null, criado: Date.now(), acesso: Date.now(), save: lido };
        novo.atual = chave;
      }
    }
  } catch (erro) { /* sem migração */ }
  return novo;
}

let bd = carregarBd();
let save = bd.atual && bd.usuarios[bd.atual] ? bd.usuarios[bd.atual].save : padraoSave();

function gravarLocal() {
  try {
    localStorage.setItem(CHAVE_BD, JSON.stringify(bd));
  } catch (erro) {
    // sem armazenamento: o jogo continua, só não guarda o progresso
  }
}

// Salva o progresso do jogador atual (e agenda o envio ao banco online)
function salvar() {
  if (!bd.atual || !bd.usuarios[bd.atual]) return;
  const u = bd.usuarios[bd.atual];
  save.atualizado = Date.now();
  u.save = save;
  u.acesso = Date.now();
  gravarLocal();
  agendarNuvem();
}

/* ---------- Banco online (Supabase / PostgREST) ---------- */

let temporizadorNuvem = null;

async function nuvem(caminho, opcoes) {
  const ctl = new AbortController();
  const limite = setTimeout(() => ctl.abort(), 7000);
  try {
    const r = await fetch(NUVEM.url.replace(/\/$/, "") + "/rest/v1/" + caminho, {
      ...opcoes,
      signal: ctl.signal,
      headers: { apikey: NUVEM.chave, Authorization: "Bearer " + NUVEM.chave, "Content-Type": "application/json", ...((opcoes && opcoes.headers) || {}) }
    });
    if (!r.ok) throw new Error("nuvem " + r.status);
    const texto = await r.text();
    return texto ? JSON.parse(texto) : null;
  } finally {
    clearTimeout(limite);
  }
}

const nuvemBuscar = chave => nuvem("jogadores?chave=eq." + encodeURIComponent(chave) + "&select=*").then(l => (l && l[0]) || null);
const nuvemRanking = () => nuvem("jogadores?select=apelido,xp,nivel,personagens,maior_time,campanha&order=xp.desc&limit=15");

function linhaNuvem(u) {
  const sv = u.save;
  return {
    chave: u.chave, apelido: u.apelido, pin_hash: u.pin || null,
    xp: sv.xp, nivel: infoNivel(sv.xp).nivel, moedas: sv.moedas, campanha: sv.campanha,
    personagens: sv.personagens.length + sv.secretos.length, maior_time: (sv.recordes && sv.recordes.maiorTime) || 0,
    dados: sv, atualizado: new Date().toISOString()
  };
}

const nuvemSalvar = u => nuvem("jogadores?on_conflict=chave", { method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify(linhaNuvem(u)) });

function agendarNuvem() {
  if (!nuvemAtiva() || !bd.atual) return;
  clearTimeout(temporizadorNuvem);
  temporizadorNuvem = setTimeout(sincronizar, 2500);
}

async function sincronizar() {
  const u = bd.usuarios[bd.atual];
  if (!nuvemAtiva() || !u) return;
  try {
    await nuvemSalvar(u);
    estadoNuvem = "ok";
  } catch (erro) {
    estadoNuvem = "erro";
  }
  atualizarEstadoBd();
}

// Ao entrar: se a cópia online for mais nova (jogou em outro aparelho), usa a online
async function trazerDaNuvem() {
  if (!nuvemAtiva() || !bd.atual) return;
  const chave = bd.atual;
  try {
    const linha = await nuvemBuscar(chave);
    if (chave !== bd.atual) return;
    estadoNuvem = "ok";
    if (linha && linha.dados && (linha.dados.atualizado || 0) > (save.atualizado || 0)) {
      const u = bd.usuarios[chave];
      u.save = normalizarSave(linha.dados);
      u.save.nome = u.apelido;
      save = u.save;
      gravarLocal();
      atualizarMenu();
      mostrarAviso("☁️ Progresso carregado do banco online!");
    } else {
      await sincronizar();
    }
  } catch (erro) {
    estadoNuvem = "erro";
  }
  atualizarEstadoBd();
}

function atualizarEstadoBd() {
  const texto = !nuvemAtiva() ? "💾 Banco neste aparelho (o banco online ainda não foi configurado)"
    : estadoNuvem === "erro" ? "☁️ Sem conexão: o progresso fica salvo neste aparelho"
    : "☁️ Banco online ligado";
  ["banco-estado", "menu-banco"].forEach(id => { if ($(id)) $(id).textContent = texto; });
}

const fmt = n => Number(n).toLocaleString("pt-BR");
const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rnd = (a, b) => a + Math.random() * (b - a);

// Cada nível n exige 100 × n de XP para chegar ao próximo
function infoNivel(xp) {
  let nivel = 1;
  let resto = xp;
  while (nivel < NIVEL_MAXIMO && resto >= 100 * nivel) {
    resto -= 100 * nivel;
    nivel++;
  }
  return { nivel, resto, necessario: nivel < NIVEL_MAXIMO ? 100 * nivel : 0 };
}

function xpParaNivelMaximo() {
  let total = 0;
  for (let n = 1; n < NIVEL_MAXIMO; n++) total += 100 * n;
  return total;
}

function barcoEquipado() {
  return BARCOS.find(b => b.id === save.barcoAtual) || BARCOS[0];
}

function itemEquipado(slot) {
  return ITENS.find(i => i.id === save.equip[slot]) || null;
}

// Atributos do barco + melhorias + equipamentos carregados (no máximo 2)
function estatisticas() {
  const barco = barcoEquipado();
  const m = save.melhorias;
  const extra = { vida: 0, dano: 0, tempo: 0, moeda: 0 };
  save.carregados.slice(0, MAX_EQUIPAMENTOS).forEach(id => {
    const e = EQUIPAMENTOS.find(x => x.id === id);
    if (!e) return;
    extra.vida += e.vida || 0;
    extra.dano += e.dano || 0;
    extra.tempo += e.tempo || 0;
    extra.moeda += e.moeda || 0;
  });
  return {
    barco,
    vidaMax: barco.vida + 10 * m.casco + extra.vida,
    dano: barco.dano + 5 * m.canhao + extra.dano,
    cura: 25 + 5 * m.reparo,
    bonusMoeda: barco.moedas + 0.1 * m.ima + extra.moeda,
    tempoExtra: 2 * m.relogio + extra.tempo,
    bonusXp: 0.1 * m.livro
  };
}

// Barco com os itens do Estaleiro e o avatar no convés (menu e estaleiro)
function interiorBarco() {
  const cor = itemEquipado("cor");
  let html = '<span class="b-emoji"' + (cor ? ' style="filter:' + cor.filtro + '"' : "") + ">" + barcoEquipado().emoji + "</span>";
  html += '<span class="deco deco-avatar">' + avatarSVG(avatarEmUso()) + "</span>";
  ["vela", "mascote", "tripulante"].forEach(slot => {
    const item = itemEquipado(slot);
    if (item) html += '<span class="deco deco-' + slot + '">' + item.emoji + "</span>";
  });
  return html;
}

/* ================================================================
   4. ESTADO E ELEMENTOS
   ================================================================ */

let fase = null, faseIdx = 0, G = null, M = null, stats = null;
let raf = 0, ultimoT = 0, pausado = false, acc = 0;
let idPartida = 0; // muda a cada partida/saída para cancelar temporizadores antigos
let relogioQ = null, qAtual = null, cartaCb = null;
let hudCache = {};

const tec = { esq: false, dir: false, cima: false, baixo: false, fogo: false };
const ponteiro = { x: W / 2, y: 100, ativo: false, sx: 0, sy: 0, swipe: false };

const telas = document.querySelectorAll(".tela");
const elMain = document.querySelector("main");
const cv = $("canvas");
let cx = cv.getContext("2d", { alpha: false });
const elPalco = $("palco");

function depois(ms, fn) {
  const id = idPartida;
  setTimeout(() => { if (id === idPartida) fn(); }, ms);
}

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarTela(id) {
  telas.forEach(tela => tela.classList.remove("ativa"));
  $(id).classList.add("ativa");
  window.scrollTo(0, 0);
}

let temporizadorAviso;
function mostrarAviso(texto) {
  const el = $("aviso");
  el.textContent = texto;
  el.classList.remove("oculto");
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(() => el.classList.add("oculto"), 3500);
}

/* ---------- Sons (gerados no navegador, sem arquivos) ---------- */

let audio = null;
function contextoAudio() {
  if (!audio) {
    const Contexto = window.AudioContext || window.webkitAudioContext;
    if (!Contexto) return null;
    audio = new Contexto();
  }
  if (audio.state === "suspended") audio.resume();
  return audio;
}

function tom(freq, dur, tipo, vol, ate, atraso) {
  const c = contextoAudio();
  if (!c) return;
  const osc = c.createOscillator();
  const ganho = c.createGain();
  const t = c.currentTime + (atraso || 0);
  osc.type = tipo;
  osc.frequency.setValueAtTime(freq, t);
  if (ate) osc.frequency.exponentialRampToValueAtTime(ate, t + dur);
  ganho.gain.setValueAtTime(vol, t);
  ganho.gain.exponentialRampToValueAtTime(0.001, t + dur);
  osc.connect(ganho);
  ganho.connect(c.destination);
  osc.start(t);
  osc.stop(t + dur);
}

function ruido(dur, vol) {
  const c = contextoAudio();
  if (!c) return;
  const n = Math.floor(c.sampleRate * dur);
  const buffer = c.createBuffer(1, n, c.sampleRate);
  const dados = buffer.getChannelData(0);
  for (let i = 0; i < n; i++) dados[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const fonte = c.createBufferSource();
  const ganho = c.createGain();
  fonte.buffer = buffer;
  ganho.gain.value = vol;
  fonte.connect(ganho);
  ganho.connect(c.destination);
  fonte.start();
}

const SONS = {
  acerto: () => { tom(523, 0.12, "triangle", 0.18); tom(784, 0.2, "triangle", 0.18, null, 0.1); },
  erro: () => tom(180, 0.35, "sawtooth", 0.12, 70),
  tiro: () => { ruido(0.1, 0.12); tom(160, 0.1, "square", 0.06, 70); },
  boom: () => { ruido(0.5, 0.4); tom(90, 0.5, "sine", 0.35, 30); },
  moeda: () => { tom(988, 0.08, "square", 0.08); tom(1319, 0.15, "square", 0.08, null, 0.08); },
  vitoria: () => [523, 659, 784, 1047].forEach((f, i) => tom(f, 0.2, "triangle", 0.18, null, i * 0.13)),
  derrota: () => [400, 330, 260, 180].forEach((f, i) => tom(f, 0.25, "sawtooth", 0.1, null, i * 0.18))
};

let ultimoSomTiro = 0;
function som(nome) {
  if (save.som === false) return;
  if (nome === "tiro") {
    if (Date.now() - ultimoSomTiro < 140) return;
    ultimoSomTiro = Date.now();
  }
  try { SONS[nome](); } catch (erro) { /* sem áudio */ }
}

function atualizarBotaoSom() {
  $("btn-som").textContent = save.som === false ? "🔇" : "🔊";
}

/* ---------- Tremor de tela, flash e confete ---------- */

let temporizadorTremor;
function sacudirTela(forte) {
  const alvo = $("tela-fase").classList.contains("ativa") ? elPalco : elMain;
  [elPalco, elMain].forEach(el => el.classList.remove("tremor", "tremor-forte"));
  void alvo.offsetWidth;
  alvo.classList.add(forte ? "tremor-forte" : "tremor");
  if (navigator.vibrate) navigator.vibrate(forte ? 120 : 40);
  clearTimeout(temporizadorTremor);
  temporizadorTremor = setTimeout(() => alvo.classList.remove("tremor", "tremor-forte"), 600);
  if (forte) {
    const flash = $("flash");
    flash.classList.remove("on");
    void flash.offsetWidth;
    flash.classList.add("on");
  }
}

function confete() {
  const caixa = $("confete");
  const emojis = ["🎉", "⭐", "🪙", "✨", "🎊"];
  for (let i = 0; i < 40; i++) {
    const item = document.createElement("span");
    item.textContent = emojis[i % emojis.length];
    item.style.left = Math.random() * 100 + "%";
    item.style.fontSize = 1 + Math.random() * 1.2 + "rem";
    item.style.animationDelay = Math.random() * 1.2 + "s";
    item.style.animationDuration = 2.5 + Math.random() * 2 + "s";
    caixa.appendChild(item);
    setTimeout(() => item.remove(), 6500);
  }
}

/* ================================================================
   5. PERGUNTAS: SORTEIO E CAIXA DE PERGUNTA
   ================================================================ */

function prepararPergunta(pergunta) {
  let opcoes = pergunta.opcoes.map((texto, i) => ({ texto, certa: i === pergunta.correta }));
  if (pergunta.tipo !== "Verdadeiro ou Falso") opcoes = embaralhar(opcoes);
  return {
    nivel: pergunta.nivel,
    tipo: pergunta.tipo,
    materia: pergunta.materia,
    texto: pergunta.texto,
    explicacao: pergunta.explicacao,
    opcoes: opcoes.map(o => o.texto),
    correta: opcoes.findIndex(o => o.certa)
  };
}

// Sorteia as perguntas da fase. Evita as da tentativa anterior sempre que houver outras.
function sortearPerguntas(f) {
  const recentes = (save.recentes[f.id] || []).concat(f.evita ? (save.recentes[f.evita] || []) : []);
  const ordem = embaralhar(f.materias);
  const pools = {};
  const minimo = f.nivelMin || 1, maximo = f.nivelMax || 3;
  f.materias.forEach(m => {
    const todas = embaralhar(BANCO[m].filter(x => x.nivel >= minimo && x.nivel <= maximo));
    pools[m] = todas.filter(x => !recentes.includes(x.texto)).concat(todas.filter(x => recentes.includes(x.texto)));
  });
  const lista = [];
  for (let i = 0; i < f.n; i++) {
    const m = ordem[i % ordem.length];
    lista.push(prepararPergunta({ ...pools[m].shift(), materia: m }));
  }
  lista.sort((a, b) => a.nivel - b.nivel); // dificuldade progressiva
  save.recentes[f.id] = lista.map(p => p.texto);
  salvar();
  return lista;
}

// Sorteia mais perguntas (batalha de cartas e chefes). Os chefes só usam perguntas de nível alto.
function maisPerguntas(qtd, nivelMin) {
  const usados = G.perguntas.map(p => p.texto);
  const minimo = nivelMin || fase.nivelMin || 1, maximo = fase.nivelMax || 4;
  const todas = embaralhar(fase.materias.flatMap(m => BANCO[m].filter(x => x.nivel >= minimo && x.nivel <= maximo).map(x => ({ ...x, materia: m }))));
  const livres = todas.filter(x => !usados.includes(x.texto));
  G.perguntas.push(...(livres.length ? livres : todas).slice(0, qtd).map(prepararPergunta));
}

function ganharMoedas(base) {
  const valor = Math.max(1, Math.round(base * (1 + stats.bonusMoeda)));
  G.moedas += valor;
  return valor;
}

// Prêmio por acertar. "cheio" = acertou de primeira (conta combo e XP).
function premioAcerto(nivel, rapido, cheio) {
  if (cheio) {
    G.acertos++;
    G.combo++;
    G.maiorCombo = Math.max(G.maiorCombo, G.combo);
    G.xp += 10 * nivel;
  }
  const mult = (cheio ? 1 + Math.min(G.combo - 1, 5) * 0.1 : 0.5) + (rapido ? 0.3 : 0);
  return ganharMoedas((3 + nivel) * mult);
}

function registrarResposta(materia, acertou) {
  const s = save.stats[materia];
  if (!s) return;
  s.t++;
  if (acertou) s.c++;
  salvar();
}

/* Caixa de pergunta (usada na ilha, na travessia, na corrida e no chefe).
   Perguntas são opcionais: dá para pular, e errar não tira vida. */
function perguntar(retorno, opcoes) {
  if (!G || G.fim) return;
  if (!G.perguntas[G.qi] && fase.tipo === "cartas") maisPerguntas(4); // a batalha só termina quando alguém afunda
  const p = G.perguntas[G.qi];
  if (!p) { retorno(null); return; }
  G.qi++;
  pausado = true;
  const total = TEMPO_POR_NIVEL[p.nivel] + stats.tempoExtra;
  qAtual = { p, retorno, total, inicio: Date.now(), resolvida: false, res: null };

  $("q-tipo").textContent = p.tipo + " • " + MATERIAS[p.materia];
  $("q-nivel").textContent = ["", "⭐ Fácil", "⭐⭐ Médio", "⭐⭐⭐ Difícil", "💀 Desafio de chefe"][p.nivel];
  $("q-texto").textContent = p.texto;
  $("q-combo").textContent = "🔥 x" + G.combo;
  const alt = $("q-alternativas");
  alt.innerHTML = "";
  p.opcoes.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.className = "alternativa";
    botao.textContent = texto;
    botao.addEventListener("click", () => responderQ(i));
    alt.appendChild(botao);
  });
  $("q-feedback").classList.add("oculto");
  $("btn-q-ok").classList.add("oculto");
  $("btn-pular").classList.toggle("oculto", Boolean(opcoes && opcoes.semPular));
  $("btn-dica").disabled = G.dicaUsada || p.opcoes.length < 4;
  $("modal-q").classList.remove("oculto");
  mostrarTempoQ(total);
  clearInterval(relogioQ);
  relogioQ = setInterval(tickQ, 100);
}

function mostrarTempoQ(restante) {
  const porcentagem = Math.max(0, (restante / qAtual.total) * 100);
  $("q-tempo-barra").style.width = porcentagem + "%";
  $("q-tempo-barra").classList.toggle("pouco", porcentagem <= 30);
  $("q-tempo-texto").textContent = "⏱️ " + Math.max(0, Math.ceil(restante));
}

function tickQ() {
  if (!qAtual || qAtual.resolvida) return;
  const restante = qAtual.total - (Date.now() - qAtual.inicio) / 1000;
  if (restante <= 0) {
    mostrarTempoQ(0);
    responderQ(-1); // tempo esgotado: conta como erro, sem punição
    return;
  }
  mostrarTempoQ(restante);
}

// escolha = -1 significa tempo esgotado
function responderQ(escolha) {
  const Q = qAtual;
  if (!Q || Q.resolvida) return;
  Q.resolvida = true;
  clearInterval(relogioQ);
  const p = Q.p;
  const acertou = escolha === p.correta;
  const restante = Q.total - (Date.now() - Q.inicio) / 1000;
  const botoes = Array.from($("q-alternativas").children);
  botoes.forEach(b => (b.disabled = true));
  if (botoes[p.correta]) botoes[p.correta].classList.add("certa");
  if (escolha >= 0 && !acertou && botoes[escolha]) botoes[escolha].classList.add("errada");
  registrarResposta(p.materia, acertou);
  G.respondidas++;

  const res = { acertou, rapido: false, nivel: p.nivel };
  const fb = $("q-feedback");
  fb.classList.remove("oculto");
  if (acertou) {
    res.rapido = restante >= Q.total * LIMITE_RAPIDO;
    const moedas = premioAcerto(p.nivel, res.rapido, true);
    fb.className = "feedback acerto";
    $("q-fb-titulo").textContent = "🎉 Certo! +" + moedas + " 🪙" + (res.rapido ? " ⚡ Rápido!" : "") + (G.combo >= 2 ? " 🔥 x" + G.combo : "");
    som("acerto");
  } else {
    G.combo = 0;
    fb.className = "feedback erro";
    $("q-fb-titulo").textContent = escolha < 0 ? "⏰ Tempo esgotado! Sem punição." : "💡 Quase! Sem punição.";
    som("erro");
  }
  $("q-fb-texto").textContent = p.explicacao;
  Q.res = res;
  $("btn-q-ok").classList.remove("oculto");
  $("btn-pular").classList.add("oculto");
  $("btn-dica").disabled = true;
}

function continuarQ() {
  const Q = qAtual;
  if (!Q || !Q.resolvida) return;
  $("modal-q").classList.add("oculto");
  qAtual = null;
  pausado = false;
  Q.retorno(Q.res);
}

function pularQ() {
  const Q = qAtual;
  if (!Q || Q.resolvida) return;
  clearInterval(relogioQ);
  $("modal-q").classList.add("oculto");
  qAtual = null;
  pausado = false;
  Q.retorno(null);
}

// Companheiro: o Louro José elimina 2 alternativas erradas (1x por fase)
function usarDica() {
  const Q = qAtual;
  if (!Q || Q.resolvida || G.dicaUsada) return;
  const botoes = Array.from($("q-alternativas").children);
  const erradas = botoes.filter((b, i) => i !== Q.p.correta);
  if (erradas.length < 3) return;
  G.dicaUsada = true;
  embaralhar(erradas).slice(0, 2).forEach(b => { b.disabled = true; b.style.opacity = 0.35; });
  $("btn-dica").disabled = true;
}

function fecharModais() {
  ["modal-q", "modal-cartas", "modal-rota"].forEach(id => $(id).classList.add("oculto"));
  clearInterval(relogioQ);
  qAtual = null;
  cartaCb = null;
}

/* ================================================================
   6. CAMPANHA: HISTÓRIA, MAPA, INÍCIO E FIM DE FASE
   ================================================================ */

let hist = { lista: [], i: 0, fim: null };

function mostrarHistoria(lista, fim) {
  hist = { lista, i: 0, fim };
  mostrarCena();
  mostrarTela("tela-historia");
}

function mostrarCena() {
  const [arte, quem, fala] = hist.lista[hist.i];
  const arteEl = $("hist-arte");
  arteEl.textContent = arte;
  arteEl.style.animation = "none";
  void arteEl.offsetWidth;
  arteEl.style.animation = "";
  $("hist-quem").textContent = quem;
  $("hist-fala").textContent = fala.replace(/\{nome\}/g, save.nome || "capitão");
  $("btn-hist-prox").textContent = hist.i === hist.lista.length - 1 ? "Vamos! ▶" : "Continuar ▶";
}

function proximaCena() {
  if (hist.i < hist.lista.length - 1) {
    hist.i++;
    mostrarCena();
  } else {
    pularHistoria();
  }
}

function pularHistoria() {
  const fim = hist.fim;
  hist = { lista: [], i: 0, fim: null };
  if (fim) fim();
}

function faseLiberada(i) {
  return save.vip || i <= save.campanha;
}

function abrirFase(i) {
  if (!faseLiberada(i)) return;
  const f = FASES[i];
  if (!save.historia[f.id]) {
    save.historia[f.id] = true;
    salvar();
    mostrarHistoria(f.hist, () => iniciarFase(i));
  } else {
    iniciarFase(i);
  }
}

// A cobrinha também abre direto do menu, sem esperar a campanha chegar nela
function jogarArena() {
  iniciarFase(FASES.findIndex(f => f.id === "arena"));
}

function continuarCampanha() {
  if (save.campanha >= FASES.length) {
    irPara("mapa");
    return;
  }
  abrirFase(save.campanha);
}

function renderMapa() {
  const concluidas = Math.min(save.campanha, FASES.length);
  $("mapa-vip").classList.toggle("oculto", !save.vip);
  $("mapa-prog").textContent = concluidas + "/" + FASES.length + " fases concluídas";
  $("mapa-barra").style.width = (concluidas / FASES.length) * 100 + "%";
  $("lista-fases").innerHTML = FASES.map((f, i) => {
    const feita = i < save.campanha;
    const liberada = faseLiberada(i);
    const atual = !feita && i === save.campanha;
    const rotulo = feita ? "Rejogar" : liberada ? "Jogar" : "🔒";
    const estado = feita ? "✅ Concluída" : atual ? "▶ Próxima" : liberada ? "▶ Liberada" : "🔒 Bloqueada";
    return '<article class="fase-card tema-' + f.id + (feita ? " feita" : "") + (atual ? " atual" : "") + (liberada ? "" : " trancada") + '">' +
      '<div class="fase-icone">' + f.icone + "</div>" +
      '<div class="fase-info"><h3>' + (i + 1) + ". " + f.nome + (f.chefe ? " 👹" : "") + "</h3><p>" + f.materia + "</p><small>" + f.desc + "</small><em>" + estado + "</em></div>" +
      '<button class="botao botao-modo" data-fase="' + i + '"' + (liberada ? "" : " disabled") + ">" + rotulo + "</button></article>" +
      (i < FASES.length - 1 ? '<div class="trilha-fase' + (feita ? " ok" : "") + '">⋮</div>' : "");
  }).join("");
}

/* ---------- Início de uma fase ---------- */

function iniciarFase(idx) {
  idPartida++;
  cancelAnimationFrame(raf);
  fecharModais();
  faseIdx = idx;
  fase = FASES[idx];
  stats = estatisticas();

  // Defesa extra comprada: a fase começa com escudo (consumida uma vez)
  const escudoInicial = save.defesas > 0;
  if (escudoInicial) {
    save.defesas--;
    salvar();
  }

  G = {
    perguntas: sortearPerguntas(fase), qi: 0,
    vida: stats.vidaMax, escudo: escudoInicial,
    moedas: 0, xp: 0, acertos: 0, respondidas: 0, combo: 0, maiorCombo: 0, inimigos: 0,
    fim: false, ganhou: false, reviveu: false, dicaUsada: false, flut: [], inv: 0,
    modo: fase.tipo, bossCfg: fase.tipo === "chefe" ? BOSSES[fase.boss] : null, pendenteBoss: false
  };
  M = MODOS[G.modo].criar();
  if (MODOS[G.modo].iniciar) MODOS[G.modo].iniciar();
  pausado = false;
  acc = 0;
  Object.keys(tec).forEach(k => { tec[k] = false; });
  ponteiro.ativo = false;

  aplicarModo();
  hudCache = {};
  spriteAvatar(); // começa a preparar o avatar
  $("titulo-fase").textContent = fase.icone + " " + fase.nome;
  mostrarTela("tela-fase");
  atualizarHud();
  ultimoT = performance.now();
  raf = requestAnimationFrame(loop);
}

// Atualiza controles e visual conforme a modalidade em andamento
function aplicarModo() {
  $("palco").className = "palco modo-" + G.modo;
  $("controles").className = "controles modo-" + G.modo;
  $("ctl-cima").textContent = G.modo === "corrida" ? "⤒ Pular" : "▲";
  $("ctl-baixo").textContent = G.modo === "corrida" ? "⤓ Deslizar" : "▼";
}

// Fim da primeira etapa de uma fase: se a fase tem chefe, ele entra em cena; senão, vitória
function vitoriaEtapa() {
  if (!G || G.fim || G.pendenteBoss) return;
  if (fase.boss && G.modo !== "chefe") G.pendenteBoss = true;
  else terminar(true);
}

function iniciarBoss() {
  const cfg = BOSSES[fase.boss];
  G.modo = "chefe";
  G.bossCfg = cfg;
  G.perguntas = G.perguntas.slice(0, G.qi); // as perguntas que sobraram eram da etapa anterior
  maisPerguntas(3, 3);                      // os cristais do chefe trazem perguntas difíceis
  G.vida = Math.min(stats.vidaMax, G.vida + Math.round(stats.vidaMax * 0.4));
  G.inv = 1.5;
  M = MODOS.chefe.criar();
  Object.keys(tec).forEach(k => { tec[k] = false; });
  aplicarModo();
  hudCache = {};
  $("titulo-fase").textContent = "👹 " + cfg.nome;
  sacudirTela(true);
  som("boom");
}

function loop(t) {
  raf = requestAnimationFrame(loop);
  const dt = Math.min(0.05, (t - ultimoT) / 1000);
  ultimoT = t;
  if (!G) return;
  if (!pausado && !G.fim) {
    if (G.pendenteBoss) { G.pendenteBoss = false; iniciarBoss(); }
    G.inv = Math.max(0, G.inv - dt);
    MODOS[G.modo].atualizar(dt);
    G.flut.forEach(f => { f.y -= 32 * dt; f.t -= dt; });
    G.flut = G.flut.filter(f => f.t > 0);
  }
  MODOS[G.modo].desenhar();
  desenharFlut();
  acc += dt;
  if (acc > 0.15) {
    acc = 0;
    atualizarHud();
  }
}

/* ---------- HUD e efeitos comuns ---------- */

function atualizarBarra(preenchimento, texto, valor, maximo) {
  const porcentagem = clamp((valor / maximo) * 100, 0, 100);
  preenchimento.style.width = porcentagem + "%";
  preenchimento.className = "enchimento " + (porcentagem > 50 ? "alta" : porcentagem > 25 ? "media" : "baixa");
  texto.textContent = Math.max(0, Math.round(valor)) + "/" + maximo;
}

function setTxt(id, valor) {
  if (hudCache[id] !== valor) {
    hudCache[id] = valor;
    $(id).textContent = valor;
  }
}

function atualizarHud() {
  if (!G) return;
  const pv = Math.round(G.vida) + "/" + stats.vidaMax;
  if (hudCache.vida !== pv) {
    hudCache.vida = pv;
    atualizarBarra($("hud-vida"), $("hud-vida-texto"), G.vida, stats.vidaMax);
  }
  $("hud-escudo").classList.toggle("oculto", !G.escudo);
  setTxt("hud-extra", save.vidas > 0 ? "❤️x" + save.vidas : "");
  setTxt("hud-moedas", String(G.moedas));
  setTxt("hud-combo", "🔥 x" + G.combo);
  $("hud-combo").classList.toggle("ativo", G.combo >= 2);
  setTxt("hud-obj", MODOS[G.modo].objetivo());
}

function flutuar(txt, x, y) {
  G.flut.push({ x: x === undefined ? W / 2 : x, y: y === undefined ? H * 0.55 : y, txt, t: 1.3 });
}

function desenharFlut() {
  if (!G) return;
  G.flut.forEach(f => {
    cx.globalAlpha = clamp(f.t, 0, 1);
    texto(f.txt, f.x, f.y, 17, "#fff", "center", true);
  });
  cx.globalAlpha = 1;
}

// Dano ao jogador: escudo bloqueia; vida extra revive uma vez por fase; senão, derrota.
function ferir(dano) {
  if (!G || G.fim || G.inv > 0) return;
  G.inv = 0.9;
  if (G.escudo) {
    G.escudo = false;
    flutuar("🛡️ Bloqueou!", M.px || W / 2, (M.py || 440) - 40);
    return;
  }
  G.vida = Math.max(0, G.vida - dano);
  flutuar("-" + dano, M.px || W / 2, (M.py || 440) - 40);
  sacudirTela(true);
  som("erro");
  if (G.vida <= 0) {
    if (save.vidas > 0 && !G.reviveu) {
      save.vidas--;
      G.reviveu = true;
      G.vida = Math.round(stats.vidaMax / 2);
      salvar();
      G.inv = 1.8;
      if (M) M.limpar = true;
      flutuar("❤️ Vida extra!");
      mostrarAviso("❤️ Vida extra usada! Restam " + save.vidas + ".");
    } else {
      terminar(false);
    }
  }
}

function terminar(ganhou) {
  if (!G || G.fim) return;
  G.fim = true;
  G.ganhou = ganhou;
  fecharModais();
  pausado = false;
  som(ganhou ? "vitoria" : "derrota");
  if (ganhou) confete();
  depois(ganhou ? 1400 : 1100, () => mostrarResultado(ganhou));
}

function sairDaFase() {
  const Q = qAtual;
  const estavaRodando = Q && !Q.resolvida;
  const pausa = Date.now();
  const sair = confirm("Sair da fase? Você perde as moedas e o XP desta tentativa.");
  if (!sair) {
    if (estavaRodando) Q.inicio += Date.now() - pausa;
    return;
  }
  idPartida++;
  cancelAnimationFrame(raf);
  fecharModais();
  G = null;
  pausado = false;
  irPara("mapa");
}

/* ---------- Entrada: teclado, botões e toque ---------- */

function pressionar(d) {
  if (!G || G.fim || pausado) return;
  const modo = MODOS[G.modo];
  if (modo.tecla) modo.tecla(d);
}

const TECLAS = { ArrowLeft: "esq", a: "esq", A: "esq", ArrowRight: "dir", d: "dir", D: "dir", ArrowUp: "cima", w: "cima", W: "cima", ArrowDown: "baixo", s: "baixo", S: "baixo", " ": "fogo", Shift: "dash", z: "dash", Z: "dash", e: "super", E: "super", x: "super", X: "super" };

document.addEventListener("keydown", e => {
  if (qAtual && !qAtual.resolvida && ["1", "2", "3", "4"].includes(e.key)) {
    if (Number(e.key) <= qAtual.p.opcoes.length) responderQ(Number(e.key) - 1);
    return;
  }
  if (qAtual && qAtual.resolvida && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    continuarQ();
    return;
  }
  const d = TECLAS[e.key];
  if (!d || !G || !$("tela-fase").classList.contains("ativa")) return;
  e.preventDefault();
  if (e.repeat) return;
  tec[d] = true;
  if (d !== "fogo") pressionar(d);
});

document.addEventListener("keyup", e => {
  const d = TECLAS[e.key];
  if (d) tec[d] = false;
});

document.querySelectorAll(".ctl").forEach(botao => {
  const d = botao.dataset.d;
  botao.addEventListener("pointerdown", e => {
    e.preventDefault();
    tec[d] = true;
    if (d !== "fogo") pressionar(d);
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach(ev => botao.addEventListener(ev, () => { tec[d] = false; }));
});

function posicao(e) {
  const r = cv.getBoundingClientRect();
  return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * H / r.height };
}

cv.addEventListener("pointerdown", e => {
  e.preventDefault();
  const p = posicao(e);
  ponteiro.x = p.x; ponteiro.y = p.y; ponteiro.sx = p.x; ponteiro.sy = p.y;
  ponteiro.ativo = true; ponteiro.swipe = false;
  if (cv.setPointerCapture) { try { cv.setPointerCapture(e.pointerId); } catch (erro) { /* ok */ } }
});

cv.addEventListener("pointermove", e => {
  const p = posicao(e);
  ponteiro.x = p.x; ponteiro.y = p.y;
  if (ponteiro.ativo && !ponteiro.swipe && G && !G.fim && !pausado && (G.modo === "ilha" || G.modo === "corrida" || G.modo === "cobra")) {
    const dx = p.x - ponteiro.sx, dy = p.y - ponteiro.sy;
    if (Math.hypot(dx, dy) > 28) {
      ponteiro.swipe = true;
      pressionar(Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? "esq" : "dir") : (dy < 0 ? "cima" : "baixo"));
    }
  }
});

cv.addEventListener("pointerup", () => {
  if (ponteiro.ativo && !ponteiro.swipe && G && !G.fim && !pausado && G.modo === "ilha") {
    const dx = ponteiro.x - (M.vx + TS / 2), dy = ponteiro.y - (M.vy + TS / 2);
    pressionar(Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? "esq" : "dir") : (dy < 0 ? "cima" : "baixo"));
  }
  ponteiro.ativo = false;
});
["pointercancel", "pointerleave"].forEach(ev => cv.addEventListener(ev, () => { ponteiro.ativo = false; }));

/* ================================================================
   7. DESENHO (canvas)
   ================================================================ */

const FONTE_EMOJI = "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";

// Cada emoji é desenhado uma única vez em um mini-canvas e depois só copiado (muito mais rápido que fillText)
const spritesEmoji = {};
function spriteEmoji(txt, q, filtro) {
  const chave = txt + "|" + q + "|" + (filtro || "");
  let sp = spritesEmoji[chave];
  if (!sp) {
    sp = document.createElement("canvas");
    const lado = Math.ceil(q * 1.4);
    sp.width = lado;
    sp.height = lado;
    const c = sp.getContext("2d");
    if (filtro) { try { c.filter = filtro; } catch (erro) { /* sem filtro */ } }
    c.font = q + "px " + FONTE_EMOJI;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(txt, lado / 2, lado / 2);
    sp.lado = lado;
    spritesEmoji[chave] = sp;
  }
  return sp;
}

function emoji(txt, x, y, tam, alfa, filtro) {
  const q = Math.max(16, Math.ceil(tam / 8) * 8);
  const sp = spriteEmoji(txt, q, filtro);
  const d = sp.lado * tam / q;
  if (alfa !== undefined) cx.globalAlpha = alfa;
  cx.drawImage(sp, x - d / 2, y - d / 2, d, d);
  if (alfa !== undefined) cx.globalAlpha = 1;
}

// Arte feita de vários emojis: [emoji, deslocamento x, deslocamento y, tamanho] (valores relativos ao tamanho)
function desenharArte(arte, x, y, tam) {
  arte.forEach(p => emoji(p[0], x + p[1] * tam, y + p[2] * tam, p[3] * tam));
}

// Fundos estáticos são desenhados uma vez em um canvas escondido
const fundos = {};
function fundo(chave, desenhar) {
  let c = fundos[chave];
  if (!c) {
    c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const antigo = cx;
    cx = c.getContext("2d");
    desenhar();
    cx = antigo;
    fundos[chave] = c;
  }
  cx.drawImage(c, 0, 0);
}

function texto(txt, x, y, tam, cor, alinhar, sombra) {
  cx.font = "800 " + tam + "px 'Baloo 2','Segoe UI',Arial,sans-serif";
  cx.textAlign = alinhar || "center";
  cx.textBaseline = "middle";
  if (sombra) {
    cx.fillStyle = "rgba(0,0,0,0.65)";
    cx.fillText(txt, x + 1.5, y + 1.5);
  }
  cx.fillStyle = cor;
  cx.fillText(txt, x, y);
}

function quebrar(txt, maxW) {
  const palavras = txt.split(" ");
  const linhas = [];
  let linha = "";
  palavras.forEach(p => {
    const t = linha ? linha + " " + p : p;
    if (cx.measureText(t).width > maxW && linha) {
      linhas.push(linha);
      linha = p;
    } else {
      linha = t;
    }
  });
  if (linha) linhas.push(linha);
  return linhas;
}

// Caixa de texto translúcida com várias linhas
function caixaTexto(txt, x, y, largura, tam, cor) {
  cx.font = "800 " + tam + "px 'Baloo 2','Segoe UI',Arial,sans-serif";
  const linhas = quebrar(txt, largura - 24);
  const alt = linhas.length * (tam + 4) + 16;
  cx.fillStyle = "rgba(8,24,48,0.82)";
  cx.beginPath();
  cx.roundRect ? cx.roundRect(x - largura / 2, y, largura, alt, 14) : cx.rect(x - largura / 2, y, largura, alt);
  cx.fill();
  linhas.forEach((l, i) => texto(l, x, y + 16 + i * (tam + 4), tam, cor || "#fff"));
}

// Cada figura vira uma imagem uma única vez e depois só é copiada
const spriteCache = {};
function spriteCfg(cfg, busto) {
  if (typeof Image === "undefined") return null;
  const svg = busto ? avatarSVG(cfg, true) : avatarSVG(cfg).replace('class="av-svg"', 'width="100" height="142"');
  let e = spriteCache[svg];
  if (!e) {
    if (Object.keys(spriteCache).length > 80) Object.keys(spriteCache).forEach(k => delete spriteCache[k]);
    e = spriteCache[svg] = { canvas: null };
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = busto ? 168 : 200;
      c.height = busto ? 232 : 284;
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      e.canvas = c;
    };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  return e.canvas;
}
const spriteAvatar = () => spriteCfg(avatarEmUso(), false);
const spriteBusto = cfg => spriteCfg(cfg, true);

// Desenha o avatar com os pés em (x, yPes) e altura "alt"
function desenharAvatar(x, yPes, alt, achatar) {
  const c = spriteAvatar();
  const h = alt * (achatar || 1);
  if (c) cx.drawImage(c, x - (alt * 100 / 142) / 2, yPes - h, alt * 100 / 142, h);
  else emoji("🧍", x, yPes - h / 2, h * 0.8);
}

/* ================================================================
   8. MODALIDADES DE JOGO
   Cada uma tem: criar(), atualizar(dt), desenhar(), objetivo() e, às vezes, tecla(d).
   ================================================================ */

const MODOS = {};

/* ---------------- 8.1 ILHA: exploração e enigmas ---------------- */

const TS = 40;
const MAPA_ILHA = [
  "~~~~~~~~~",
  "~R..#..R~",
  "~.##.#..~",
  "~..R...#~",
  "~#.##.#.~",
  "~..#R..R~",
  "~.#...#.~",
  "~R..#..#~",
  "~.#.R.#.~",
  "~..#...R~",
  "~.#...#.~",
  "~..P..B.~",
  "~~~~~~~~~"
];

function moverIlha(d) {
  const dc = d === "esq" ? -1 : d === "dir" ? 1 : 0;
  const dr = d === "cima" ? -1 : d === "baixo" ? 1 : 0;
  if (!dc && !dr) return;
  const c = M.c + dc, r = M.r + dr;
  const ch = (MAPA_ILHA[r] || "")[c];
  if (!ch || ch === "~" || ch === "#") return;
  M.c = c;
  M.r = r;
  const chave = r + "," + c;
  if (ch === "R" && !M.feitas[chave]) {
    M.feitas[chave] = true;
    perguntar(() => {
      M.nFeitas++;
      mostrarAviso(PISTAS[M.nFeitas - 1]);
      if (M.nFeitas >= 8) flutuar("⛵ Barco pronto!", c * TS + 20, r * TS);
    });
  } else if (ch === "B") {
    if (M.nFeitas >= 8) terminar(true);
    else flutuar("Faltam " + (8 - M.nFeitas) + " peças!", c * TS + 20, r * TS);
  }
}

MODOS.ilha = {
  criar() {
    let c = 0, r = 0;
    MAPA_ILHA.forEach((linha, i) => { const j = linha.indexOf("P"); if (j >= 0) { c = j; r = i; } });
    const runas = [];
    let barco = [11, 6];
    MAPA_ILHA.forEach((linha, i) => [...linha].forEach((ch, j) => {
      if (ch === "R") runas.push([i, j]);
      if (ch === "B") barco = [i, j];
    }));
    return { c, r, vx: c * TS, vy: r * TS, feitas: {}, nFeitas: 0, rep: 0, T: 0, runas, barco };
  },
  objetivo() { return "🔮 Peças do barco: " + M.nFeitas + "/8"; },
  tecla(d) {
    M.rep = 0.25;
    moverIlha(d);
  },
  atualizar(dt) {
    M.T += dt;
    M.vx += (M.c * TS - M.vx) * Math.min(1, 14 * dt);
    M.vy += (M.r * TS - M.vy) * Math.min(1, 14 * dt);
    const d = ["esq", "dir", "cima", "baixo"].find(k => tec[k]);
    if (d) {
      M.rep -= dt;
      if (M.rep <= 0) {
        M.rep = 0.16;
        moverIlha(d);
      }
    }
  },
  desenhar() {
    fundo("ilha", () => {
      cx.fillStyle = "#1aa6d4";
      cx.fillRect(0, 0, W, H);
      for (let r = 0; r < MAPA_ILHA.length; r++) {
        for (let c = 0; c < MAPA_ILHA[r].length; c++) {
          const ch = MAPA_ILHA[r][c], x = c * TS, y = r * TS;
          if (ch === "~") {
            cx.fillStyle = (r + c) % 2 ? "#2bb3e0" : "#1fa6d6";
            cx.fillRect(x, y, TS, TS);
            continue;
          }
          cx.fillStyle = ch === "B" ? "#f3d9a0" : (r + c) % 2 ? "#8fd16a" : "#7fc75a";
          cx.fillRect(x, y, TS, TS);
          if (ch === "#") emoji((r * 7 + c * 3) % 2 ? "🌴" : "🪨", x + 20, y + 22, 32);
        }
      }
    });
    M.runas.forEach(([r, c]) => {
      const feita = M.feitas[r + "," + c];
      emoji(feita ? "✅" : "🔮", c * TS + 20, r * TS + 22, 26 + (feita ? 0 : Math.sin(M.T * 4 + c) * 3));
    });
    emoji(M.nFeitas >= 8 ? "⛵" : "🪵", M.barco[1] * TS + 20, M.barco[0] * TS + 22, 30);
    desenharAvatar(M.vx + 20, M.vy + 37, 36);
  }
};

/* ---------------- 8.2 TRAVESSIA: navegação e obstáculos (Geografia) ---------------- */

MODOS.nav = {
  criar() {
    const boias = [];
    for (let i = 0; i < 8; i++) boias.push(3.5 + i * 4.2);
    return { x: W / 2, t: 0, obj: [], prox: 1.0, boias, bi: 0, resolv: 0, rota: null, escolheu: false, terra: null, v: 165 };
  },
  objetivo() { return "❓ Boias: " + M.resolv + "/8" + (M.rota ? " • " + (M.rota === "recife" ? "🪸 Recife" : "🌊 Mar aberto") : ""); },
  atualizar(dt) {
    M.t += dt;
    M.v = 165 + Math.min(60, M.t * 2);
    // Controle: setas ou arrastar o dedo. O vento empurra o barco.
    const sp = 250 * dt;
    if (tec.esq) M.x -= sp;
    if (tec.dir) M.x += sp;
    if (ponteiro.ativo) M.x += clamp(ponteiro.x - M.x, -sp * 1.3, sp * 1.3);
    M.x = clamp(M.x + Math.sin(M.t * 0.9) * 35 * dt, 26, W - 26);

    // Bifurcação: escolha de rota (consequência real nos obstáculos e moedas)
    if (!M.escolheu && M.t >= 18) {
      M.escolheu = true;
      pausado = true;
      $("modal-rota").classList.remove("oculto");
      return;
    }

    // Boias com perguntas
    if (M.bi < 8 && M.t >= M.boias[M.bi]) {
      M.obj.push({ k: "boia", x: rnd(50, W - 50), y: -30, r: 24 });
      M.bi++;
    }
    // Fim da travessia: a terra aparece
    if (M.bi >= 8 && !M.terra && M.t >= M.boias[7] + 3.8) {
      if (fase.boss) vitoriaEtapa(); // o chefe aparece antes da terra
      else M.terra = { y: -120 };
    }

    // Obstáculos e moedas
    if (!M.terra) {
      M.prox -= dt;
      if (M.prox <= 0) {
        const f = M.rota === "recife" ? 0.7 : M.rota === "aberto" ? 1.25 : 1;
        M.prox = (1.15 - Math.min(0.45, M.t / 70)) * f;
        const tipo = [["🪨", 20], ["🧊", 22], ["🌀", 28], ["🪵", 18]][Math.floor(Math.random() * 4)];
        M.obj.push({ k: "obs", e: tipo[0], r: tipo[1], x: rnd(30, W - 30), y: -30 });
        if (Math.random() < (M.rota === "recife" ? 0.75 : 0.4)) {
          const x = rnd(40, W - 40);
          for (let i = 0; i < 3; i++) M.obj.push({ k: "moeda", x, y: -30 - i * 34, r: 14 });
        }
      }
    } else {
      M.terra.y += M.v * 0.6 * dt;
      if (M.terra.y >= 120) vitoriaEtapa();
    }

    // Movimento e colisões
    const by = 440;
    M.obj = M.obj.filter(o => {
      o.y += M.v * dt;
      if (o.e === "🌀" && Math.abs(o.y - by) < 100 && Math.abs(o.x - M.x) < 100) {
        M.x += Math.sign(o.x - M.x) * 60 * dt; // redemoinho puxa o barco
      }
      const perto = Math.hypot(o.x - M.x, o.y - by) < o.r + 18;
      if (o.k === "moeda" && perto) {
        flutuar("+" + ganharMoedas(2) + " 🪙", o.x, o.y);
        return false;
      }
      if (o.k === "obs" && perto) {
        ferir(18);
        return false;
      }
      if (o.k === "boia" && perto) {
        perguntar(res => {
          M.resolv++;
          if (res && res.acertou && G.vida < stats.vidaMax) {
            const cura = Math.min(Math.round(stats.cura * 0.6), stats.vidaMax - G.vida);
            G.vida += cura;
            flutuar("🔧 +" + cura, M.x, by - 40);
          }
        });
        return false;
      }
      if (o.y > H + 40) {
        if (o.k === "boia") { M.resolv++; flutuar("Boia perdida", o.x, H - 40); }
        return false;
      }
      return true;
    });
  },
  desenhar() {
    fundo("nav", () => {
      const g = cx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#1d8fc7");
      g.addColorStop(1, "#0b3d6b");
      cx.fillStyle = g;
      cx.fillRect(0, 0, W, H);
    });
    cx.strokeStyle = "rgba(255,255,255,0.22)";
    cx.lineWidth = 2;
    for (let i = 0; i < 9; i++) {
      const y = (i * 62 + M.t * M.v) % (H + 30) - 10;
      cx.beginPath();
      for (let x = 0; x <= W; x += 20) cx.lineTo(x, y + Math.sin(x / 30 + M.t * 2) * 3);
      cx.stroke();
    }
    const vento = Math.sin(M.t * 0.9);
    if (Math.abs(vento) > 0.5) emoji(vento > 0 ? "💨➡️" : "⬅️💨", W / 2, 24, 22, 0.8);
    if (M.terra) {
      cx.fillStyle = "#f3d9a0";
      cx.fillRect(0, 0, W, M.terra.y + 40);
      emoji("🏝️", W / 2, M.terra.y + 10, 90);
    }
    M.obj.forEach(o => {
      if (o.k === "boia") emoji("❓", o.x, o.y, 44 + Math.sin(M.t * 5) * 3);
      else if (o.k === "moeda") emoji("🪙", o.x, o.y, 26);
      else if (o.e === "🌀") {
        cx.save();
        cx.translate(o.x, o.y);
        cx.rotate(M.t * 4);
        emoji("🌀", 0, 0, 56);
        cx.restore();
      } else emoji(o.e, o.x, o.y, o.r * 2);
    });
    if (!(G.inv > 0 && Math.floor(M.t * 12) % 2)) {
      const cor = itemEquipado("cor");
      emoji(stats.barco.emoji, M.x, 440, 54, undefined, cor ? cor.filtro : null);
      desenharAvatar(M.x, 446, 34);
      const vela = itemEquipado("vela"), mascote = itemEquipado("mascote");
      if (vela) emoji(vela.emoji, M.x, 408, 22);
      if (mascote) emoji(mascote.emoji, M.x - 24, 436, 20);
    }
  }
};

function escolherRota(r) {
  if (!M || G.modo !== "nav" || M.rota) return;
  M.rota = r;
  $("modal-rota").classList.add("oculto");
  pausado = false;
  flutuar(r === "recife" ? "🪸 Recife raso!" : "🌊 Mar aberto!");
}

/* ---------------- 8.3 PRAIA: corrida infinita em 3 faixas (Português) ---------------- */

const CR = { hor: 140, yN: 500, faixa: 95 };
const cs = t => 0.22 + 0.78 * t;                                   // escala por profundidade
const cy = t => CR.hor + (CR.yN - CR.hor) * t * t;                 // altura na tela
const cxl = (faixa, t) => W / 2 + (faixa - 1) * CR.faixa * cs(t);  // posição horizontal

function linhaCorrida() {
  M.linhas++;
  const faixas = [0, 1, 2];
  const tipoObs = () => { const r = Math.random(); return r < 0.4 ? "baixa" : r < 0.65 ? "alta" : "bloco"; };
  if (M.portoes < 8 && M.linhas % 6 === 0) {
    const g = Math.floor(Math.random() * 3);
    M.portoes++;
    M.objs.push({ k: "portao", faixa: g, t: 0 });
    faixas.filter(f => f !== g).forEach(f => { if (Math.random() < 0.5) M.objs.push({ k: Math.random() < 0.5 ? "baixa" : "alta", faixa: f, t: 0 }); });
    return;
  }
  if (M.portoes >= 8) {
    M.depois++;
    if (M.depois >= 3) {
      M.objs.push({ k: "chegada", faixa: 1, t: 0 });
      M.parar = true;
      return;
    }
  }
  const n = Math.random() < 0.5 ? 2 : 1;
  const ordem = embaralhar(faixas);
  for (let i = 0; i < n; i++) M.objs.push({ k: tipoObs(), faixa: ordem[i], t: 0 });
  if (Math.random() < 0.75) {
    for (let i = 0; i < 3; i++) M.objs.push({ k: "moeda", faixa: ordem[n], t: -i * 0.07 });
  }
}

function efeitoObjCorrida(o) {
  const mesma = o.k === "chegada" || o.faixa === M.faixa;
  if (o.k === "portao") {
    if (mesma) {
      o.gone = true;
      perguntar(() => { M.resolv++; });
    } else {
      M.resolv++;
      flutuar("Livro perdido", cxl(o.faixa, M.tp), cy(M.tp) - 60);
    }
    return;
  }
  if (!mesma) return;
  if (o.k === "moeda") {
    if (M.alt < 0.8) { o.gone = true; flutuar("+" + ganharMoedas(2) + " 🪙", M.x, cy(M.tp) - 90); }
  } else if (o.k === "baixa") {
    if (M.alt < 0.35) ferir(18);
  } else if (o.k === "alta") {
    if (M.desl <= 0) ferir(18);
  } else if (o.k === "bloco") {
    ferir(22);
  } else if (o.k === "chegada") {
    vitoriaEtapa();
  }
}

MODOS.corrida = {
  criar() {
    const decor = [];
    for (let i = 0; i < 8; i++) decor.push({ t: i / 8 * 1.1, lado: i % 2 ? 1 : -1 });
    return { faixa: 1, x: W / 2, tp: 0.84, pulo: 0, desl: 0, alt: 0, objs: [], linhas: 0, prox: 0.8, portoes: 0, resolv: 0, depois: 0, parar: false, v: 0.38, t: 0, dist: 0, decor };
  },
  objetivo() { return "📖 Livros: " + M.resolv + "/8"; },
  tecla(d) {
    if (d === "esq") M.faixa = Math.max(0, M.faixa - 1);
    else if (d === "dir") M.faixa = Math.min(2, M.faixa + 1);
    else if (d === "cima" && M.pulo <= 0) { M.pulo = 0.65; M.desl = 0; }
    else if (d === "baixo") { M.desl = 0.6; M.pulo = 0; }
  },
  atualizar(dt) {
    M.t += dt;
    M.v = 0.38 + Math.min(0.14, M.t * 0.003);
    M.dist += M.v * dt;
    M.pulo = Math.max(0, M.pulo - dt);
    M.desl = Math.max(0, M.desl - dt);
    M.alt = M.pulo > 0 ? Math.sin(Math.PI * (1 - M.pulo / 0.65)) : 0;
    M.x += (cxl(M.faixa, M.tp) - M.x) * Math.min(1, 14 * dt);
    if (!M.parar) {
      M.prox -= dt;
      if (M.prox <= 0) {
        linhaCorrida();
        M.prox = Math.max(0.55, 0.8 - M.t * 0.004);
      }
    }
    M.decor.forEach(d => { d.t += M.v * dt; if (d.t > 1.15) d.t -= 1.15; });
    M.objs.forEach(o => {
      o.t += M.v * dt;
      if (!o.res && o.t >= M.tp - 0.03) {
        o.res = true;
        efeitoObjCorrida(o);
      }
    });
    M.objs = M.objs.filter(o => o.t < 1.2);
  },
  desenhar() {
    fundo("corrida", () => {
      const g = cx.createLinearGradient(0, 0, 0, CR.hor);
      g.addColorStop(0, "#5bc0f5");
      g.addColorStop(1, "#cdf1ff");
      cx.fillStyle = g;
      cx.fillRect(0, 0, W, CR.hor);
      emoji("☀️", 290, 50, 44);
      cx.fillStyle = "#f3d9a0";
      cx.fillRect(0, CR.hor, W, H - CR.hor);
      cx.fillStyle = "#2aa8d8"; // mar à esquerda
      cx.beginPath();
      cx.moveTo(0, CR.hor); cx.lineTo(W / 2 - 80, CR.hor); cx.lineTo(W / 2 - 215, H); cx.lineTo(0, H);
      cx.fill();
      cx.fillStyle = "#c9a56a"; // pista
      cx.beginPath();
      cx.moveTo(W / 2 - 31, CR.hor); cx.lineTo(W / 2 + 31, CR.hor); cx.lineTo(W / 2 + 145, H); cx.lineTo(W / 2 - 145, H);
      cx.fill();
      cx.strokeStyle = "rgba(255,255,255,0.45)";
      cx.lineWidth = 2;
      [-1, 1].forEach(l => {
        cx.beginPath();
        cx.moveTo(W / 2 + l * 47.5 * 0.22, CR.hor);
        cx.lineTo(W / 2 + l * 47.5 * 1.02, H);
        cx.stroke();
      });
    });
    cx.strokeStyle = "rgba(0,0,0,0.09)";
    for (let i = 0; i < 8; i++) {
      const t = i * 0.125 + (M.dist % 0.125);
      const y = cy(t);
      cx.beginPath();
      cx.moveTo(W / 2 - 145 * cs(t), y);
      cx.lineTo(W / 2 + 145 * cs(t), y);
      cx.stroke();
    }
    M.decor.forEach(d => emoji("🌴", W / 2 + d.lado * (200 * cs(d.t)), cy(d.t) - 10, 80 * cs(d.t)));

    const lista = M.objs.filter(o => !o.gone && o.t >= 0 && o.t < 1.15).sort((a, b) => a.t - b.t);
    let jogadorDesenhado = false;
    lista.forEach(o => {
      if (!jogadorDesenhado && o.t > M.tp) { desenharCorredor(); jogadorDesenhado = true; }
      desenharObjCorrida(o);
    });
    if (!jogadorDesenhado) desenharCorredor();
  }
};

function desenharObjCorrida(o) {
  const s = cs(o.t), y = cy(o.t), x = o.k === "chegada" ? W / 2 : cxl(o.faixa, o.t);
  if (o.k === "baixa") emoji("🚧", x, y - 14 * s, 50 * s);
  else if (o.k === "bloco") emoji("🗿", x, y - 28 * s, 76 * s);
  else if (o.k === "moeda") emoji("🪙", x, y - 20 * s, 30 * s);
  else if (o.k === "portao") emoji("📖", x, y - 28 * s + Math.sin(M.t * 6) * 3, 50 * s);
  else if (o.k === "alta") {
    cx.fillStyle = "#7a4a21";
    cx.fillRect(x - 42 * s, y - 62 * s, 8 * s, 62 * s);
    cx.fillRect(x + 34 * s, y - 62 * s, 8 * s, 62 * s);
    cx.fillRect(x - 46 * s, y - 62 * s, 92 * s, 12 * s);
    cx.fillStyle = "#e63946";
    cx.fillRect(x - 46 * s, y - 59 * s, 92 * s, 4 * s);
  } else if (o.k === "chegada") {
    const larg = 290 * s;
    for (let i = 0; i < 10; i++) {
      cx.fillStyle = i % 2 ? "#fff" : "#222";
      cx.fillRect(x - larg / 2 + i * larg / 10, y - 8 * s, larg / 10, 8 * s);
    }
    emoji("🏁", x, y - 36 * s, 60 * s);
  }
}

function desenharCorredor() {
  const s = cs(M.tp), y = cy(M.tp);
  cx.fillStyle = "rgba(0,0,0,0.25)";
  cx.beginPath();
  cx.ellipse(M.x, y, 22 * s, 7 * s, 0, 0, Math.PI * 2);
  cx.fill();
  if (G.inv > 0 && Math.floor(M.t * 14) % 2) return;
  desenharAvatar(M.x, y - M.alt * 70, 86 * s, M.desl > 0 ? 0.5 : 1);
}

/* ---------------- 8.4 e 8.5: atirador (Selva e Chefão) ---------------- */

// Movimento do jogador: setas/botões ou arrastar na faixa de baixo
function dirigir(dt) {
  const v = 240 * dt;
  if (tec.esq) M.px -= v;
  if (tec.dir) M.px += v;
  if (ponteiro.ativo && ponteiro.y > 430) M.px += clamp(ponteiro.x - M.px, -v * 1.6, v * 1.6);
  M.px = clamp(M.px, 24, W - 24);
}

function atirarBala(tx, ty) {
  const ox = M.px, oy = M.py - 26;
  const a = Math.atan2(Math.min(ty - oy, -30), tx - ox);
  const angulos = M.triplo > 0 ? [a - 0.2, a, a + 0.2] : [a];
  angulos.forEach(an => M.bal.push({ x: ox, y: oy, vx: Math.cos(an) * 540, vy: Math.sin(an) * 540 }));
  M.cd = M.triplo > 0 ? 0.22 : 0.28;
  som("tiro");
}

function dispararSePreciso(dt) {
  M.cd -= dt;
  const mirando = ponteiro.ativo && ponteiro.y <= 430;
  if ((mirando || tec.fogo) && M.cd <= 0) atirarBala(ponteiro.x, ponteiro.y);
}

function anguloMira() {
  return Math.atan2(Math.min(ponteiro.y - (M.py - 26), -30), ponteiro.x - M.px);
}

function desenharAtirador() {
  cx.fillStyle = "rgba(0,0,0,0.25)";
  cx.beginPath();
  cx.ellipse(M.px, M.py + 14, 18, 6, 0, 0, Math.PI * 2);
  cx.fill();
  const a = anguloMira();
  cx.strokeStyle = "rgba(255,255,255,0.35)";
  cx.setLineDash([6, 8]);
  cx.lineWidth = 2;
  cx.beginPath();
  cx.moveTo(M.px, M.py - 26);
  cx.lineTo(M.px + Math.cos(a) * 120, M.py - 26 + Math.sin(a) * 120);
  cx.stroke();
  cx.setLineDash([]);
  if (G.inv > 0 && Math.floor(G.inv * 14) % 2) return;
  desenharAvatar(M.px, M.py + 14, 58);
  cx.strokeStyle = "#333";
  cx.lineWidth = 8;
  cx.lineCap = "round";
  cx.beginPath();
  cx.moveTo(M.px, M.py - 20);
  cx.lineTo(M.px + Math.cos(a) * 22, M.py - 20 + Math.sin(a) * 22);
  cx.stroke();
}

function desenharBala(b) {
  const municao = itemEquipado("canhao");
  if (municao) emoji(municao.emoji, b.x, b.y, 20);
  else {
    cx.fillStyle = "#ffd23f";
    cx.beginPath();
    cx.arc(b.x, b.y, 5, 0, Math.PI * 2);
    cx.fill();
  }
}

function faixaMover() {
  cx.fillStyle = "rgba(255,255,255,0.10)";
  cx.fillRect(0, 430, W, H - 430);
  texto("⟷ arraste aqui para andar", W / 2, 505, 13, "rgba(255,255,255,0.55)");
}

/* ---- 8.4 SELVA: tiro ao alvo com perguntas (Matemática) ---- */

function criarInimigoSelva() {
  const r = M.rodada, sorte = Math.random();
  if (r >= 3 && sorte < 0.2 && !M.inim.some(e => e.k === "macaco")) {
    return { k: "macaco", e: "🐒", x: rnd(60, W - 60), y: 190, hp: 3, vx: 55, tj: 1.2, r: 24, tam: 44 };
  }
  if (r >= 1 && sorte < 0.6) {
    const x = rnd(70, W - 70);
    return { k: "cobra", e: "🐍", x, x0: x, y: -30, hp: 1, r: 18, tam: 36, v: 105 };
  }
  return { k: "javali", e: "🐗", x: rnd(40, W - 40), y: -30, hp: 2, r: 24, tam: 48, v: 70 + r * 5 };
}

function matarInimigo(e) {
  G.inimigos++;
  flutuar("+" + ganharMoedas(e.k === "macaco" ? 4 : 2) + " 🪙", e.x, e.y);
}

function abrirAlvos() {
  const p = G.perguntas[G.qi];
  if (!p) { proximaRodadaSelva(); return; }
  G.qi++;
  const n = p.opcoes.length;
  M.alvos = {
    p, t: 0, total: 16, primeiro: null,
    bol: p.opcoes.map((txt, i) => ({ txt, i, x: W * (i + 1) / (n + 1), y: 122, vivo: true, ph: Math.random() * 6 }))
  };
  M.est = "alvos";
  M.tEst = 0;
}

function acertarBolha(bo) {
  const a = M.alvos;
  bo.vivo = false;
  const certa = bo.i === a.p.correta;
  if (a.primeiro === null) {
    a.primeiro = certa;
    registrarResposta(a.p.materia, certa);
    G.respondidas++;
  }
  if (certa) {
    fimAlvos(true);
  } else {
    G.combo = 0;
    flutuar("❌ Errou!", bo.x, bo.y + 36);
    som("erro");
  }
}

function fimAlvos(certa) {
  const a = M.alvos;
  let msg;
  if (certa) {
    const cheio = a.primeiro === true;
    flutuar("+" + premioAcerto(a.p.nivel, false, cheio) + " 🪙", W / 2, 170);
    M.triplo = 7;
    flutuar("💥 Tiro triplo!", W / 2, 200);
    som("acerto");
    msg = "✅ " + a.p.explicacao;
  } else {
    msg = "⏰ Tempo! " + a.p.explicacao;
  }
  M.msg = msg;
  M.alvos = null;
  M.est = "explic";
  M.tEst = 0;
}

function proximaRodadaSelva() {
  M.rodada++;
  if (M.rodada >= 8) {
    vitoriaEtapa();
    return;
  }
  M.est = "combate";
  M.tEst = 0;
}

MODOS.tiro = {
  criar() {
    return { px: W / 2, py: 468, cd: 0, triplo: 0, bal: [], rodada: 0, est: "combate", tEst: 0, spawn: 0.8, tt: 3, inim: [], troncos: [], proj: [], alvos: null, msg: "", T: 0, decor: Array.from({ length: 8 }, (_, i) => ({ y: i * 70, lado: i % 2 ? 1 : -1 })) };
  },
  objetivo() { return "🎯 Rodada " + Math.min(M.rodada + 1, 8) + "/8" + (M.triplo > 0 ? " • 💥 Triplo" : ""); },
  atualizar(dt) {
    M.T += dt;
    M.tEst += dt;
    M.triplo = Math.max(0, M.triplo - dt);
    dirigir(dt);
    dispararSePreciso(dt);
    M.decor.forEach(d => { d.y += 60 * dt; if (d.y > H + 40) d.y -= H + 80; });

    // Estados da rodada: combate -> alvos -> explicação
    if (M.est === "combate" && M.tEst >= 5 + Math.min(M.rodada, 4)) abrirAlvos();
    else if (M.est === "alvos") {
      M.alvos.t += dt;
      M.alvos.bol.forEach(b => { b.y = 122 + Math.sin(M.alvos.t * 2 + b.ph) * 8; });
      if (M.alvos.t >= M.alvos.total) fimAlvos(null);
    } else if (M.est === "explic" && M.tEst >= 3.2) proximaRodadaSelva();

    // Inimigos e troncos
    if (M.est !== "explic") {
      M.spawn -= dt;
      if (M.spawn <= 0) {
        M.spawn = (1.35 - M.rodada * 0.07) * (M.est === "alvos" ? 2.2 : 1);
        M.inim.push(criarInimigoSelva());
      }
      M.tt -= dt;
      if (M.tt <= 0) {
        M.tt = rnd(3, 5);
        M.troncos.push({ x: rnd(40, W - 40), y: -30, r: 20, rot: 0 });
      }
    }
    M.inim.forEach(e => {
      if (e.k === "javali") { e.y += e.v * dt; e.x += Math.sin(M.T * 2 + e.y / 50) * 20 * dt; }
      else if (e.k === "cobra") { e.y += e.v * dt; e.x = clamp(e.x0 + Math.sin(e.y / 32) * 55, 20, W - 20); }
      else if (e.k === "macaco") {
        e.x += e.vx * dt;
        if (e.x < 40 || e.x > W - 40) e.vx = -e.vx;
        e.tj -= dt;
        if (e.tj <= 0) { e.tj = 1.8; M.proj.push({ x: e.x, y: e.y + 20, vy: 150 }); }
      }
      if (e.hp > 0.001 && Math.hypot(e.x - M.px, e.y - (M.py - 20)) < e.r + 16) {
        e.hp = 0;
        ferir(15);
      }
    });
    M.inim = M.inim.filter(e => e.hp > 0.001 && e.y < H + 40);

    M.troncos.forEach(t => { t.y += 130 * dt; t.rot += dt * 3; });
    M.troncos = M.troncos.filter(t => {
      if (Math.hypot(t.x - M.px, t.y - (M.py - 20)) < t.r + 16) { ferir(15); return false; }
      return t.y < H + 40;
    });
    M.proj = M.proj.filter(p => {
      p.y += p.vy * dt;
      if (Math.hypot(p.x - M.px, p.y - (M.py - 20)) < 26) { ferir(12); return false; }
      return p.y < H + 20;
    });

    // Balas: acertam bolhas e inimigos
    M.bal = M.bal.filter(b => {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.x < -10 || b.x > W + 10 || b.y < -10) return false;
      if (M.alvos) {
        for (const bo of M.alvos.bol) {
          if (bo.vivo && Math.hypot(b.x - bo.x, b.y - bo.y) < 40) {
            acertarBolha(bo);
            return false;
          }
        }
      }
      for (const e of M.inim) {
        if (e.hp > 0.001 && Math.hypot(b.x - e.x, b.y - e.y) < e.r + 6) {
          e.hp -= stats.dano / 30;
          if (e.hp <= 0.001) matarInimigo(e);
          return false;
        }
      }
      return true;
    });
  },
  desenhar() {
    fundo("tiro", () => {
      const g = cx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#0f3d24");
      g.addColorStop(1, "#2f7a3e");
      cx.fillStyle = g;
      cx.fillRect(0, 0, W, H);
    });
    M.decor.forEach(d => { emoji("🌳", d.lado < 0 ? 18 : W - 18, d.y, 44); emoji("🌿", d.lado < 0 ? 52 : W - 52, d.y + 30, 24, 0.7); });
    faixaMover();
    M.troncos.forEach(t => {
      cx.save();
      cx.translate(t.x, t.y);
      cx.rotate(t.rot);
      emoji("🪵", 0, 0, 44);
      cx.restore();
    });
    M.inim.forEach(e => emoji(e.e, e.x, e.y, e.tam));
    M.proj.forEach(p => emoji("🥥", p.x, p.y, 22));
    M.bal.forEach(desenharBala);
    desenharAtirador();
    if (M.alvos) {
      const a = M.alvos;
      cx.font = "800 15px 'Baloo 2','Segoe UI',Arial,sans-serif";
      caixaTexto(a.p.texto, W / 2, 8, W - 20, 15);
      a.bol.forEach(b => {
        if (!b.vivo) return;
        cx.fillStyle = "rgba(255,255,255,0.92)";
        cx.strokeStyle = "#19c3c9";
        cx.lineWidth = 4;
        cx.beginPath();
        cx.arc(b.x, b.y, 36, 0, Math.PI * 2);
        cx.fill();
        cx.stroke();
        let tam = 17;
        cx.font = "800 " + tam + "px 'Baloo 2','Segoe UI',Arial,sans-serif";
        while (cx.measureText(b.txt).width > 62 && tam > 9) {
          tam--;
          cx.font = "800 " + tam + "px 'Baloo 2','Segoe UI',Arial,sans-serif";
        }
        texto(b.txt, b.x, b.y, tam, "#12304d");
      });
      cx.fillStyle = "rgba(255,255,255,0.7)";
      cx.fillRect(10, 168, (W - 20) * (1 - a.t / a.total), 4);
    }
    if (M.est === "explic") {
      cx.font = "800 16px 'Baloo 2','Segoe UI',Arial,sans-serif";
      caixaTexto(M.msg, W / 2, 190, W - 30, 16, "#fff");
    }
  }
};

/* ---- 8.x ARENA DOS HERÓIS: cobrinha em que cada resposta certa liberta um personagem ---- */

const COB = { cols: 12, rows: 16, cel: 30, oy: 40 };

function equipeCobra() {
  const ids = save.elenco.filter(possuiPersonagem);
  return ids.length ? ids : PERS.filter(p => p.gratis).map(p => p.id);
}

function celulaLivre(minDist) {
  const h = M.corpo[0];
  for (let t = 0; t < 300; t++) {
    const c = Math.floor(Math.random() * COB.cols), r = Math.floor(Math.random() * COB.rows);
    if (M.corpo.some(s => s.c === c && s.r === r) || M.itens.some(i => i.c === c && i.r === r)) continue;
    const dc = Math.min(Math.abs(c - h.c), COB.cols - Math.abs(c - h.c));
    const dr = Math.min(Math.abs(r - h.r), COB.rows - Math.abs(r - h.r));
    if (dc + dr >= minDist) return { c, r };
  }
  return null;
}

function nascerItem(k, minDist) {
  const cel = celulaLivre(minDist);
  if (cel) M.itens.push({ k, c: cel.c, r: cel.r });
}

function tratarItemCobra(it) {
  if (it.k === "moeda") {
    flutuar("+" + ganharMoedas(2) + " 🪙", M.px, M.py - 30);
    som("moeda");
  } else if (it.k === "rocha") {
    flutuar("💥 Pedra!", M.px, M.py - 30);
    ferir(golpe());
  } else if (it.k === "q") {
    perguntar(res => {
      M.resolv++;
      if (res && res.acertou) {
        const id = M.equipe[M.nSeg % M.equipe.length];
        M.nSeg++;
        M.cresce++;
        M.cast.push(id);
        G.inimigos = M.nSeg;
        flutuar("🎉 " + PERS.find(p => p.id === id).nome + " entrou no time!", W / 2, 200);
        som("acerto");
      } else {
        flutuar(res ? "Quase! Tente o próximo." : "Desafio pulado", W / 2, 200);
      }
      if (M.resolv >= 8) { terminar(true); return; }
      if (M.itens.filter(i => i.k === "rocha").length < 8) nascerItem("rocha", 4);
      nascerItem("q", 4);
    });
  }
}

function passoCobra() {
  const h = M.corpo[0];
  M.dir = M.fila;
  const nc = (h.c + M.dir.dc + COB.cols) % COB.cols;
  const nr = (h.r + M.dir.dr + COB.rows) % COB.rows;
  const antigo = M.corpo.map(s => ({ c: s.c, r: s.r }));
  const cresce = M.cresce > 0;
  // bater no próprio corpo (a ponta da cauda sai da frente quando não está crescendo)
  const bateu = M.corpo.some((s, i) => i < M.corpo.length - (cresce ? 0 : 1) && s.c === nc && s.r === nr);
  M.corpo.unshift({ c: nc, r: nr });
  if (cresce) { M.cresce--; antigo.push({ ...antigo[antigo.length - 1] }); } else M.corpo.pop();
  M.ant = antigo;
  if (bateu && G.inv <= 0) {
    flutuar("Ai! Bateu no time", M.px, M.py - 30);
    ferir(golpe());
  }
  const idx = M.itens.findIndex(i => i.c === nc && i.r === nr);
  if (idx >= 0) tratarItemCobra(M.itens.splice(idx, 1)[0]);
}

function posCobra(i, f) {
  const a = M.ant[i] || M.corpo[i], b = M.corpo[i];
  const salto = Math.abs(a.c - b.c) > 1 || Math.abs(a.r - b.r) > 1; // atravessou a borda
  const c = salto ? b.c : a.c + (b.c - a.c) * f, r = salto ? b.r : a.r + (b.r - a.r) * f;
  return { x: c * COB.cel + COB.cel / 2, y: COB.oy + r * COB.cel + COB.cel / 2 };
}

MODOS.cobra = {
  criar() {
    const ini = { c: 6, r: 12 };
    return { corpo: [ini], ant: [{ ...ini }], dir: { dc: 0, dr: -1 }, fila: { dc: 0, dr: -1 }, cresce: 0, acc: 0, passo: 0.23, itens: [], equipe: equipeCobra(),
      cast: [], nSeg: 0, resolv: 0, T: 0, px: 0, py: 0 };
  },
  iniciar() {
    nascerItem("q", 4);
    for (let i = 0; i < 3; i++) nascerItem("moeda", 2);
  },
  objetivo() { return "❓ Desafios: " + M.resolv + "/8 • 👥 Time: " + M.nSeg; },
  tecla(d) {
    const novo = d === "esq" ? { dc: -1, dr: 0 } : d === "dir" ? { dc: 1, dr: 0 } : d === "cima" ? { dc: 0, dr: -1 } : d === "baixo" ? { dc: 0, dr: 1 } : null;
    if (!novo) return;
    if (M.corpo.length > 1 && novo.dc === -M.dir.dc && novo.dr === -M.dir.dr) return; // não pode dar meia-volta
    M.fila = novo;
  },
  atualizar(dt) {
    M.T += dt;
    M.passo = Math.max(0.14, 0.23 - 0.01 * M.resolv);
    M.acc += dt;
    while (M.acc >= M.passo && !G.fim && !pausado) {
      M.acc -= M.passo;
      passoCobra();
    }
    if (M.itens.filter(i => i.k === "moeda").length < 3) nascerItem("moeda", 3);
    const p = posCobra(0, clamp(M.acc / M.passo, 0, 1));
    M.px = p.x;
    M.py = p.y + 30;
  },
  desenhar() {
    fundo("cobra", () => {
      cx.fillStyle = "#1c6b3a";
      cx.fillRect(0, 0, W, H);
      for (let r = 0; r < COB.rows; r++) {
        for (let c = 0; c < COB.cols; c++) {
          cx.fillStyle = (r + c) % 2 ? "#3a9a55" : "#43a85f";
          cx.fillRect(c * COB.cel, COB.oy + r * COB.cel, COB.cel, COB.cel);
        }
      }
      cx.fillStyle = "#0e3d24";
      cx.fillRect(0, 0, W, COB.oy);
    });
    texto("🐍 Arena dos Heróis", W / 2, 14, 15, "#fff", "center", true);
    texto("👥 Time: " + M.nSeg + "   ❓ " + M.resolv + "/8", W / 2, 31, 12, "#ffe08a", "center", true);

    M.itens.forEach(i => {
      const x = i.c * COB.cel + COB.cel / 2, y = COB.oy + i.r * COB.cel + COB.cel / 2;
      if (i.k === "q") emoji("❓", x, y, 30 + Math.sin(M.T * 6) * 2);
      else if (i.k === "moeda") emoji("🪙", x, y, 22);
      else emoji("🪨", x, y, 28);
    });

    const f = clamp(M.acc / M.passo, 0, 1);
    for (let i = M.corpo.length - 1; i >= 0; i--) {
      const p = posCobra(i, f);
      const y = p.y + Math.sin(M.T * 10 + i * 0.7) * 1.3;
      if (G.inv > 0 && i === 0 && Math.floor(G.inv * 14) % 2) continue;
      const pers = i === 0 ? null : PERS.find(q => q.id === M.cast[i - 1]);
      const tam = i === 0 ? 44 : 38;
      cx.fillStyle = "rgba(0,0,0,0.22)";
      cx.beginPath();
      cx.ellipse(p.x, p.y + 15, 12, 4, 0, 0, Math.PI * 2);
      cx.fill();
      if (pers && pers.arte) {
        desenharArte(pers.arte, p.x, y, 34);
      } else {
        const sp = spriteBusto(i === 0 ? avatarEmUso() : pers.cfg);
        if (sp) cx.drawImage(sp, p.x - tam * 0.42, y - tam * 0.52, tam * 0.84, tam);
        else emoji("🙂", p.x, y, tam * 0.7);
      }
      if (i === 0) {
        cx.strokeStyle = "#ffd23f";
        cx.lineWidth = 2;
        cx.beginPath();
        cx.arc(p.x, y, 21, 0, Math.PI * 2);
        cx.stroke();
      }
    }
  }
};

/* ---- Cartas e dois chefes ---- */

// Caixa de cartas (usada na Batalha do Corsário e no Vulcão)
function abrirCartas(res) {
  cartaCb = { res };
  const t = MODOS[G.modo].textoCartas(res);
  $("carta-ataque-texto").textContent = t.ataque;
  $("carta-reparo-texto").textContent = t.reparo;
  pausado = true;
  $("modal-cartas").classList.remove("oculto");
}

function usarCarta(tipo) {
  if (!cartaCb) return;
  const res = cartaCb.res;
  cartaCb = null;
  $("modal-cartas").classList.add("oculto");
  pausado = false;
  MODOS[G.modo].carta(tipo, res);
}

function barraCanvas(x, y, larg, valor, max, cor, rotulo) {
  cx.fillStyle = "rgba(0,0,0,0.55)";
  cx.fillRect(x, y, larg, 16);
  cx.fillStyle = cor;
  cx.fillRect(x, y, larg * clamp(valor / max, 0, 1), 16);
  cx.strokeStyle = "#fff";
  cx.lineWidth = 2;
  cx.strokeRect(x, y, larg, 16);
  texto(rotulo, x + larg / 2, y + 8, 11, "#fff", "center", true);
}

/* ---- 8.4 BATALHA DO CORSÁRIO: o barco com cartas (chefe da travessia) ----
   Mantém as regras do jogo antigo: acertou = escolhe uma carta; errou ou acabou o tempo =
   o barco bate na pedra e o Corsário atira. Aqui o erro tem consequência porque faz parte da mecânica. */

const EMAX = 130;
const DANO_PEDRA = 20;
const DANO_INIMIGO_NIVEL = { 1: 10, 2: 13, 3: 16 };

function danoCartaAtaque(res) {
  const passos = Math.min(Math.max(G.combo - 1, 0), 4);
  return Math.round(stats.dano * (1 + (res.rapido ? 0.3 : 0) + passos * 0.15));
}

function projetilCarta(res) {
  if (G.combo >= 5) return "☄️";
  if (G.combo >= 3) return "🔥";
  if (res.rapido) return "⚡";
  const municao = itemEquipado("canhao");
  return municao ? municao.emoji : null;
}

function pontosAfundou() {
  flutuar("🎉 Derrotado! +" + ganharMoedas(30) + " 🪙", 270, 230);
  som("moeda");
}

function iniciarTiroInimigo() {
  M.est = "inimigo";
  M.tEst = 0;
  M.bala = { t: 0, dur: 0.75, de: "inimigo" };
  sacudirTela(false);
  som("tiro");
}

MODOS.cartas = {
  criar() {
    return { px: 90, py: 330, ehp: EMAX, est: "pergunta", tEst: 0, T: 0, perguntando: false, bala: null, nivel: 1, bateu: false };
  },
  objetivo() { return "🦈 Tralalero Tralala: " + Math.ceil(M.ehp) + "/" + EMAX; },
  textoCartas(res) {
    return { ataque: "Tira " + danoCartaAtaque(res) + " de vida" + (projetilCarta(res) ? " " + projetilCarta(res) : ""), reparo: "Recupera " + stats.cura + " de vida" };
  },
  carta(tipo, res) {
    if (tipo === "ataque") {
      M.bala = { t: 0, dur: 0.75, de: "jogador", dano: danoCartaAtaque(res), proj: projetilCarta(res) };
      M.est = "tiro";
      M.tEst = 0;
      sacudirTela(false);
      som("tiro");
    } else {
      if (tipo === "escudo") {
        G.escudo = true;
        flutuar("🛡️ Escudo ativo!", 90, 260);
      } else {
        const cura = Math.min(stats.cura, stats.vidaMax - G.vida);
        G.vida += cura;
        flutuar(cura > 0 ? "🔧 +" + cura : "🔧 Vida cheia!", 90, 260);
      }
      M.est = "espera";
      M.tEst = 0;
    }
  },
  atualizar(dt) {
    M.T += dt;
    M.tEst += dt;
    if (M.est === "pergunta") {
      if (!M.perguntando) {
        M.perguntando = true;
        perguntar(res => {
          M.perguntando = false;
          M.nivel = res.nivel;
          if (res.acertou) abrirCartas(res);
          else { M.est = "pedra"; M.tEst = 0; M.bateu = false; }
        }, { semPular: true });
      }
    } else if (M.est === "tiro") {
      M.bala.t += dt;
      if (M.bala.t >= M.bala.dur) {
        const b = M.bala;
        M.bala = null;
        M.ehp = Math.max(0, M.ehp - b.dano);
        flutuar((b.proj || "💥") + " -" + b.dano, 270, 260);
        sacudirTela(true);
        som("boom");
        if (M.ehp <= 0) {
          G.inimigos++;
          pontosAfundou();
          M.est = "afundar";
        } else M.est = "espera";
        M.tEst = 0;
      }
    } else if (M.est === "espera") {
      if (M.tEst >= 0.7) iniciarTiroInimigo();
    } else if (M.est === "pedra") {
      if (!M.bateu && M.tEst >= 0.6) {
        M.bateu = true;
        sacudirTela(true);
        som("boom");
        ferir(DANO_PEDRA);
      }
      if (M.tEst >= 1.5) iniciarTiroInimigo();
    } else if (M.est === "inimigo") {
      M.bala.t += dt;
      if (M.bala.t >= M.bala.dur) {
        M.bala = null;
        sacudirTela(true);
        som("boom");
        ferir(DANO_INIMIGO_NIVEL[M.nivel] || 10);
        M.est = "descanso";
        M.tEst = 0;
      }
    } else if (M.est === "descanso") {
      if (M.tEst >= 0.8) { M.est = "pergunta"; M.tEst = 0; }
    } else if (M.est === "afundar") {
      if (M.tEst >= 1.3) terminar(true);
    }
  },
  desenhar() {
    fundo("cartas", () => {
      const ceu = cx.createLinearGradient(0, 0, 0, 330);
      ceu.addColorStop(0, "#6fcdfc");
      ceu.addColorStop(1, "#cdf1ff");
      cx.fillStyle = ceu;
      cx.fillRect(0, 0, W, 330);
      const mar = cx.createLinearGradient(0, 330, 0, H);
      mar.addColorStop(0, "#1aa6d4");
      mar.addColorStop(1, "#0b3d6b");
      cx.fillStyle = mar;
      cx.fillRect(0, 330, W, H - 330);
      emoji("☀️", 300, 90, 44);
      emoji("☁️", 70, 120, 48);
      emoji("☁️", 220, 170, 36);
    });
    cx.strokeStyle = "rgba(255,255,255,0.35)";
    cx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      const y = 345 + i * 28;
      cx.beginPath();
      for (let x = 0; x <= W; x += 20) cx.lineTo(x, y + Math.sin(x / 25 + M.T * 2 + i) * 3);
      cx.stroke();
    }
    const bob = Math.sin(M.T * 2) * 4;
    const batendo = M.est === "pedra" && M.tEst > 0.5 && M.tEst < 1.1;
    if (M.est === "pedra") emoji("🪨", 150, 372 - Math.min(1, M.tEst / 0.5) * 32, 46);
    const px = M.px + (batendo ? 24 : 0);
    emoji(stats.barco.emoji, px, M.py + bob, 72, undefined, itemEquipado("cor") ? itemEquipado("cor").filtro : null);
    desenharAvatar(px, M.py + 14 + bob, 42);
    const vela = itemEquipado("vela"), mascote = itemEquipado("mascote");
    if (vela) emoji(vela.emoji, px, M.py - 42 + bob, 24);
    if (mascote) emoji(mascote.emoji, px - 30, M.py + bob, 22);
    if (G.escudo) {
      cx.strokeStyle = "rgba(160,215,255,0.95)";
      cx.fillStyle = "rgba(120,200,255,0.2)";
      cx.lineWidth = 4;
      cx.beginPath();
      cx.arc(px, M.py + bob, 56, 0, Math.PI * 2);
      cx.fill();
      cx.stroke();
    }
    // Corsário (vira para a esquerda e afunda quando perde)
    const afundando = M.est === "afundar";
    cx.save();
    cx.translate(270, 330 + bob + (afundando ? M.tEst * 70 : 0));
    cx.scale(-1, 1);
    if (afundando) cx.globalAlpha = Math.max(0, 1 - M.tEst / 1.3);
    desenharArte(ARTES.tralalero, 0, 0, 100);
    cx.restore();
    cx.globalAlpha = 1;
    if (M.bala) {
      const t = M.bala.t / M.bala.dur;
      const de = M.bala.de === "jogador" ? [110, 300, 250] : [250, 300, 110];
      const x = de[0] + (de[2] - de[0]) * t, y = de[1] - 110 * Math.sin(Math.PI * t);
      if (M.bala.proj) emoji(M.bala.proj, x, y, 30);
      else {
        cx.fillStyle = "#222";
        cx.beginPath();
        cx.arc(x, y, 8, 0, Math.PI * 2);
        cx.fill();
      }
    }
    barraCanvas(16, 12, 160, G.vida, stats.vidaMax, "#2ecc71", save.nome);
    barraCanvas(184, 12, 160, M.ehp, EMAX, "#e03a3a", "Tralalero Tralala");
    if (G.combo >= 2) texto("🔥 Combo x" + G.combo, 90, 50, 14, "#ffe08a", "center", true);
  }
};

/* ---- Chefes: um único motor, vários chefes (estilo Cuphead) ----
   Sempre atacando, fases com padrões diferentes, esquiva (dash), parry nas bolas rosas e super.
   Cada golpe tira 20% da vida. Cada chefe é só uma configuração (vida, fases, ataques, arte e cenário). */

const DUR_PADRAO = { leque: 5, chuva: 6, anel: 5.5, espiral: 5, onda: 6, feixe: 5.5, rosa: 5 };
const COLUNAS = 6, LARG_COL = W / COLUNAS;

const BOSSES = {
  magmar: {
    nome: "Magmar", hp: 320, limites: [0.75, 0.45, 0.2], vel: [1, 1, 1.1, 1.2, 1.32], cenario: "vulcao", tam: 120, jogador: "avatar",
    intro: "🌋 Magmar desperta!", grande: "☄️", corBala: "#ffb000",
    arte: [[["👹", 0, 0, 1]], [["👺", 0, 0, 1]], [["😈", 0, 0, 1]], [["☠️", 0, 0, 1]]],
    falas: ["🌋 LUTE!", "🔥 Fase 2: Magmar acelera!", "💥 Fase 3: Fúria vulcânica!", "☠️ Fase final: tudo ou nada!"],
    padroes: {
      1: [["leque"], ["chuva"], ["anel"]],
      2: [["leque", "rosa"], ["espiral"], ["onda"], ["feixe"]],
      3: [["espiral", "chuva"], ["onda", "leque"], ["anel", "rosa"], ["feixe", "leque"]],
      4: [["espiral", "feixe"], ["onda", "anel", "rosa"], ["chuva", "leque"], ["espiral", "onda"]]
    }
  },
  bombardiro: {
    nome: "Bombardiro Crocodilo", hp: 150, limites: [0.5], vel: [1, 1, 1.15], cenario: "mar", tam: 130, jogador: "barco",
    intro: "✈️ Bombardiro Crocodilo chegou!", grande: "💣", corBala: "#ffcc00",
    arte: [ARTES.bombardiro],
    falas: ["✈️ Bombardiro chegou!", "💣 Fase 2: bombardeio total!"],
    padroes: { 1: [["chuva"], ["leque"]], 2: [["chuva", "leque"], ["anel"], ["chuva", "rosa"]] }
  },
  tungtung: {
    nome: "Tung Tung Tung Sahur", hp: 190, limites: [0.66, 0.33], vel: [1, 1, 1.1, 1.2], cenario: "praia", tam: 130, jogador: "avatar",
    intro: "🪵 Tung Tung Tung Sahur acordou!", grande: "🏏", corBala: "#ffd23f",
    arte: [ARTES.tungtung],
    falas: ["🪵 TUNG TUNG TUNG!", "🏏 Fase 2: bastão em fúria!", "💥 Fase 3: Sahur total!"],
    padroes: { 1: [["onda"], ["leque"]], 2: [["onda", "rosa"], ["espiral"]], 3: [["espiral", "onda"], ["feixe", "leque"]] }
  },
  chimpanzini: {
    nome: "Chimpanzini Bananini", hp: 170, limites: [0.66, 0.33], vel: [1, 1, 1.1, 1.2], cenario: "selva", tam: 130, jogador: "avatar",
    intro: "🍌 Chimpanzini Bananini apareceu!", grande: "🍌", corBala: "#ffe14d",
    arte: [ARTES.chimpanzini],
    falas: ["🍌 Banana alert!", "🐵 Fase 2: macaco maluco!", "💥 Fase 3: banana bomba!"],
    padroes: { 1: [["leque"], ["chuva"]], 2: [["anel", "rosa"], ["espiral"]], 3: [["chuva", "leque"], ["espiral", "feixe"]] }
  }
};

const golpe = () => Math.max(12, Math.round(stats.vidaMax * 0.2));
const cfgBoss = () => G.bossCfg;
const numFases = () => cfgBoss().limites.length + 1;
const fasePorHp = () => 1 + cfgBoss().limites.filter(l => M.bhp / cfgBoss().hp <= l).length;
const bala = (x, y, a, v, r) => ({ k: "bala", x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r });

function sortearPadrao() {
  const lista = cfgBoss().padroes[M.fase];
  let i;
  do { i = Math.floor(Math.random() * lista.length); } while (lista.length > 1 && i === M.ultimo);
  M.ultimo = i;
  const nomes = lista[i];
  M.atq = { t: 0, dur: Math.max(...nomes.map(n => DUR_PADRAO[n])), subs: nomes.map(n => ({ t: n, prox: 0.5, ang: Math.random() * 6.28, dir: Math.random() < 0.5 ? 1 : -1 })) };
  M.est = "atacar";
  M.tEst = 0;
}

function proximoPadrao() {
  const f = fasePorHp();
  if (f > M.fase) {
    M.fase = f;
    M.vel = cfgBoss().vel[f];
    M.est = "transicao";
    M.tEst = 0;
    M.haz = [];
    M.msg = cfgBoss().falas[f - 1];
    M.msgT = 2;
    sacudirTela(true);
    som("boom");
    return;
  }
  sortearPadrao();
}

function dispararSub(s) {
  const v = M.vel, ox = M.bx, oy = M.by + 40, fases = numFases();
  const forte = M.fase >= Math.max(2, fases - 1);      // fases finais
  const ultima = M.fase === fases;
  if (s.t === "leque") {
    s.prox = 1.0 / v;
    const n = ultima && fases > 2 ? 7 : M.fase >= 2 ? 5 : 3;
    const base = Math.atan2(M.py - 18 - oy, M.px - ox);
    for (let i = 0; i < n; i++) M.haz.push(bala(ox, oy, base + (i - (n - 1) / 2) * (0.9 / (n - 1)), 200 * v, 9));
  } else if (s.t === "chuva") {
    s.prox = 1.2 / v;
    const k = 2 + (forte ? 1 : 0) + (ultima && fases > 2 ? 1 : 0);
    embaralhar([0, 1, 2, 3, 4, 5]).slice(0, k).forEach(c => M.haz.push({ k: "marca", col: c, t: 0.85 / Math.sqrt(v) }));
  } else if (s.t === "anel") {
    s.prox = 1.6 / v;
    const n = 16, vazio = Math.floor(Math.random() * n), a0 = Math.random();
    for (let i = 0; i < n; i++) {
      if ((i - vazio + n) % n < 3) continue; // brecha para passar
      M.haz.push(bala(ox, oy, a0 + i * Math.PI * 2 / n, 135 * v, 8));
    }
  } else if (s.t === "espiral") {
    s.prox = (forte ? 0.11 : 0.1) / v;
    s.ang += (forte ? 0.6 : 0.5) * s.dir;
    M.haz.push(bala(ox, oy, s.ang, 165 * v, 7));
    if (forte) M.haz.push(bala(ox, oy, s.ang + Math.PI, 165 * v, 7));
  } else if (s.t === "onda") {
    s.prox = (forte ? 1.9 : 2.8) / v;
    M.haz.push({ k: "parede", y: -20, gap: rnd(90, W - 90), w: 108, t: 1.0, vy: 215 * v });
  } else if (s.t === "feixe") {
    s.prox = 1.8 / v;
    const xs = [M.px];
    if (forte) xs.push(clamp(M.px + (Math.random() < 0.5 ? -110 : 110), 30, W - 30));
    xs.forEach(x => M.haz.push({ k: "feixe", x, t: 0.85, ativo: 0.45 }));
  } else if (s.t === "rosa") {
    s.prox = 1.9;
    const b = bala(ox, oy, Math.atan2(M.py - 18 - oy, M.px - ox), 125, 12);
    b.rosa = true;
    M.haz.push(b);
  }
}

function atualizarHazards(dt) {
  const novos = [];
  const jx = M.px, jy = M.py - 18;
  M.haz = M.haz.filter(h => {
    if (h.k === "marca") {
      h.t -= dt;
      if (h.t <= 0) {
        novos.push({ k: "bala", x: h.col * LARG_COL + LARG_COL / 2, y: -20, vx: 0, vy: 330 * M.vel, r: 22, grande: true });
        return false;
      }
      return true;
    }
    if (h.k === "bala") {
      h.x += h.vx * dt;
      h.y += h.vy * dt;
      if (Math.hypot(h.x - jx, h.y - jy) < h.r + 10) {
        if (h.rosa && M.dashJan > 0) { parry(); return false; }
        if (G.inv > 0) return true; // invulnerável: a bala passa
        ferir(golpe());
        return false;
      }
      return h.x > -40 && h.x < W + 40 && h.y > -60 && h.y < H + 40;
    }
    if (h.k === "parede") {
      if (h.t > 0) { h.t -= dt; return true; }
      h.y += h.vy * dt;
      if (!h.hit && G.inv <= 0 && Math.abs(h.y - jy) < 14 && (jx < h.gap - h.w / 2 || jx > h.gap + h.w / 2)) {
        h.hit = true;
        ferir(golpe());
      }
      return h.y < H + 30;
    }
    if (h.k === "feixe") {
      if (h.t > 0) { h.t -= dt; return true; }
      h.ativo -= dt;
      if (!h.hit && G.inv <= 0 && Math.abs(jx - h.x) < 24) {
        h.hit = true;
        ferir(golpe());
      }
      return h.ativo > 0;
    }
    return false;
  });
  if (novos.length) M.haz.push(...novos);
  if (M.limpar) { M.haz = []; M.limpar = false; }
}

function parry() {
  M.dashJan = 0;
  M.meter = Math.min(100, M.meter + 25);
  G.inv = Math.max(G.inv, 0.3);
  flutuar("✨ PARRY!", M.px, M.py - 50);
  som("moeda");
}

function danoBoss(d) {
  if (M.est === "morte" || M.est === "intro" || M.est === "transicao") return;
  M.bhp -= d;
  M.flashB = 0.1;
  if (M.bhp <= 0) {
    M.bhp = 0;
    M.est = "morte";
    M.tEst = 0;
    M.haz = [];
    M.cristal = null;
    G.inimigos++;
    sacudirTela(true);
    som("boom");
    flutuar("💥 Derrotado!", M.bx, 130);
  }
}

function usarSuper() {
  if (M.meter < 100 || M.est === "morte" || M.est === "intro" || M.est === "transicao") return;
  M.meter = 0;
  M.feixe = 0.7;
  M.haz = [];
  G.inv = Math.max(G.inv, 0.8);
  flutuar("⭐ SUPER!", M.px, M.py - 50);
  sacudirTela(true);
  som("boom");
  danoBoss(45 * stats.dano / 30);
}

function moverBoss(dt) {
  let dx = (tec.dir ? 1 : 0) - (tec.esq ? 1 : 0), dy = (tec.baixo ? 1 : 0) - (tec.cima ? 1 : 0);
  let v = 215;
  if (M.dash > 0) {
    dx = M.dashDx; dy = M.dashDy; v = 650;
  } else if (!dx && !dy && ponteiro.ativo) {
    const ax = ponteiro.x - M.px, ay = ponteiro.y - 60 - M.py, d = Math.hypot(ax, ay);
    if (d > 4) { const f = Math.min(1, d / 40); dx = ax / d * f; dy = ay / d * f; }
  } else if (dx && dy) {
    dx *= 0.7071; dy *= 0.7071;
  }
  M.px = clamp(M.px + dx * v * dt, 20, W - 20);
  M.py = clamp(M.py + dy * v * dt, 280, 495);
}

// Cenários dos chefes (desenhados uma vez em cache)
function fundoBoss(cenario) {
  fundo("boss_" + cenario, () => {
    const faixas = (topo, base, y0, y1) => { const g = cx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, topo); g.addColorStop(1, base); cx.fillStyle = g; cx.fillRect(0, y0, W, y1 - y0); };
    if (cenario === "mar") {
      faixas("#2d3a66", "#e59a6b", 0, 300);
      faixas("#12507a", "#0b2a4a", 300, H);
      emoji("☁️", 80, 90, 60, 0.7); emoji("☁️", 270, 150, 46, 0.6);
    } else if (cenario === "praia") {
      faixas("#ff9a6b", "#ffe2a8", 0, 250);
      faixas("#2aa8d8", "#1b86b5", 250, 320);
      faixas("#f3d9a0", "#d9b878", 320, H);
      emoji("🌅", 300, 230, 50); emoji("🌴", 28, 300, 70); emoji("🌴", 332, 310, 64);
    } else if (cenario === "selva") {
      faixas("#0a2e1a", "#2f7a3e", 0, H);
      for (let i = 0; i < 6; i++) { emoji("🌳", 24, 60 + i * 90, 56, 0.55); emoji("🌳", 336, 90 + i * 90, 56, 0.55); }
    } else {
      faixas("#2b0b0b", "#ff6a00", 0, H);
      cx.fillStyle = "rgba(0,0,0,0.35)";
      cx.beginPath();
      cx.moveTo(W / 2 - 170, 230); cx.lineTo(W / 2 - 40, 60); cx.lineTo(W / 2 + 40, 60); cx.lineTo(W / 2 + 170, 230);
      cx.fill();
    }
  });
}

MODOS.chefe = {
  criar() {
    const cfg = cfgBoss();
    return { px: W / 2, py: 440, cd: 0, triplo: 0, bal: [], T: 0, bx: W / 2, by: 105, bhp: cfg.hp, est: "intro", tEst: 0, fase: 1, vel: 1, atq: null, haz: [],
      cristal: null, proxCristal: 12, msg: cfg.intro, msgT: 2.4, feixe: 0, flashB: 0, dash: 0, dashCd: 0, dashJan: 0, dashDx: 1, dashDy: 0, meter: 0, ultimo: -1, limpar: false };
  },
  objetivo() { return "👹 " + cfgBoss().nome + " " + Math.ceil(M.bhp) + "/" + cfgBoss().hp + " • Fase " + M.fase + "/" + numFases(); },
  textoCartas() {
    return { ataque: "Lança de fogo: " + Math.round(18 * stats.dano / 30) + " de dano + tiro triplo", reparo: "Recupera 1 golpe de vida" };
  },
  carta(tipo, res) {
    if (tipo === "ataque") {
      const d = 18 * stats.dano / 30 * (res.rapido ? 1.3 : 1);
      M.triplo = 6;
      M.feixe = 0.4;
      flutuar("🔥 -" + Math.round(d), M.bx, 150);
      danoBoss(d);
    } else if (tipo === "escudo") {
      G.escudo = true;
      flutuar("🛡️ Escudo ativo!", M.px, M.py - 50);
    } else {
      const cura = Math.min(golpe(), stats.vidaMax - G.vida);
      G.vida += cura;
      flutuar(cura > 0 ? "🔧 +" + cura : "🔧 Vida cheia!", M.px, M.py - 50);
    }
  },
  tecla(d) {
    if (d === "super") usarSuper();
    else if (d === "dash" && M.dashCd <= 0 && M.est !== "morte") {
      let dx = (tec.dir ? 1 : 0) - (tec.esq ? 1 : 0), dy = (tec.baixo ? 1 : 0) - (tec.cima ? 1 : 0);
      if (!dx && !dy) dx = M.px < W / 2 ? 1 : -1;
      const L = Math.hypot(dx, dy);
      M.dashDx = dx / L; M.dashDy = dy / L;
      M.dash = 0.2; M.dashJan = 0.35; M.dashCd = 1.0;
      G.inv = Math.max(G.inv, 0.35);
      som("moeda");
    }
  },
  atualizar(dt) {
    M.T += dt;
    M.tEst += dt;
    M.msgT = Math.max(0, M.msgT - dt);
    M.feixe = Math.max(0, M.feixe - dt);
    M.flashB = Math.max(0, M.flashB - dt);
    M.triplo = Math.max(0, M.triplo - dt);
    M.dash = Math.max(0, M.dash - dt);
    M.dashJan = Math.max(0, M.dashJan - dt);
    M.dashCd = Math.max(0, M.dashCd - dt);
    M.bx = W / 2 + Math.sin(M.T * 0.7 * M.vel) * 105 + (M.fase >= 3 ? Math.sin(M.T * 1.9) * 25 : 0);
    if (M.est !== "morte") {
      moverBoss(dt);
      M.cd -= dt;
      if (M.cd <= 0) { // tiro automático, sempre para cima
        M.cd = M.triplo > 0 ? 0.13 : 0.17;
        (M.triplo > 0 ? [-14, 0, 14] : [0]).forEach(o => M.bal.push({ x: M.px + o, y: M.py - 26, vy: -620 }));
        som("tiro");
      }
    }

    if (M.est === "intro") { if (M.tEst >= 2.2) sortearPadrao(); }
    else if (M.est === "transicao") { if (M.tEst >= 2) sortearPadrao(); }
    else if (M.est === "atacar") {
      M.atq.t += dt;
      M.atq.subs.forEach(s => { s.prox -= dt; if (s.prox <= 0) dispararSub(s); });
      if (M.atq.t >= M.atq.dur) { M.est = "pausa"; M.tEst = 0; }
    } else if (M.est === "pausa") { if (M.tEst >= 0.9) proximoPadrao(); }
    else if (M.est === "morte") { if (M.tEst >= 1.8) terminar(true); }

    if (M.est !== "morte") atualizarHazards(dt);

    // Cristal de sabedoria: pergunta opcional (difícil) que vale uma carta
    if (!M.cristal && G.qi < G.perguntas.length && (M.est === "atacar" || M.est === "pausa")) {
      M.proxCristal -= dt;
      if (M.proxCristal <= 0) M.cristal = { x: rnd(50, W - 50), y: rnd(340, 470), t: 0, vida: 9 };
    }
    if (M.cristal) {
      M.cristal.t += dt;
      M.cristal.vida -= dt;
      if (M.cristal.vida <= 0) {
        M.cristal = null;
        M.proxCristal = 10;
      } else if (Math.hypot(M.cristal.x - M.px, M.cristal.y - (M.py - 18)) < 34) {
        M.cristal = null;
        M.proxCristal = 16;
        perguntar(res => {
          if (res && res.acertou) abrirCartas(res);
          else flutuar("Sem carta desta vez", W / 2, 300);
        });
        return;
      }
    }

    // Tiros do jogador contra o chefe
    M.bal = M.bal.filter(b => {
      b.y += b.vy * dt;
      if (b.y < -10) return false;
      if (M.est !== "morte" && Math.abs(b.x - M.bx) < 62 && Math.abs(b.y - M.by) < 56) {
        danoBoss(stats.dano / 30);
        if (M.est === "atacar" || M.est === "pausa") M.meter = Math.min(100, M.meter + 0.4);
        return false;
      }
      return true;
    });
  },
  desenhar() {
    const cfg = cfgBoss();
    fundoBoss(cfg.cenario);

    M.haz.forEach(h => {
      if (h.k === "marca") {
        cx.fillStyle = "rgba(255,60,0," + (0.14 + 0.1 * Math.sin(M.T * 20)) + ")";
        cx.fillRect(h.col * LARG_COL, 0, LARG_COL, H);
        emoji("⚠️", h.col * LARG_COL + LARG_COL / 2, 190, 26);
      } else if (h.k === "bala") {
        if (h.grande) emoji(cfg.grande, h.x, h.y, 46);
        else {
          cx.fillStyle = h.rosa ? "#ff6fb1" : cfg.corBala;
          cx.beginPath();
          cx.arc(h.x, h.y, h.r, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = "#fff";
          cx.beginPath();
          cx.arc(h.x, h.y, h.r * 0.45, 0, Math.PI * 2);
          cx.fill();
        }
      } else if (h.k === "parede") {
        const y = h.t > 0 ? 190 : h.y;
        cx.globalAlpha = h.t > 0 ? 0.4 : 1;
        cx.fillStyle = "#ff5a1f";
        cx.fillRect(0, y - 12, h.gap - h.w / 2, 24);
        cx.fillRect(h.gap + h.w / 2, y - 12, W - (h.gap + h.w / 2), 24);
        cx.globalAlpha = 1;
        if (h.t > 0) {
          cx.fillStyle = "rgba(46,204,113,0.45)";
          cx.fillRect(h.gap - h.w / 2, 0, h.w, H);
          texto("⬇ brecha", h.gap, 215, 14, "#fff", "center", true);
        }
      } else if (h.k === "feixe") {
        if (h.t > 0) {
          cx.fillStyle = "rgba(255,255,255," + (0.12 + 0.12 * Math.sin(M.T * 30)) + ")";
          cx.fillRect(h.x - 23, 0, 46, H);
        } else {
          cx.fillStyle = "#fff3b0";
          cx.fillRect(h.x - 23, 0, 46, H);
          cx.fillStyle = "#ff8a1f";
          cx.fillRect(h.x - 23, 0, 5, H);
          cx.fillRect(h.x + 18, 0, 5, H);
        }
      }
    });

    // Chefe
    if (M.est !== "morte" || Math.floor(M.T * 12) % 2) {
      desenharArte(cfg.arte[Math.min(M.fase - 1, cfg.arte.length - 1)], M.bx, M.by, cfg.tam + (M.flashB > 0 ? 8 : 0));
      if (M.est === "intro" || M.est === "transicao") {
        cx.strokeStyle = "rgba(120,200,255,0.85)";
        cx.fillStyle = "rgba(120,200,255,0.15)";
        cx.lineWidth = 5;
        cx.beginPath();
        cx.arc(M.bx, M.by, 76, 0, Math.PI * 2);
        cx.fill();
        cx.stroke();
      }
    }
    if (M.feixe > 0) {
      cx.strokeStyle = "rgba(255,200,60," + Math.min(1, M.feixe * 2) + ")";
      cx.lineWidth = 12;
      cx.beginPath();
      cx.moveTo(M.px, M.py - 30);
      cx.lineTo(M.bx, M.by + 20);
      cx.stroke();
    }
    if (M.cristal) emoji("❓", M.cristal.x, M.cristal.y + Math.sin(M.cristal.t * 5) * 4, 44);

    cx.fillStyle = "#ffd23f";
    M.bal.forEach(b => cx.fillRect(b.x - 3, b.y - 10, 6, 14));

    // Jogador (avatar ou barco), pisca quando invulnerável e mostra a recarga do dash
    cx.fillStyle = "rgba(0,0,0,0.3)";
    cx.beginPath();
    cx.ellipse(M.px, M.py + 14, 16, 5, 0, 0, Math.PI * 2);
    cx.fill();
    if (!(G.inv > 0 && Math.floor(G.inv * 14) % 2)) {
      if (cfg.jogador === "barco") {
        const cor = itemEquipado("cor");
        emoji(stats.barco.emoji, M.px, M.py + 2, 58, undefined, cor ? cor.filtro : null);
        desenharAvatar(M.px, M.py + 8, 34);
      } else desenharAvatar(M.px, M.py + 14, 54);
    }
    if (M.dashCd > 0) {
      cx.strokeStyle = "rgba(255,255,255,0.7)";
      cx.lineWidth = 3;
      cx.beginPath();
      cx.arc(M.px, M.py + 14, 20, 0, Math.PI * 2 * (1 - M.dashCd));
      cx.stroke();
    }

    // Interface do chefão
    cx.fillStyle = "rgba(0,0,0,0.55)";
    cx.fillRect(16, 10, W - 32, 18);
    const fases = numFases();
    cx.fillStyle = M.fase === fases && fases > 1 ? "#ff3b3b" : M.fase >= 2 ? "#ffd23f" : "#2ecc71";
    cx.fillRect(16, 10, (W - 32) * clamp(M.bhp / cfg.hp, 0, 1), 18);
    cx.fillStyle = "rgba(255,255,255,0.8)";
    cfg.limites.forEach(p => cx.fillRect(16 + (W - 32) * p - 1, 10, 2, 18));
    cx.strokeStyle = "#fff";
    cx.lineWidth = 2;
    cx.strokeRect(16, 10, W - 32, 18);
    texto(cfg.nome + " • Fase " + M.fase + "/" + fases, W / 2, 19, 12, "#fff", "center", true);
    cx.fillStyle = "rgba(0,0,0,0.5)";
    cx.fillRect(16, 34, 110, 10);
    cx.fillStyle = M.meter >= 100 ? "#ffd23f" : "#b57cff";
    cx.fillRect(16, 34, 110 * M.meter / 100, 10);
    texto(M.meter >= 100 ? "⭐ SUPER PRONTO (E)" : "⭐ super", 134, 39, 11, M.meter >= 100 ? "#ffd23f" : "#fff", "left", true);
    if (M.msgT > 0) texto(M.msg, W / 2, 205, 21, "#ffe08a", "center", true);
    if (M.T < 8) texto("💨 dash esquiva • bola rosa no dash = parry", W / 2, H - 12, 12, "rgba(255,255,255,0.8)", "center", true);
  }
};

/* ================================================================
   9. RESULTADO, NOME, MENU, CÓDIGO, LOJA, ESTALEIRO, AVATAR E STATUS
   ================================================================ */

function desbloqueios(de, ate) {
  return BARCOS.filter(b => b.nivel > de && b.nivel <= ate).map(b => b.emoji + " " + b.nome + " na loja");
}

function chanceSecreta() {
  return Math.min(CHANCE_MAX, CHANCE_BASE + PASSO_CHANCE * save.falhasSecreto);
}

// Retorna o personagem descoberto ou null. Só é chamada depois de uma vitória com bom desempenho.
function tentarSecreto() {
  const faltam = SECRETOS.filter(s => !s.exclusivo && !save.secretos.includes(s.id));
  if (!faltam.length) return null;
  if (save.falhasSecreto >= GARANTIA || Math.random() < chanceSecreta()) {
    const achado = faltam[Math.floor(Math.random() * faltam.length)];
    save.secretos.push(achado.id);
    save.falhasSecreto = 0;
    return achado;
  }
  save.falhasSecreto++;
  return null;
}

function mostrarResultado(ganhou) {
  if (!G || G.resultado) return;
  G.resultado = true;
  cancelAnimationFrame(raf);

  const taxa = G.acertos / G.perguntas.length;
  const estrelas = taxa >= 0.9 ? 3 : taxa >= 0.6 ? 2 : taxa >= 0.3 ? 1 : 0;

  let moedas = G.moedas;
  let xpGanho = G.xp;
  if (ganhou) {
    moedas += Math.round(fase.premio * (1 + stats.bonusMoeda));
    xpGanho += fase.xp;
  }
  xpGanho = Math.round(xpGanho * (1 + stats.bonusXp));

  // Recompensa única da primeira conclusão desta fase
  let bonusFase = 0;
  if (ganhou && !save.missoes[fase.id]) {
    save.missoes[fase.id] = true;
    bonusFase = BONUS_PRIMEIRA_VITORIA;
    moedas += bonusFase;
  }
  if (ganhou && faseIdx === save.campanha) save.campanha++;

  const nivelAntes = infoNivel(save.xp).nivel;
  save.moedas += moedas;
  save.xp += xpGanho;
  const nivelDepois = infoNivel(save.xp).nivel;

  save.recordes.partidas++;
  if (ganhou) save.recordes.vitorias++;
  save.recordes.navios += G.inimigos;
  save.recordes.maiorCombo = Math.max(save.recordes.maiorCombo, G.maiorCombo);
  // O chefe derrotado entra para a sua coleção de personagens
  let ganhouPers = null;
  if (ganhou && fase.premioPers && !possuiPersonagem(fase.premioPers)) {
    save.personagens.push(fase.premioPers);
    ganhouPers = PERS.find(p => p.id === fase.premioPers);
  }
  if (fase.tipo === "cobra") save.recordes.maiorTime = Math.max(save.recordes.maiorTime || 0, G.inimigos);
  const secreto = ganhou && G.acertos * 2 >= Math.min(G.perguntas.length, 8) ? tentarSecreto() : null;
  salvar();

  const final = ganhou && faseIdx === FASES.length - 1;
  $("resultado-emoji").textContent = ganhou ? (final ? "💎" : "🏆") : "🌊";
  $("resultado-titulo").textContent = ganhou ? (final ? "Cristal recuperado!" : fase.bossNome ? fase.bossNome + " derrotado!" : fase.nome + " concluída!") : "Você caiu! Tente de novo.";
  $("resultado-estrelas").textContent = "⭐".repeat(estrelas) + "☆".repeat(3 - estrelas);
  $("resultado-acertos").textContent = G.acertos + " de " + G.perguntas.length;
  $("resultado-combo").textContent = G.maiorCombo;
  $("resultado-extra-rotulo").textContent = fase.tipo === "cobra" ? "Personagens no time" : "Inimigos derrotados";
  $("resultado-inimigos").textContent = G.inimigos;
  $("resultado-vida").textContent = Math.round((G.vida / stats.vidaMax) * 100);
  $("resultado-moedas").textContent = moedas;
  $("resultado-xp").textContent = xpGanho;

  const avisoNivel = $("resultado-nivel");
  if (nivelDepois > nivelAntes) {
    const novidades = desbloqueios(nivelAntes, nivelDepois);
    avisoNivel.textContent = "⬆️ Nível " + nivelDepois + "!" + (novidades.length ? " Desbloqueou: " + novidades.join(", ") : "");
    avisoNivel.classList.remove("oculto");
  } else {
    avisoNivel.classList.add("oculto");
  }

  let msg;
  if (!ganhou) msg = "Sem punição pelas respostas erradas: dá para tentar de novo, " + save.nome + ". Compre escudo, vida extra ou melhorias na loja!";
  else if (final) msg = "Você derrotou Magmar, " + save.nome + "! As ilhas lembram de tudo... menos você.";
  else if (estrelas === 3) msg = "Incrível, " + save.nome + "! Você é um verdadeiro mestre do conhecimento!";
  else msg = "Fase concluída! A próxima etapa já está liberada no mapa.";
  $("resultado-msg").textContent = msg;

  const prox = $("btn-prox-fase");
  prox.classList.toggle("oculto", !ganhou);
  prox.textContent = final ? "Ver o desfecho 🎬" : "Próxima fase ▶";
  mostrarTela("tela-resultado");

  if (bonusFase) mostrarAviso("🏅 Primeira conclusão: +" + bonusFase + " 🪙");
  if (ganhouPers) setTimeout(() => mostrarAviso("🎭 " + ganhouPers.nome + " entrou na sua coleção!"), bonusFase ? 3700 : 0);
  if (secreto) {
    setTimeout(() => {
      mostrarAviso("✨ DESCOBERTA SECRETA! " + secreto.nome + " entrou na sua coleção de 🎭 Personagens!");
      som("vitoria");
      confete();
    }, 1200);
  }
}

/* ---------- Nome do jogador (3 a 10 caracteres) ---------- */

function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function nomeProibido(nome) {
  const limpo = normalizar(nome);
  return NOMES_BLOQUEADOS_CONTEM.some(p => limpo.includes(p)) || NOMES_BLOQUEADOS_INICIO.some(p => limpo.startsWith(p));
}

/* ---------- Jogadores: cadastro, entrada e troca ---------- */

let loginPinAlvo = null;

const jogadoresPorAcesso = () => Object.values(bd.usuarios).sort((a, b) => b.acesso - a.acesso);

function mostrarErroLogin(texto) {
  $("login-erro").textContent = texto;
}

function abrirLogin() {
  loginPinAlvo = null;
  mostrarErroLogin("");
  $("input-nick").value = "";
  $("input-pin").value = "";
  $("login-pin-caixa").classList.add("oculto");
  $("btn-cancelar-login").classList.toggle("oculto", !bd.atual);
  $("login-nuvem").classList.toggle("oculto", !nuvemAtiva());
  renderLogin();
  mostrarTela("tela-login");
}

function renderLogin() {
  const lista = jogadoresPorAcesso();
  $("lista-jogadores").innerHTML = lista.length
    ? lista.map(u => '<button class="jogador" data-chave="' + esc(u.chave) + '"><strong>' + esc(u.apelido) + (u.save.vip ? " 👑" : "") + (u.pin ? " 🔒" : "") + "</strong><small>Nível " +
      infoNivel(u.save.xp).nivel + " • " + Math.min(u.save.campanha, FASES.length) + "/" + FASES.length + " fases</small></button>").join("")
    : '<p class="vazio">Ainda não há jogadores neste aparelho. Cadastre o primeiro!</p>';
  atualizarEstadoBd();
}

function escolherJogador(chave) {
  const u = bd.usuarios[chave];
  if (!u) return;
  mostrarErroLogin("");
  if (u.pin) {
    loginPinAlvo = chave;
    $("login-pin-nome").textContent = u.apelido;
    $("input-pin-entrar").value = "";
    $("login-pin-caixa").classList.remove("oculto");
    $("input-pin-entrar").focus();
    return;
  }
  entrarJogador(chave, false);
}

function confirmarPin() {
  const u = bd.usuarios[loginPinAlvo];
  if (!u) return;
  if (hashPin(u.chave, $("input-pin-entrar").value.trim()) !== u.pin) {
    mostrarErroLogin("Senha incorreta.");
    return;
  }
  entrarJogador(u.chave, false);
}

function entrarJogador(chave, novo) {
  bd.atual = chave;
  const u = bd.usuarios[chave];
  u.save = normalizarSave(u.save);
  u.save.nome = u.apelido;
  u.acesso = Date.now();
  save = u.save;
  gravarLocal();
  atualizarBotaoSom();
  if (novo && save.campanha === 0 && !save.historia.ilha) abrirFase(0); // a aventura começa com a história
  else irPara("menu");
  trazerDaNuvem();
}

async function criarJogador() {
  const nick = $("input-nick").value.trim().replace(/\s+/g, " ");
  const erro = validarApelido(nick);
  if (erro) { mostrarErroLogin(erro); return; }
  const chave = chaveApelido(nick);
  if (bd.usuarios[chave]) { mostrarErroLogin("Esse apelido já existe neste aparelho. Toque nele na lista para entrar."); return; }
  const pin = $("input-pin").value.trim();
  if (pin && !/^\d{4}$/.test(pin)) { mostrarErroLogin("A senha deve ter 4 números (ou deixe em branco)."); return; }
  $("btn-criar").disabled = true;
  try {
    if (nuvemAtiva()) {
      try {
        if (await nuvemBuscar(chave)) {
          mostrarErroLogin("Esse apelido já foi cadastrado em outro aparelho. Se for você, use “Já tenho cadastro”.");
          return;
        }
      } catch (e) { estadoNuvem = "erro"; /* sem internet: cadastra só neste aparelho */ }
    }
    bd.usuarios[chave] = { chave, apelido: nick, pin: pin ? hashPin(chave, pin) : null, criado: Date.now(), acesso: Date.now(), save: { ...padraoSave(), nome: nick } };
    entrarJogador(chave, true);
    mostrarAviso("Bem-vindo, " + nick + "! ⚓");
    await sincronizar();
  } finally {
    $("btn-criar").disabled = false;
  }
}

// Entrar com um apelido cadastrado em outro aparelho (precisa do banco online)
async function entrarComCadastro() {
  const nick = $("input-nick-nuvem").value.trim();
  const chave = chaveApelido(nick);
  if (chave.length < 3) { mostrarErroLogin("Digite o apelido cadastrado."); return; }
  $("btn-entrar-nuvem").disabled = true;
  try {
    const linha = await nuvemBuscar(chave);
    estadoNuvem = "ok";
    if (!linha) { mostrarErroLogin("Não achei esse apelido no banco online."); return; }
    if (linha.pin_hash && linha.pin_hash !== hashPin(chave, $("input-pin-nuvem").value.trim())) { mostrarErroLogin("Senha incorreta."); return; }
    const salvo = normalizarSave(linha.dados);
    salvo.nome = linha.apelido;
    bd.usuarios[chave] = { chave, apelido: linha.apelido, pin: linha.pin_hash || null, criado: Date.now(), acesso: Date.now(), save: salvo };
    entrarJogador(chave, false);
    mostrarAviso("☁️ Bem-vindo de volta, " + linha.apelido + "!");
  } catch (erro) {
    estadoNuvem = "erro";
    mostrarErroLogin("Não consegui falar com o banco online. Confira a internet.");
  } finally {
    $("btn-entrar-nuvem").disabled = false;
    atualizarEstadoBd();
  }
}

function apagarJogador() {
  if (!bd.atual || !bd.usuarios[bd.atual]) return;
  const u = bd.usuarios[bd.atual];
  if (!confirm("Apagar o jogador " + u.apelido + " deste aparelho? O progresso será perdido" + (nuvemAtiva() ? " (a cópia online continua guardada)." : "."))) return;
  delete bd.usuarios[bd.atual];
  bd.atual = null;
  save = padraoSave();
  gravarLocal();
  abrirLogin();
}

/* ---------- Ranking ---------- */

function desenharRanking(lista, titulo) {
  $("ranking-titulo").textContent = titulo;
  $("ranking-lista").innerHTML = lista.length
    ? lista.map((j, i) => '<div class="rank-linha' + (j.apelido === save.nome ? " eu" : "") + '"><span class="rank-pos">' + (["🥇", "🥈", "🥉"][i] || (i + 1) + "º") + "</span><strong>" + esc(j.apelido) +
      "</strong><small>Nível " + j.nivel + " • " + fmt(j.xp) + " XP • " + Math.min(j.campanha, FASES.length) + "/" + FASES.length + " fases • 🐍 " + (j.maior_time || 0) + "</small></div>").join("")
    : '<p class="vazio">Ninguém no ranking ainda.</p>';
}

async function renderRanking() {
  const local = jogadoresPorAcesso()
    .map(u => ({ apelido: u.apelido, xp: u.save.xp, nivel: infoNivel(u.save.xp).nivel, campanha: u.save.campanha, maior_time: (u.save.recordes && u.save.recordes.maiorTime) || 0 }))
    .sort((a, b) => b.xp - a.xp);
  desenharRanking(local, "💾 Jogadores deste aparelho");
  if (!nuvemAtiva()) return;
  try {
    const top = await nuvemRanking();
    estadoNuvem = "ok";
    desenharRanking(top || [], "☁️ Ranking online");
  } catch (erro) {
    estadoNuvem = "erro";
  }
  atualizarEstadoBd();
}

/* ---------- Bônus diário e código promocional ---------- */

function dataTexto(data) {
  return data.getFullYear() + "-" + String(data.getMonth() + 1).padStart(2, "0") + "-" + String(data.getDate()).padStart(2, "0");
}

function proximaSequencia() {
  const ontem = new Date();
  ontem.setDate(ontem.getDate() - 1);
  return save.ultimoBonus === dataTexto(ontem) ? save.sequencia + 1 : 1;
}

function valorBonus(sequencia) {
  return 50 + 10 * Math.min(sequencia - 1, 5);
}

function resgatarBonus() {
  if (save.ultimoBonus === dataTexto(new Date())) return;
  const sequencia = proximaSequencia();
  const valor = valorBonus(sequencia);
  save.moedas += valor;
  save.sequencia = sequencia;
  save.ultimoBonus = dataTexto(new Date());
  salvar();
  atualizarMenu();
  som("moeda");
  mostrarAviso("🎁 +" + valor + " moedas! Dias seguidos: " + sequencia);
}

function mostrarMensagemCodigo(texto, tipo) {
  const msg = $("codigo-msg");
  msg.textContent = texto;
  msg.className = "codigo-msg " + tipo;
}

function resgatarCodigo() {
  const digitado = normalizar($("input-codigo").value);
  if (!digitado) {
    mostrarMensagemCodigo("Digite um código.", "erro");
    return;
  }
  if (digitado !== CODIGO_VIP) {
    som("erro");
    mostrarMensagemCodigo("Código inválido.", "erro");
    return;
  }
  if (save.vip) {
    mostrarMensagemCodigo("Esse código já foi usado por este jogador.", "erro");
    return;
  }
  save.vip = true;
  if (!save.secretos.includes("s_neguebas")) save.secretos.push("s_neguebas");
  save.moedas += MOEDAS_VIP;
  save.xp = Math.max(save.xp, xpParaNivelMaximo());
  salvar();
  $("input-codigo").value = "";
  atualizarMenu();
  mostrarMensagemCodigo("👑 VIP ativado! +" + fmt(MOEDAS_VIP) + " moedas, nível máximo, Modo livre e o personagem secreto Neguebas, o Capitão!", "ok");
  setTimeout(() => mostrarAviso("🕵️ Personagem secreto desbloqueado: Neguebas, o Capitão! Veja em 🎭 Personagens."), 600);
  som("vitoria");
  confete();
}

/* ---------- Menu ---------- */

function atualizarMenu() {
  const info = infoNivel(save.xp);
  const atributos = estatisticas();
  const bonusDisponivel = save.ultimoBonus !== dataTexto(new Date());

  $("btn-livre").classList.toggle("oculto", !save.vip);
  atualizarEstadoBd();
  $("menu-nome").textContent = (save.nome || "capitão") + (save.vip ? " 👑" : "");
  $("menu-moedas").textContent = fmt(save.moedas);
  $("menu-nivel").textContent = info.nivel;
  $("menu-barco").innerHTML = '<div class="barco-montado grande">' + interiorBarco() + "</div>";
  $("menu-barco-nome").textContent = atributos.barco.nome + " • ❤️ " + atributos.vidaMax + " • 💣 " + atributos.dano + " • 🎒 " + save.carregados.length + "/" + MAX_EQUIPAMENTOS;
  $("menu-bonus-moedas").textContent = "+" + Math.round(atributos.bonusMoeda * 100) + "%";

  const proxima = FASES[Math.min(save.campanha, FASES.length - 1)];
  if (save.campanha >= FASES.length) {
    $("menu-missao").textContent = "🏆 Aventura concluída! Rejogue pelo mapa.";
    $("btn-continuar").textContent = "🗺️ Abrir o mapa";
  } else {
    $("menu-missao").textContent = "Próxima missão: " + proxima.icone + " " + proxima.nome;
    $("btn-continuar").textContent = save.campanha === 0 && !save.historia.ilha ? "▶ Começar aventura" : "▶ Continuar aventura";
  }

  if (info.necessario > 0) {
    $("menu-xp-barra").style.width = (info.resto / info.necessario) * 100 + "%";
    $("menu-xp-texto").textContent = info.resto + " / " + info.necessario + " XP para o nível " + (info.nivel + 1);
  } else {
    $("menu-xp-barra").style.width = "100%";
    $("menu-xp-texto").textContent = "Nível máximo!";
  }

  const botaoBonus = $("btn-bonus");
  botaoBonus.disabled = !bonusDisponivel;
  botaoBonus.textContent = bonusDisponivel
    ? "🎁 Bônus diário: +" + valorBonus(proximaSequencia()) + " 🪙"
    : "✅ Bônus de hoje resgatado";
}

/* ---------- Loja ---------- */

function linhaLoja(icone, nome, desc, botao) {
  return '<article class="item-loja"><div class="item-icone">' + icone + '</div><div class="item-info"><h3>' + nome + "</h3><p>" + desc + "</p></div>" + botao + "</article>";
}

function renderLoja() {
  const nivel = infoNivel(save.xp).nivel;
  $("loja-moedas").textContent = fmt(save.moedas);

  $("loja-barcos").innerHTML = BARCOS.map(b => {
    const possui = save.barcos.includes(b.id);
    let acao;
    if (save.barcoAtual === b.id) {
      acao = '<button class="botao botao-loja" disabled>✅ Equipado</button>';
    } else if (possui) {
      acao = '<button class="botao botao-loja" data-acao="equipar" data-id="' + b.id + '">Equipar</button>';
    } else if (nivel < b.nivel) {
      acao = '<button class="botao botao-loja" disabled>🔒 Nível ' + b.nivel + "</button>";
    } else {
      acao = '<button class="botao botao-loja" data-acao="comprar-barco" data-id="' + b.id + '"' + (save.moedas >= b.preco ? "" : " disabled") + ">🪙 " + fmt(b.preco) + "</button>";
    }
    const extra = (b.moedas ? " • 🪙 +" + Math.round(b.moedas * 100) + "%" : "") + (b.nota ? "<br>" + b.nota : "");
    return linhaLoja(b.emoji, b.nome, "❤️ " + b.vida + " • 💣 " + b.dano + extra, acao);
  }).join("");

  $("loja-melhorias").innerHTML = MELHORIAS.map(m => {
    const n = save.melhorias[m.id] || 0;
    const preco = m.base * (n + 1);
    const nivelTexto = "🟦".repeat(n) + "⬜".repeat(NIVEL_MAX_MELHORIA - n);
    const acao = n >= NIVEL_MAX_MELHORIA
      ? '<button class="botao botao-loja" disabled>⭐ Máximo</button>'
      : '<button class="botao botao-loja" data-acao="melhorar" data-id="' + m.id + '"' + (save.moedas >= preco ? "" : " disabled") + ">🪙 " + fmt(preco) + "</button>";
    return linhaLoja(m.icone, m.nome, m.desc + "<br>" + nivelTexto, acao);
  }).join("");

  const botaoCompra = (acao, id, preco) =>
    '<button class="botao botao-loja" data-acao="' + acao + '" data-id="' + id + '"' + (save.moedas >= preco ? "" : " disabled") + ">🪙 " + fmt(preco) + "</button>";

  $("loja-suprimentos").innerHTML =
    linhaLoja("❤️", "Vida extra", "Revive 1 vez ao cair, com 50% de vida. Você tem: " + save.vidas, botaoCompra("comprar-vida", "vida", PRECO_VIDA)) +
    linhaLoja("🛡️", "Defesa extra", "A próxima fase começa com escudo. Você tem: " + save.defesas, botaoCompra("comprar-defesa", "defesa", PRECO_DEFESA));

  $("equip-contagem").textContent = save.carregados.length + "/" + MAX_EQUIPAMENTOS;
  $("loja-equip").innerHTML = EQUIPAMENTOS.map(e => {
    const botao = !save.equipamentos.includes(e.id)
      ? botaoCompra("comprar-equip", e.id, e.preco)
      : '<button class="botao botao-loja" data-acao="carregar" data-id="' + e.id + '">' + (save.carregados.includes(e.id) ? "✅ Equipado" : "Equipar") + "</button>";
    return linhaLoja(e.emoji, e.nome, e.desc, botao);
  }).join("");
}

// O limite de 2 equipamentos é garantido aqui, não só na interface
function alternarEquipamento(id) {
  if (!save.equipamentos.includes(id)) return;
  if (save.carregados.includes(id)) {
    save.carregados = save.carregados.filter(x => x !== id);
    return;
  }
  if (save.carregados.length >= MAX_EQUIPAMENTOS) {
    const sai = EQUIPAMENTOS.find(e => e.id === save.carregados[0]);
    const entra = EQUIPAMENTOS.find(e => e.id === id);
    if (!confirm("Mochila cheia (" + MAX_EQUIPAMENTOS + "/" + MAX_EQUIPAMENTOS + "). Trocar " + sai.nome + " por " + entra.nome + "?")) return;
    save.carregados.shift();
  }
  save.carregados.push(id);
  save.carregados = save.carregados.slice(0, MAX_EQUIPAMENTOS);
}

function aoClicarNaLoja(evento) {
  const botao = evento.target.closest("[data-acao]");
  if (!botao || botao.disabled) return;
  const id = botao.dataset.id;
  const acao = botao.dataset.acao;

  if (acao === "comprar-vida") {
    if (save.moedas < PRECO_VIDA) return;
    save.moedas -= PRECO_VIDA;
    save.vidas++;
    mostrarAviso("❤️ Vida extra comprada!");
  } else if (acao === "comprar-defesa") {
    if (save.moedas < PRECO_DEFESA) return;
    save.moedas -= PRECO_DEFESA;
    save.defesas++;
    mostrarAviso("🛡️ Defesa extra comprada!");
  } else if (acao === "comprar-equip") {
    const e = EQUIPAMENTOS.find(x => x.id === id);
    if (!e || save.equipamentos.includes(id) || save.moedas < e.preco) return;
    save.moedas -= e.preco;
    save.equipamentos.push(id);
    mostrarAviso(e.emoji + " " + e.nome + " comprado! Toque em Equipar.");
  } else if (acao === "carregar") {
    alternarEquipamento(id);
  } else if (acao === "equipar" && save.barcos.includes(id)) {
    save.barcoAtual = id;
  } else if (acao === "comprar-barco") {
    const barco = BARCOS.find(b => b.id === id);
    if (!barco || save.barcos.includes(id) || save.moedas < barco.preco) return;
    save.moedas -= barco.preco;
    save.barcos.push(id);
    save.barcoAtual = id;
    mostrarAviso(barco.emoji + " " + barco.nome + " comprado e equipado!");
  } else if (acao === "melhorar") {
    const melhoria = MELHORIAS.find(m => m.id === id);
    if (!melhoria) return;
    const n = save.melhorias[id] || 0;
    const preco = melhoria.base * (n + 1);
    if (n >= NIVEL_MAX_MELHORIA || save.moedas < preco) return;
    save.moedas -= preco;
    save.melhorias[id] = n + 1;
    mostrarAviso(melhoria.icone + " " + melhoria.nome + " nível " + (n + 1) + "!");
  } else {
    return;
  }
  if (["comprar-vida", "comprar-defesa", "comprar-equip", "comprar-barco", "melhorar"].includes(acao)) som("moeda");
  salvar();
  renderLoja();
}

/* ---------- Coleção e loja de personagens ---------- */

let abaPers = "influencer";

function renderPersonagens() {
  $("pers-moedas").textContent = fmt(save.moedas);
  const time = save.elenco.filter(possuiPersonagem);
  $("pers-time").innerHTML = time.length
    ? time.map(id => '<button class="chip-time" data-acao="tirar" data-id="' + id + '" title="Tirar do time">' + figuraPers(PERS.find(p => p.id === id), 44) + "<small>✖</small></button>").join("")
    : '<span class="vazio">Time vazio: a cobrinha usará os personagens da Turma.</span>';
  $("pers-time-contagem").textContent = time.length + "/" + MAX_ELENCO;

  $("pers-abas").innerHTML = CATEGORIAS.map(c =>
    '<button class="aba' + (c.id === abaPers ? " ativa" : "") + '" data-acao="aba" data-id="' + c.id + '">' + c.nome + "</button>").join("");

  const lista = PERS.filter(p => p.cat === abaPers && (!p.secreto || possuiPersonagem(p.id)));
  $("pers-grade").innerHTML = lista.map(p => {
    const r = RARIDADES[p.raridade];
    const dono = possuiPersonagem(p.id);
    const noTime = save.elenco.includes(p.id);
    const usando = save.usando === p.id;
    const acoes = dono
      ? '<button class="botao botao-loja" data-acao="time" data-id="' + p.id + '">' + (noTime ? "✅ No time" : "🐍 Pôr no time") + "</button>" +
        (p.arte ? "" : '<button class="botao botao-loja botao-claro" data-acao="usar" data-id="' + p.id + '">' + (usando ? "✅ Em uso" : "👤 Jogar como") + "</button>")
      : '<button class="botao botao-loja" data-acao="comprar" data-id="' + p.id + '"' + (save.moedas >= r.preco ? "" : " disabled") + ">🪙 " + fmt(r.preco) + "</button>";
    return '<article class="cartao-pers" style="--raro:' + r.cor + '">' +
      '<span class="selo">' + (p.secreto ? "🕵️ Secreto" : r.nome) + "</span>" +
      '<div class="pers-arte' + (dono ? "" : " bloqueado") + '">' + figuraPers(p, 118) + "</div>" +
      "<h3>" + p.nome + "</h3><p>" + p.desc + "</p>" + acoes + "</article>";
  }).join("");
}

function aoClicarPersonagens(evento) {
  const botao = evento.target.closest("[data-acao]");
  if (!botao || botao.disabled) return;
  const id = botao.dataset.id, acao = botao.dataset.acao;
  const p = PERS.find(x => x.id === id);
  if (acao === "aba") {
    abaPers = id;
  } else if (acao === "comprar" && p && !p.secreto) {
    const preco = RARIDADES[p.raridade].preco;
    if (possuiPersonagem(id) || save.moedas < preco) return;
    save.moedas -= preco;
    save.personagens.push(id);
    if (save.elenco.length < MAX_ELENCO) save.elenco.push(id);
    som("moeda");
    mostrarAviso("🎉 " + p.nome + " entrou na sua coleção!");
  } else if ((acao === "time" || acao === "tirar") && p) {
    if (save.elenco.includes(id)) save.elenco = save.elenco.filter(x => x !== id);
    else if (possuiPersonagem(id)) {
      if (save.elenco.length >= MAX_ELENCO) { mostrarAviso("O time já tem " + MAX_ELENCO + " personagens. Tire um primeiro."); return; }
      save.elenco.push(id);
    }
  } else if (acao === "usar" && p && !p.arte && possuiPersonagem(id)) {
    save.usando = save.usando === id ? null : id;
  } else {
    return;
  }
  salvar();
  renderPersonagens();
}

/* ---------- Estaleiro ---------- */

function renderEstaleiro() {
  $("estaleiro-moedas").textContent = fmt(save.moedas);
  $("estaleiro-previa").innerHTML = '<div class="barco-montado">' + interiorBarco() + "</div>";

  $("estaleiro-lista").innerHTML = SLOTS.map(slot => {
    const chips = ITENS.filter(i => i.slot === slot.id && (!i.secreto || save.secretos.includes(i.id))).map(i => {
      const possui = save.itens.includes(i.id);
      const equipado = save.equip[slot.id] === i.id;
      const estado = equipado ? "✅ Em uso" : possui ? "Usar" : "🪙 " + fmt(i.preco);
      const semMoedas = !possui && save.moedas < i.preco;
      return '<button class="item-chip' + (equipado ? " equipado" : "") + '" data-item="' + i.id + '"' + (semMoedas ? " disabled" : "") + ">" +
        '<span class="chip-emoji">' + i.emoji + "</span><strong>" + i.nome + "</strong><small>" + i.ref + "</small>" +
        '<span class="chip-estado">' + estado + "</span></button>";
    }).join("");
    const nenhum = '<button class="item-chip' + (save.equip[slot.id] ? "" : " equipado") + '" data-limpar="' + slot.id + '">' +
      '<span class="chip-emoji">🚫</span><strong>Nenhum</strong><small>Sem ' + slot.nome.toLowerCase() + "</small></button>";
    return '<h3 class="titulo-secao">' + slot.icone + " " + slot.nome + '</h3><div class="grade-itens">' + nenhum + chips + "</div>";
  }).join("");
}

function aoClicarNoEstaleiro(evento) {
  const limpar = evento.target.closest("[data-limpar]");
  if (limpar) {
    save.equip[limpar.dataset.limpar] = null;
    salvar();
    renderEstaleiro();
    return;
  }

  const botao = evento.target.closest("[data-item]");
  if (!botao || botao.disabled) return;
  const item = ITENS.find(i => i.id === botao.dataset.item);
  if (!item) return;

  if (!save.itens.includes(item.id)) {
    if (save.moedas < item.preco) return;
    save.moedas -= item.preco;
    save.itens.push(item.id);
    save.equip[item.slot] = item.id;
    som("moeda");
    mostrarAviso(item.emoji + " " + item.nome + " comprado!");
  } else if (save.equip[item.slot] === item.id) {
    save.equip[item.slot] = null;
  } else {
    save.equip[item.slot] = item.id;
  }
  salvar();
  renderEstaleiro();
}

/* ---------- Avatar ---------- */

function renderAvatar() {
  const av = save.avatar;
  const usando = save.usando && possuiPersonagem(save.usando) ? PERS.find(p => p.id === save.usando) : null;
  $("avatar-usando").classList.toggle("oculto", !usando);
  if (usando) $("avatar-usando-nome").textContent = usando.nome;
  $("avatar-previa").innerHTML = avatarSVG(av);
  $("avatar-campos").innerHTML = AV_CAMPOS.filter(c => !c.so || c.so === av.genero).map(c => {
    let botoes = c.opcoes.map(o => {
      const valor = Array.isArray(o) ? o[0] : o;
      const ativo = av[c.id] === valor ? " ativo" : "";
      if (c.tipo === "cor") {
        return '<button class="amostra' + ativo + '" style="background:' + valor + '" data-campo="' + c.id + '" data-valor="' + valor + '" aria-label="' + c.nome + '"></button>';
      }
      return '<button class="opcao' + ativo + '" data-campo="' + c.id + '" data-valor="' + valor + '">' + o[1] + "</button>";
    }).join("");
    if (c.semNenhum) {
      botoes = '<button class="opcao' + (av[c.id] ? "" : " ativo") + '" data-campo="' + c.id + '" data-valor="">Sem vestido</button>' + botoes;
    }
    return '<h3 class="titulo-secao">' + c.nome + '</h3><div class="linha-opcoes">' + botoes + "</div>";
  }).join("");
}

function aoClicarNoAvatar(evento) {
  const botao = evento.target.closest("[data-campo]");
  if (!botao) return;
  const campo = botao.dataset.campo;
  const valor = botao.dataset.valor === "" ? null : botao.dataset.valor;
  save.avatar[campo] = valor;
  if (campo === "genero" && valor === "m") save.avatar.vestido = null;
  if (campo === "bermuda") save.avatar.vestido = null;
  salvar();
  renderAvatar();
}

function avatarAleatorio() {
  const sorteio = lista => lista[Math.floor(Math.random() * lista.length)];
  const genero = sorteio(["m", "f"]);
  save.avatar = {
    genero,
    pele: sorteio(PELES),
    cabelo: sorteio(AV_CAMPOS[2].opcoes)[0],
    corCabelo: sorteio(CORES_CABELO),
    chapeu: sorteio(AV_CAMPOS[4].opcoes)[0],
    olhos: sorteio(AV_CAMPOS[5].opcoes)[0],
    boca: sorteio(AV_CAMPOS[6].opcoes)[0],
    camisa: sorteio(CORES_ROUPA),
    bermuda: sorteio(CORES_ROUPA),
    vestido: genero === "f" && Math.random() < 0.5 ? sorteio(CORES_ROUPA) : null,
    sapato: sorteio(CORES_ROUPA)
  };
  salvar();
  renderAvatar();
}

/* ---------- Status ---------- */

function renderStatus() {
  const info = infoNivel(save.xp);
  $("status-titulo").textContent = "🏴‍☠️ " + save.nome + " • Nível " + info.nivel;

  const dados = Object.keys(MATERIAS).map(id => {
    const s = save.stats[id] || { c: 0, t: 0 };
    return { id, materia: MATERIAS[id], c: s.c, t: s.t, pct: s.t ? Math.round((s.c / s.t) * 100) : 0 };
  });
  const icones = { matematica: "🔢", ciencias: "🔬", geografia: "🗺️", historia: "📜", portugues: "✍️" };
  const ranking = dados.filter(d => d.t >= MIN_RESPOSTAS_RANKING).sort((a, b) => b.pct - a.pct || b.t - a.t);
  const melhor = ranking[0];
  const treinar = ranking.length > 1 ? ranking[ranking.length - 1] : null;

  let destaque;
  if (!melhor) {
    destaque = "<p>🔍 Jogue mais um pouco!</p><p>Responda pelo menos " + MIN_RESPOSTAS_RANKING + " perguntas de uma matéria para descobrir em qual você é melhor.</p>";
  } else {
    destaque = "<p>🏅 Sua melhor disciplina</p><p class=\"grande\">" + icones[melhor.id] + " " + melhor.materia + " (" + melhor.pct + "%)</p>";
    if (treinar && treinar.pct < melhor.pct) {
      destaque += "<p>📚 Para treinar mais: " + icones[treinar.id] + " " + treinar.materia + " (" + treinar.pct + "%)</p>";
    }
  }
  $("status-destaque").innerHTML = destaque;

  $("status-disciplinas").innerHTML = dados.map(d => {
    const eMelhor = melhor && melhor.id === d.id;
    return '<div class="status-linha' + (eMelhor ? " melhor" : "") + '">' +
      '<span class="status-icone">' + icones[d.id] + "</span>" +
      '<span class="status-nome">' + d.materia + (eMelhor ? " 🏅" : "") + "</span>" +
      '<div class="barra-materia"><div style="width:' + d.pct + '%"></div></div>' +
      '<span class="status-valor">' + d.pct + "% (" + d.c + "/" + d.t + ")</span></div>";
  }).join("");

  const r = save.recordes;
  $("status-geral").innerHTML =
    '<span class="chip">🗺️ Fases: ' + Math.min(save.campanha, FASES.length) + "/" + FASES.length + "</span>" +
    '<span class="chip">🎮 ' + r.partidas + " tentativas</span>" +
    '<span class="chip">🏆 ' + r.vitorias + " vitórias</span>" +
    '<span class="chip">👾 ' + r.navios + " inimigos</span>" +
    '<span class="chip">🔥 Maior combo: ' + r.maiorCombo + "</span>" +
    '<span class="chip">🕵️ Secretos: ' + save.secretos.length + "/" + SECRETOS.length + "</span>";
}

function irPara(destino) {
  if (destino === "menu") atualizarMenu();
  if (destino === "mapa") renderMapa();
  if (destino === "loja") renderLoja();
  if (destino === "estaleiro") renderEstaleiro();
  if (destino === "avatar") renderAvatar();
  if (destino === "personagens") renderPersonagens();
  if (destino === "ranking") renderRanking();
  if (destino === "status") renderStatus();
  mostrarTela("tela-" + destino);
}

/* ================================================================
   10. EVENTOS E INÍCIO (cada evento é registrado uma única vez)
   ================================================================ */

document.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-ir]");
  if (botao) irPara(botao.dataset.ir);
});

$("lista-jogadores").addEventListener("click", evento => {
  const botao = evento.target.closest("[data-chave]");
  if (botao) escolherJogador(botao.dataset.chave);
});
$("btn-criar").addEventListener("click", criarJogador);
$("btn-entrar-nuvem").addEventListener("click", entrarComCadastro);
$("btn-confirmar-pin").addEventListener("click", confirmarPin);
$("btn-cancelar-login").addEventListener("click", () => irPara("menu"));
$("btn-trocar").addEventListener("click", abrirLogin);
$("btn-cobrinha").addEventListener("click", jogarArena);
["input-nick", "input-pin"].forEach(id => $(id).addEventListener("keydown", evento => { if (evento.key === "Enter") criarJogador(); }));
$("input-pin-entrar").addEventListener("keydown", evento => { if (evento.key === "Enter") confirmarPin(); });
$("lista-fases").addEventListener("click", evento => {
  const botao = evento.target.closest("[data-fase]");
  if (botao && !botao.disabled) abrirFase(Number(botao.dataset.fase));
});

$("btn-continuar").addEventListener("click", continuarCampanha);
$("btn-hist-prox").addEventListener("click", proximaCena);
$("btn-hist-pular").addEventListener("click", pularHistoria);
$("tela-loja").addEventListener("click", aoClicarNaLoja);
$("tela-estaleiro").addEventListener("click", aoClicarNoEstaleiro);
$("avatar-campos").addEventListener("click", aoClicarNoAvatar);
$("tela-personagens").addEventListener("click", aoClicarPersonagens);
$("btn-voltar-avatar").addEventListener("click", () => { save.usando = null; salvar(); renderAvatar(); });
$("btn-avatar-sorte").addEventListener("click", avatarAleatorio);
$("btn-bonus").addEventListener("click", resgatarBonus);
$("btn-sair").addEventListener("click", sairDaFase);

$("btn-dica").addEventListener("click", usarDica);
$("btn-pular").addEventListener("click", pularQ);
$("btn-q-ok").addEventListener("click", continuarQ);
$("modal-rota").addEventListener("click", evento => {
  const botao = evento.target.closest("[data-rota]");
  if (botao) escolherRota(botao.dataset.rota);
});
document.querySelectorAll("#modal-cartas .carta").forEach(botao => {
  botao.addEventListener("click", () => usarCarta(botao.dataset.carta));
});

$("btn-repetir").addEventListener("click", () => iniciarFase(faseIdx));
$("btn-prox-fase").addEventListener("click", () => {
  if (faseIdx >= FASES.length - 1) mostrarHistoria(HIST_FIM, () => irPara("mapa"));
  else abrirFase(faseIdx + 1);
});

$("btn-codigo").addEventListener("click", resgatarCodigo);
$("input-codigo").addEventListener("keydown", evento => {
  if (evento.key === "Enter") resgatarCodigo();
});
$("input-codigo").addEventListener("input", () => { $("codigo-msg").textContent = ""; });

$("btn-som").addEventListener("click", () => {
  save.som = save.som === false;
  salvar();
  atualizarBotaoSom();
  som("moeda");
});

$("btn-resetar").addEventListener("click", apagarJogador);

atualizarBotaoSom();
if (bd.atual && bd.usuarios[bd.atual]) {
  save.nome = bd.usuarios[bd.atual].apelido;
  atualizarMenu();
  trazerDaNuvem();
} else {
  abrirLogin();
}
