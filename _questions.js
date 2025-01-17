export const Sectors = ["PreSales", "Sales", "SalesManagement", "FinancesManagement"];

export const Questions = {
    "PreSales": [
        {
            "Question": "Como você realiza a prospecção de novos clientes?",
            "Answers": [
                {"Option": "A", "Text": "Realizo 100% de maneira inbound, com campanhas de marketing e tráfego pago", "Weight": 5},
                {"Option": "B", "Text": "Realizo 100% de maneira outbound, com estratégias de prospecção offline", "Weight": 5},
                {"Option": "C", "Text": "Realizo de forma híbrida com maior foco em inbound", "Weight": 15},
                {"Option": "D", "Text": "Realizo de forma híbrida com maior foco em outbound", "Weight": 10},
                {"Option": "E", "Text": "Realizo de forma híbrida com proporções equivalentes de inbound e outbound", "Weight": 20}
            ]
        },
        {
            "Question": "Como funciona o seu processo de atendimento dos leads?",
            "Answers": [
                {"Option": "A", "Text": "Ruim, falta script, fluxo de cadência, automação.", "Weight": 0},
                {"Option": "B", "Text": "Razoável, tenho script, porém falta fluxo de cadência e automação", "Weight": 5},
                {"Option": "C", "Text": "Bom, tenho script, fluxos de cadências, porém não tenho automações", "Weight": 10},
                {"Option": "D", "Text": "Ótimo, tenho script, fluxos de cadências e automações", "Weight": 15},
                {"Option": "E", "Text": "Excelente, tenho script, fluxos de cadências, automações e políticas comerciais", "Weight": 20}
            ]
        },
        {
            "Question": "Como você realiza as campanhas de marketing para geração de leads?",
            "Answers": [
                {"Option": "A", "Text": "Não realizo campanhas inbound", "Weight": 0},
                {"Option": "B", "Text": "Realizo de forma esporádica", "Weight": 5},
                {"Option": "C", "Text": "Realizo campanhas pontuais como eventos e campanhas comerciais", "Weight": 10},
                {"Option": "D", "Text": "Realizo campanhas contínuas de tráfego pago, porém com baixo controle", "Weight": 15},
                {"Option": "E", "Text": "Realizo campanhas contínuas com alta segmentação e controle de dados", "Weight": 20}
            ]
        },
        {
            "Question": "Como funciona a sua equipe de pré-vendas?",
            "Answers": [
                {"Option": "A", "Text": "Não tenho equipe de pré-vendas, atendimento apenas outbound", "Weight": 0},
                {"Option": "B", "Text": "Não tenho equipe de pré-vendas, os leads inbound vão para vendedores externos", "Weight": 5},
                {"Option": "C", "Text": "Não tenho equipe de pré-vendas, os leads inbound vão para vendedores internos", "Weight": 10},
                {"Option": "D", "Text": "Tenho equipe de pré-vendas, porém sem controle de performance", "Weight": 15},
                {"Option": "E", "Text": "Tenho equipe de pré-vendas, com controle de performance", "Weight": 20}
            ]
        },
        {
            "Question": "Selecione abaixo os canais que você utiliza para geração de demanda?",
            "Answers": [
                {"Option": "A", "Text": "Prospecção ativa do vendedor e networking", "Weight": 0},
                {"Option": "B", "Text": "Participação e patrocínios em feiras e eventos", "Weight": 5},
                {"Option": "C", "Text": "Programa de bonificação e indicação de novos clientes", "Weight": 10},
                {"Option": "D", "Text": "Tráfego pago", "Weight": 15},
                {"Option": "E", "Text": "Estratégias avançadas de marketing digital e influenciadores", "Weight": 20}
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
