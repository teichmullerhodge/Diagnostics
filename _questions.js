export const Sectors = ["PreSales", "Sales", "SalesManagement", "FinancesManagement"];

export const Questions = {
    "PreSales": [
        {
            "Question": "Você utiliza técnicas de prospecção ativa?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, uso esporadicamente", "Weight": 5},
                {"Option": "C", "Text": "Sim, utilizo em parte do meu processo de vendas", "Weight": 10},
                {"Option": "D", "Text": "Sim, sou totalmente focado em prospecção ativa", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizo prospecção ativa combinado com ferramentas para segmentação", "Weight": 20}
            ]
        },
        {
            "Question": "A equipe de pré-vendas realiza follow-up sistemático com leads?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, ocasionalmente", "Weight": 5},
                {"Option": "C", "Text": "Sim, fazemos follow-up mas não sistematicamente", "Weight": 10},
                {"Option": "D", "Text": "Sim, realizamos follow-up regularmente", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizamos ferramentas especializadas e o follow-up é automatizado", "Weight": 20}
            ]
        },
        {
            "Question": "Você utiliza campanhas de marketing para geração de leads?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, campanhas esporádicas", "Weight": 5},
                {"Option": "C", "Text": "Sim, campanhas pontuais, como em eventos", "Weight": 10},
                {"Option": "D", "Text": "Sim, utilizamos campanhas regulares de marketing", "Weight": 15},
                {"Option": "E", "Text": "Sim, campanhas personalizadas e integradas, com alta segmentação", "Weight": 20}
            ]
        },
        {
            "Question": "A equipe de pré-vendas faz qualificação inicial dos leads?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, mas de maneira pouco estruturada", "Weight": 5},
                {"Option": "C", "Text": "Sim, com ferramentas básicas de qualificação", "Weight": 10},
                {"Option": "D", "Text": "Sim, utilizando um processo estruturado", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizando CRM para triagem", "Weight": 20}
            ]
        },
        {
            "Question": "Você possui um sistema de pontuação de leads (Lead Score)?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Estamos no processo de implementação", "Weight": 5},
                {"Option": "C", "Text": "Sim, utilizamos um sistema básico", "Weight": 10},
                {"Option": "D", "Text": "Sim, utilizamos um sistema funcional e organizado", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizamos um sistema avançado e automatizado de Lead Score", "Weight": 20}
            ]
        }
    ],

    "Sales": [
        {
            "Question": "A equipe de vendas utiliza um CRM para gerenciar o ciclo de vendas?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, utilizamos parcialmente", "Weight": 5},
                {"Option": "C", "Text": "Sim, utilizamos o CRM de maneira eficiente, mas sem integrações avançadas", "Weight": 10},
                {"Option": "D", "Text": "Sim, utilizamos CRM com integrações e automações básicas", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizamos CRM integrado a ferramentas avançadas, com automações complexas", "Weight": 20}
            ]
        },
        {
            "Question": "Sua equipe de vendas consegue realizar negociações consultivas com os clientes?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, mas de maneira pontual", "Weight": 5},
                {"Option": "C", "Text": "Sim, realizam negociações consultivas em algumas vendas", "Weight": 10},
                {"Option": "D", "Text": "Sim, realizam negociações consultivas regularmente", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizam uma abordagem consultiva para a maioria dos clientes", "Weight": 20}
            ]
        },
        {
            "Question": "Você utiliza métodos de fechamento como upselling e cross-selling?",
            "Answers": [
                {"Option": "A", "Text": "Não utilizamos", "Weight": 0},
                {"Option": "B", "Text": "Sim, utilizamos, mas esporadicamente", "Weight": 5},
                {"Option": "C", "Text": "Sim, utilizamos, mas de maneira pouco estruturada", "Weight": 10},
                {"Option": "D", "Text": "Sim, utilizamos frequentemente em nossos processos de vendas", "Weight": 15},
                {"Option": "E", "Text": "Sim, utilizamos de forma estratégica e bem estruturada", "Weight": 20}
            ]
        },
        {
            "Question": "A equipe de vendas faz análise de oportunidades de vendas antes de fechar negócios?",
            "Answers": [
                {"Option": "A", "Text": "Não", "Weight": 0},
                {"Option": "B", "Text": "Sim, ocasionalmente realizamos análises superficiais", "Weight": 5},
                {"Option": "C", "Text": "Sim, realizamos análises de oportunidades, mas não utilizamos ferramentas especializadas", "Weight": 10},
                {"Option": "D", "Text": "Sim, utilizamos ferramentas avançadas para análise de oportunidades", "Weight": 15},
                {"Option": "E", "Text": "Sim, realizamos análises detalhadas utilizando dados e previsões", "Weight": 20}
            ]
        },
        {
            "Question": "Sua equipe de vendas possui conhecimento em técnicas de negociação (SPIN SELLING por exemplo)?",
            "Answers": [
                {"Option": "A", "Text": "Não possui", "Weight": 0},
                {"Option": "B", "Text": "Sim, alguns vendedores", "Weight": 5},
                {"Option": "C", "Text": "Sim, a maior parte da equipe", "Weight": 10},
                {"Option": "D", "Text": "Sim, através de treinamentos mensais", "Weight": 15},
                {"Option": "E", "Text": "Sim, através de treinamentos mensais e rituais de gestão diários", "Weight": 20}
            ]
        }
    ],
    "SalesManagement": [
        {
            "Question": "A empresa utiliza indicadores chave de desempenho (KPI) para monitorar o desempenho da equipe comercial?",
            "Answers": [
                {"opcao": "A", "Text": "Não utilizamos", "Weight": 0},
                {"opcao": "B", "Text": "Utilizamos, mas de maneira esporádica", "Weight": 5},
                {"opcao": "C", "Text": "Sim, utilizamos alguns KPIs básicos", "Weight": 10},
                {"opcao": "D", "Text": "Sim, utilizamos KPIs fundamentais para o desempenho da equipe comercial", "Weight": 15},
                {"opcao": "E", "Text": "Sim, utilizamos KPIs avançados integrados a ferramentas de BI", "Weight": 20}
            ]
        },
        {
            "Question": "A equipe comercial realiza reuniões periódicas para análise de resultados e ajuste de estratégias?",
            "Answers": [
                {"opcao": "A", "Text": "Não realizamos", "Weight": 0},
                {"opcao": "B", "Text": "Sim, ocasionalmente realizamos reuniões", "Weight": 5},
                {"opcao": "C", "Text": "Sim, realizamos reuniões esporádicas para análise de resultados", "Weight": 10},
                {"opcao": "D", "Text": "Sim, realizamos reuniões periódicas para análise de resultados e estratégias", "Weight": 15},
                {"opcao": "E", "Text": "Sim, realizamos reuniões regulares utilizando ferramentas colaborativas", "Weight": 20}
            ]
        },
        {
            "Question": "A empresa utiliza ferramentas para analisar os dados dos processo de vendas, como CRM ou softwares de gestão de vendas?",
            "Answers": [
                {"opcao": "A", "Text": "Não utilizamos", "Weight": 0},
                {"opcao": "B", "Text": "Utilizamos ferramentas básicas, mas não de maneira efetiva", "Weight": 5},
                {"opcao": "C", "Text": "Sim, utilizamos um CRM básico para gestão de vendas", "Weight": 10},
                {"opcao": "D", "Text": "Sim, utilizamos CRM com funcionalidades para controle de vendas e pipeline", "Weight": 15},
                {"opcao": "E", "Text": "Sim, utilizamos um CRM avançado com funcionalidades integradas e automações", "Weight": 20}
            ]
        },
        {
            "Question": "A equipe comercial faz planejamento e organização de campanhas de vendas?",
            "Answers": [
                {"opcao": "A", "Text": "Não realizamos", "Weight": 0},
                {"opcao": "B", "Text": "Sim, ocasionalmente realizamos planejamento de campanhas", "Weight": 5},
                {"opcao": "C", "Text": "Sim, realizamos planejamento de campanhas, mas sem foco estratégico", "Weight": 10},
                {"opcao": "D", "Text": "Sim, planejamos campanhas de vendas com foco estratégico", "Weight": 15},
                {"opcao": "E", "Text": "Sim, planejamos campanhas de vendas utilizando análises e dados para direcionar ações", "Weight": 20}
            ]
        },
        {
            "Question": "A empresa utiliza estratégias de fidelização de clientes?",
            "Answers": [
                {"opcao": "A", "Text": "Não utilizamos", "Weight": 0},
                {"opcao": "B", "Text": "Utilizamos estratégias básicas, mas de maneira pouco estruturada", "Weight": 5},
                {"opcao": "C", "Text": "Sim, realizamos campanhas de fidelização, mas sem automação", "Weight": 10},
                {"opcao": "D", "Text": "Sim, utilizamos campanhas estruturadas e ações regulares para fidelização", "Weight": 15},
                {"opcao": "E", "Text": "Sim, utilizamos estratégias avançadas de fidelização, como programas de pontos e personalização", "Weight": 20}
            ]
        }
    ],

    "FinancesManagement": [
        {
            "Question": "A empresa possui controle de fluxo de caixa e previsão financeira mensal?",
            "Answers": [
                {"opcao": "A", "Text": "Não realizamos controle", "Weight": 0},
                {"opcao": "B", "Text": "Sim, realizamos de maneira básica e sem previsões regulares", "Weight": 5},
                {"opcao": "C", "Text": "Sim, realizamos controle e fazemos previsões financeiras mensais", "Weight": 10},
                {"opcao": "D", "Text": "Sim, utilizamos ferramentas especializadas para controle e previsões financeiras", "Weight": 15},
                {"opcao": "E", "Text": "Sim, realizamos controle avançado de fluxo de caixa com previsões automatizadas e dashboards financeiros", "Weight": 20}
            ]
        },
        {
            "Question": "A empresa realiza análise de rentabilidade por projeto ou cliente?",
            "Answers": [
                {"opcao": "A", "Text": "Não realizamos análise de rentabilidade", "Weight": 0},
                {"opcao": "B", "Text": "Sim, ocasionalmente realizamos análises superficiais", "Weight": 5},
                {"opcao": "C", "Text": "Sim, realizamos análises básicas de rentabilidade por cliente/projeto", "Weight": 10},
                {"opcao": "D", "Text": "Sim, utilizamos ferramentas para análise de rentabilidade por cliente/projeto", "Weight": 15},
                {"opcao": "E", "Text": "Sim, realizamos análises detalhadas de rentabilidade utilizando dados integrados a BI", "Weight": 20}
            ]
        },
        {
            "Question": "A empresa utiliza métodos de controle de custos para evitar desperdícios?",
            "Answers": [
                {"opcao": "A", "Text": "Não utilizamos", "Weight": 0},
                {"opcao": "B", "Text": "Utilizamos métodos básicos, mas não de maneira eficiente", "Weight": 5},
                {"opcao": "C", "Text": "Sim, utilizamos ferramentas para controle básico de custos", "Weight": 10},
                {"opcao": "D", "Text": "Sim, realizamos análises de custos e implementamos medidas para controle", "Weight": 15},
                {"opcao": "E", "Text": "Sim, utilizamos métodos avançados, como análise de custos em tempo real e otimizações contínuas", "Weight": 20}
            ]
        },
        {
            "Question": "A empresa possui um sistema de orçamento anual estruturado?",
            "Answers": [
                {"opcao": "A", "Text": "Não possuímos orçamento anual", "Weight": 0},
                {"opcao": "B", "Text": "Sim, realizamos um orçamento anual sem ferramentas específicas", "Weight": 5},
                {"opcao": "C", "Text": "Sim, realizamos um orçamento anual utilizando ferramentas básicas", "Weight": 10},
                {"opcao": "D", "Text": "Sim, realizamos orçamento anual com controle e ajustes durante o ano", "Weight": 15},
                {"opcao": "E", "Text": "Sim, utilizamos um sistema de orçamento com acompanhamento em tempo real e previsões automatizadas", "Weight": 20}
            ]
        },
        {
            "Question": "A empresa realiza gestão de risco financeiro, como hedges ou seguros?",
            "Answers": [
                {"opcao": "A", "Text": "Não realizamos gestão de riscos financeiros", "Weight": 0},
                {"opcao": "B", "Text": "Sim, realizamos gestão de riscos de maneira pontual", "Weight": 5},
                {"opcao": "C", "Text": "Sim, utilizamos ferramentas básicas para gestão de riscos financeiros", "Weight": 10},
                {"opcao": "D", "Text": "Sim, realizamos gestão de riscos financeiros estruturada", "Weight": 15},
                {"opcao": "E", "Text": "Sim, utilizamos métodos avançados para gestão de riscos financeiros e proteção de ativos", "Weight": 20}
            ]
        }
    ]


}
