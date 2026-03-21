
import devfinance from "../../../../assets/devfin.png";
import habit from "../../../../assets/habit.png";
import landing from "../../../../assets/landing.png";
import rabbit from "../../../../assets/rabbit.png";
import neoshop from "../../../../assets/neoshop.png";
import flowdo from "../../../../assets/flowdo.png";



import { Finance, FlowDo, github, Habits, Landing, PrevFinance, PrevFlowdo, Prevhabit, PrevLanding, PrevRabbit, PrevStore, Store } from "../../../links/links";

export const projects = [
  {
    id:"devfinance" ,
    title: "DevFinance",
    description: "App para organizar suas finanças pessoais tendo dashboard com gráficos e controle de gastos e receitas.",
    image: devfinance,
    onCode: Finance,
    onPreview: PrevFinance,
  },
  {
    title: "Ecommerce - Neoshop",
    description: "site de vendas online com carrinho de compras e vendas, onde o usuario pode criar sua loja e vender seus produtos.",
    image: neoshop,
    onCode: Store,
    onPreview: PrevStore,
  },
  {
    id:"habits" ,
    title: "Habits",
    description: "Controle de hábitos diários, ajudando na construção de rotinas saudáveis onde o usuario podera criar habitos, dieta e analisar seus status fisicos acompanhando seu progresso.",
    image: habit,
    onCode: Habits,
    onPreview: Prevhabit,
  },
    {
    id:"flowDo" ,
    title: "Flow-Do",
    description: "Uma plataforma que permite criar projetos, gerenciar tarefas com prioridades, convidar membros com controle de permissões, acompanhar atividades em um dashboard e trocar mensagens em chats internos, tudo em tempo real.",
    image: flowdo,
    onCode: FlowDo,
    onPreview: PrevFlowdo,
  },
  {
    id:"landing" ,
    title: "Landing Page",
    description: "Landing page moderna e responsiva para promover produtos e serviços de venda online.",
    image: landing,
    onCode: Landing,
    onPreview: PrevLanding,
  },
  {
    id:"rabbit" ,
    title: "Rabbit App",
    description: "Projeto experimental usando rabbitmq, nestjs e docker, onde o usuário pode enviar mensagens para uma fila e um consumidor processa essas mensagens exibindo no front.",
    image: rabbit,
    onCode: github,
    onPreview: PrevRabbit,
  }
];
