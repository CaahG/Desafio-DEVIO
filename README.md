# ✅ Desafio de Qualidade na Devio

📌 **Testes Manuais, Exploratórios e Automatizados na Plataforma da Devio**  
Este documento descreve os testes realizados na aplicação da Devio, abrangendo testes manuais, exploratórios e testes automatizados utilizando Playwright. Foram validadas funcionalidades principais do sistema com foco em cadastros e fluxo de interação do usuário.

---

## 🧪 Tipos de Testes Realizados

### 🔍 Testes Manuais e Exploratórios

Foram realizados testes de navegação e funcionalidades da aplicação com foco em identificar comportamentos inesperados, usabilidade e bugs.

**Resultados:**
- 🐞 14 bugs encontrados
- 💡 3 melhorias sugeridas
- [Link para os relatorios](https://github.com/users/CaahG/projects/20)

---

### 🤖 Testes Automatizados com Playwright

Foram desenvolvidos testes de interface utilizando a ferramenta **Playwright**, com cobertura para cenários positivos e negativos.

**Cenários cobertos:**
- ✅ 3 testes positivos — verificam os fluxos principais com comportamento esperado
  - Cadastro de cliente com sucesso
  - Criação e remoção de cliente com sucesso
  - Validação de criaçao e visualição de dados de cliente
- ❌ 3 testes negativos — validam comportamentos incorretos identificados nos testes manuais (estes testes atualmente falham; passarão quando os bugs forem corrigidos)
  - Cadastro sem informações obrigatórias
  - Validação de campos de mascara de cadastro
  - Validação de criaçao de cadastros duplicados
 
---

## 🚀 Executando Testes Automatizados

Para executar os testes automatizados via **GitHub Actions** no fluxo de CI (Para executar os testes pela aba Actions, o usuario deve ser um contribuidor do repositorio), siga os passos abaixo:

1. 🧭 Acesse a aba **"Actions"** do repositório no GitHub.
2. 📂 Clique em **"Playwright Tests"** na barra lateral esquerda.
3. ▶️ Clique no botão **"Run workflow"** no canto superior direito.
4. 🔁 Confirme clicando novamente em **"Run workflow"** na tela exibida.
5. ⏳ Aguarde alguns segundos e clique na nova execução do job **"Playwright Tests"**.
6. ✅ Aguarde a conclusão e verifique os **resultados dos testes**.
  
---

## 🛠 Tecnologias Utilizadas

- 🎭 **Playwright** para automação de testes de UI
- ⚙️ **Node.js** e **JavaScript**
- 💻 **Visual Studio Code** como ambiente de desenvolvimento
- 🌍 **GitHub** para versionamento e integração contínua

---

## 📁 Estrutura do Projeto
```
Desafio-DEVIO
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── relatorio_bug.md
│   │   └── tarefa.md
│   └── workflows
│       └── playwright.yml
├── helpers
│   └── forms.js
├── node_modules/
├── playwright-report/
├── test-results/
├── tests
│   ├── cadastros-negativos.spec.js
│   └── cadastros-positivos.spec.js
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.js
└── README.md
---
```

## ✅ Considerações Finais

Os testes manuais e exploratórios foram essenciais para levantar pontos críticos de falhas na aplicação, enquanto os testes automatizados garantem a repetibilidade e cobertura contínua para os principais fluxos testados.  
A correção dos 14 bugs levantados permitirá que os testes negativos passem com sucesso no futuro.

---
