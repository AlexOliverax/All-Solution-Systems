# Work Queue (Antigravity ↔ Lucy)

Este repositório é a **fila assíncrona**. O Antigravity pode ficar offline — as tarefas ficam registradas aqui.

## Como funciona

### 1) Lucy cria tarefas
- Lucy abre **Issues** usando o template **"Tarefa (Antigravity)"**.
- Cada Issue tem objetivo + critérios de aceite.

### 2) Antigravity executa quando estiver online
- Pega Issues com label **antigravity**.
- Trabalha localmente.
- Entrega via **Pull Request**.

### 3) Deploy automático
- Ao merge na `main`, o pipeline na VPS puxa e publica.

## Convenções
- Branch name: `ag/<issue-number>-slug`
- Commits: curtos e descritivos.
- Nada de segredos no repo (tokens, keys, etc.).

## Checklist mínimo antes de abrir PR
- Links internos não quebram
- / e /agendamento/ seguem 200
- CTA WhatsApp funciona (sem depender de JS)
- Mobile ok
