Este portal é a interface centralizada da FUNDARPE para o cumprimento da Lei de Acesso à Informação (LAI). Desenvolvido em React + Vite, o projeto foca em alta performance, acessibilidade (WCAG) e segurança. A aplicação serve como porta de entrada para dados de licitações, recursos humanos e relatórios fiscais, integrando-se ao ecossistema de transparência do Estado de Pernambuco.

🔄 Fluxo de Desenvolvimento e Deploy (CI/CD)
O ciclo de vida deste software segue o padrão rigoroso da ATI, garantindo que apenas código testado e seguro chegue ao cidadão:

Desenvolvimento Local: Codificação no VS Code e validação via npm run dev.

Garantia de Qualidade: Execução de npm run lint e análise estática via SonarQube (exigência de Nota A em Segurança e Manutenibilidade).

Versionamento: Push para o GitLab PE (via OpenVPN) para acionamento das pipelines institucionais.

Homologação (HML): O código passa por testes de cobertura (meta de 90%) e é implantado em containers no ambiente de teste.

Produção (PRD): Após validação da diretoria, o deploy é automatizado via Nomad para os servidores oficiais.