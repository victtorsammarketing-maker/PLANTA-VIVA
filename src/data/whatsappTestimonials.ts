import samambaiaImg from '../assets/images/depoimento_samambaia_1789860901077.jpg';
import jiboiaImg from '../assets/images/depoimento_jiboia_1789860912391.jpg';
import costelaImg from '../assets/images/depoimento_costela_1789860922152.jpg';
import orquideaImg from '../assets/images/depoimento_orquidea_1789860932918.jpg';
import hortaImg from '../assets/images/depoimento_horta_1789860945692.jpg';
import lirioImg from '../assets/images/depoimento_lirio_1789860954543.jpg';
import suculentasImg from '../assets/images/depoimento_suculentas_1789860962733.jpg';
import zamioculcaImg from '../assets/images/depoimento_zamioculca_1789860972033.jpg';

export interface WhatsAppTestimonial {
  id: string;
  name: string;
  time: string;
  avatarColor: string;
  image: string;
  imageAlt: string;
  message: string;
  subMessage?: string;
  replyText?: string;
  replyTime?: string;
}

export const WHATSAPP_TESTIMONIALS: WhatsAppTestimonial[] = [
  {
    id: 'caso-1',
    name: 'Folhas Amareladas',
    time: 'Consulta',
    avatarColor: 'bg-emerald-600',
    image: samambaiaImg,
    imageAlt: 'Investigação de folhas amareladas em samambaia',
    message: 'Investigando folhas amareladas: como diferenciar se é apenas renovação natural da espécie ou início de umidade em excesso antes de suspender a rega.',
    replyText: 'No Mapa das Folhas, você localiza o padrão e avalia a drenagem antes de realizar qualquer corte.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-2',
    name: 'Avaliação de Rega',
    time: 'Consulta',
    avatarColor: 'bg-teal-700',
    image: jiboiaImg,
    imageAlt: 'Diagnóstico de umidade e rega na jiboia',
    message: 'Folhas murchas ou moles: aprenda a testar a umidade interna do substrato a 3 cm de profundidade para evitar regas automáticas desnecessárias.',
    replyText: 'O método ensina a observar o ritmo da planta e o peso do vaso antes de regar novamente.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-3',
    name: 'Adaptação e Luz',
    time: 'Consulta',
    avatarColor: 'bg-blue-600',
    image: costelaImg,
    imageAlt: 'Acompanhamento de brotação em costela de adão',
    message: 'Aplicação da etapa Reconhecer e Avaliar: posicionando plantas de sombra em luminosidade indireta adequada para estimular folhas novas com segurança.',
    replyText: 'Mude apenas uma condição de cada vez e acompanhe as reações nas semanas seguintes.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-4',
    name: 'Ambiente e Ventilação',
    time: 'Consulta',
    avatarColor: 'bg-amber-600',
    image: orquideaImg,
    imageAlt: 'Ambiente equilibrado para floração de orquídea',
    message: 'Equilíbrio entre luminosidade filtrada e circulação de ar: criando o ambiente adequado para o desenvolvimento saudável de folhagens e flores.',
    replyText: 'O Manual orienta como identificar locais com claridade estável sem expor a correntes de ar seco.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-5',
    name: 'Horta em Casa',
    time: 'Consulta',
    avatarColor: 'bg-green-700',
    image: hortaImg,
    imageAlt: 'Cultivo de temperos em espaço reduzido',
    message: 'Projeto do guia Horta Econômica: dimensionamento correto de vaso, camadas de drenagem e substrato leve para temperos e folhas em janela ou varanda.',
    replyText: 'Cultive temperos frescos aproveitando as horas de sol do seu espaço disponível.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-6',
    name: 'Miniapp Diagnóstico',
    time: 'Consulta',
    avatarColor: 'bg-rose-600',
    image: lirioImg,
    imageAlt: 'Verificação de sinais e pontas secas no miniapp',
    message: 'Uso do Miniapp Diagnóstico Verde: respondendo a perguntas simples sobre os sinais visíveis para descobrir qual cuidado checar primeiro.',
    replyText: 'Uma sequência lógica para investigar sintomas comuns sem recorrer a misturas caseiras arriscadas.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-7',
    name: 'Prevenção de Raízes',
    time: 'Consulta',
    avatarColor: 'bg-slate-700',
    image: suculentasImg,
    imageAlt: 'Rotina de cuidados para plantas sensíveis a excesso de água',
    message: 'Rotina com o Calendário da Planta Saudável: organizando inspeções semanais para prevenir o encharcamento e apodrecimento de raízes.',
    replyText: 'Menos intervenções por impulso resultam em plantas mais resistentes ao longo do ano.',
    replyTime: 'Guia R.A.I.Z.',
  },
  {
    id: 'caso-8',
    name: 'Acompanhamento Zele',
    time: 'Consulta',
    avatarColor: 'bg-indigo-600',
    image: zamioculcaImg,
    imageAlt: 'Acompanhamento do ritmo natural de folhagens',
    message: 'Etapa Zele do Método R.A.I.Z.: entendendo o ritmo natural de espécies de crescimento lento e mantendo a estabilidade do cultivo.',
    replyText: 'Respeite os ciclos da planta e evite trocar de vaso ou adubar em excesso sem necessidade.',
    replyTime: 'Guia R.A.I.Z.',
  },
];
