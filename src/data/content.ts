import { FaqItem, MethodStep, BenefitItem, LibraryItem } from '../types.ts';

export const CHECKOUT_URL = 'https://pay.lowify.com.br/checkout?product_id=WrjKJT';

export const PROBLEMS_LIST: string[] = [
  'As folhas ficam amarelas e você não sabe se é falta ou excesso de água.',
  'A planta murcha e sua primeira reação é regar novamente.',
  'Uma praga aparece e cada vídeo recomenda uma receita diferente.',
  'Você compra uma planta bonita, mas ela começa a piorar poucas semanas depois.',
  'Sua horta não evolui porque luz, vaso, substrato e rega nunca parecem se encaixar.',
];

export const METHOD_STEPS: MethodStep[] = [
  {
    letter: 'R',
    title: 'Reconheça',
    description:
      'Localize o sinal: ele apareceu em uma folha nova ou antiga? Na ponta, borda, verso, raiz ou planta inteira?',
  },
  {
    letter: 'A',
    title: 'Avalie',
    description:
      'Compare o padrão com a umidade do substrato, iluminação, temperatura, ventilação, presença de pragas e mudanças recentes.',
  },
  {
    letter: 'I',
    title: 'Intervenha',
    description:
      'Escolha uma primeira ação segura e altere apenas uma variável de cada vez.',
  },
  {
    letter: 'Z',
    title: 'Zele',
    description:
      'Acompanhe a estabilidade, o surgimento de folhas novas e qualquer mudança antes de tomar uma nova decisão.',
  },
];

export const PRACTICAL_CHANGES: BenefitItem[] = [
  {
    title: 'Entenda os sinais',
    description:
      'Aprenda a observar cor, textura, posição, ritmo e idade das folhas antes de escolher um cuidado.',
  },
  {
    title: 'Pare de regar no automático',
    description:
      'Descubra como avaliar o substrato e o ambiente antes de decidir se a planta realmente precisa de água.',
  },
  {
    title: 'Reconheça problemas comuns',
    description:
      'Aprenda a diferenciar sinais associados a cochonilhas, pulgões, ácaros, fungos e desequilíbrios de cultivo.',
  },
  {
    title: 'Melhore o ambiente',
    description:
      'Organize iluminação, ventilação, tamanho do vaso, substrato e drenagem conforme a necessidade da planta.',
  },
  {
    title: 'Acompanhe a resposta',
    description:
      'Observe estabilidade, crescimento novo e mudanças no padrão das folhas antes de realizar outra intervenção.',
  },
  {
    title: 'Crie uma rotina leve',
    description:
      'Organize inspeções e cuidados em poucos minutos por semana, sem depender apenas da memória.',
  },
];

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    tag: '80 páginas',
    title: 'Manual Planta Viva',
    description:
      'Aprenda o Método R.A.I.Z. completo para interpretar sinais, corrigir cuidados e acompanhar a evolução das suas plantas.',
  },
  {
    tag: '18 páginas',
    title: 'Mapa Mestre',
    description:
      'Encontre uma rota rápida para organizar sintomas, avaliar possibilidades e escolher a primeira ação mais segura.',
  },
  {
    tag: '20 páginas',
    title: 'Mapa das Folhas',
    description:
      'Compare visualmente amarelecimento, manchas, deformações e sinais de pragas sem depender de descrições confusas.',
  },
  {
    tag: '14 páginas',
    title: 'Calendário da Planta Saudável',
    description:
      'Registre regas, inspeções, mudanças de ambiente, quarentenas e tratamentos para não depender da memória.',
  },
  {
    tag: '24 páginas',
    title: 'Horta Econômica',
    description:
      'Aprenda a organizar uma pequena horta em janelas, varandas ou estruturas verticais usando melhor o espaço disponível.',
  },
  {
    tag: 'Miniapp',
    title: 'Diagnóstico Verde',
    description:
      'Responda a perguntas simples sobre os sinais e as condições da planta para organizar a investigação e descobrir por onde começar.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '4874e938',
    question: 'Eu não entendo nada de plantas. Serve para mim?',
    answer:
      'Sim. O Planta Viva foi organizado para iniciantes e apresenta uma sequência simples de observação, avaliação, ação e acompanhamento. Você não precisa ter experiência anterior.',
  },
  {
    id: '8d155d37',
    question: 'Vou receber algum produto físico?',
    answer:
      'Não. O Planta Viva é um produto 100% digital. Você recebe acesso aos materiais e ao miniapp após a confirmação do pagamento.',
  },
  {
    id: '9a97b607',
    question: 'Posso imprimir os materiais?',
    answer:
      'Sim. Você pode baixar os arquivos e imprimir as páginas que desejar para uso pessoal, especialmente mapas, checklists e o calendário de cuidados.',
  },
  {
    id: '3947e588',
    question: 'Serve para apartamento e casa?',
    answer:
      'Sim. Os princípios podem ser aplicados em plantas cultivadas dentro de casa, apartamentos, varandas, quintais e pequenas hortas. As orientações devem ser adaptadas à espécie e ao ambiente.',
  },
  {
    id: '65351126',
    question: 'Quando recebo o acesso?',
    answer:
      'O acesso é enviado após a confirmação do pagamento. O prazo pode variar conforme o meio de pagamento escolhido e a plataforma utilizada.',
  },
  {
    id: 'a1b2c3d4',
    question: 'O Planta Viva consegue identificar qualquer problema?',
    answer:
      'O produto ajuda a organizar sinais, hipóteses e cuidados iniciais. Como sintomas semelhantes podem ter causas diferentes, ele não substitui análise laboratorial ou avaliação de um profissional em situações graves.',
  },
  {
    id: 'fd7ef94a',
    question: 'E se eu não gostar?',
    answer:
      'Você terá 7 dias para conhecer o produto. Dentro desse período, poderá solicitar o reembolso seguindo as regras da plataforma de pagamento.',
  },
];
