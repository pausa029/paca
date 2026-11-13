# Cacau — Controle da Fazenda

App offline para lançar entregas de cacau dos parceiros (meeiros), calcular arrobas, parte da fazenda, estoque e vendas.

## 1. Publicar no GitHub Pages (grátis)
1. Entre em github.com → **New repository** → nome `cacau` → **Public** → Create.
2. Clique em **uploading an existing file** e arraste TUDO desta pasta (`index.html`, `manifest.json`, `sw.js` e os ícones `icon-*.png`). → **Commit changes**.
3. Vá em **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
4. Em 1–2 minutos o link fica pronto: `https://SEU-USUARIO.github.io/cacau/`

> O código fica público, mas os **dados não**: cada pessoa só vê o que lançou no próprio celular. Nada é enviado para o GitHub nem para internet.

## 2. Instalar no iPhone
1. Abra o link no **Safari** (precisa ser o Safari).
2. Toque em **Compartilhar** (quadrado com seta) → **Adicionar à Tela de Início** → Adicionar.
3. Abra pelo ícone "Cacau". Depois da primeira abertura, funciona sem internet.

## 3. Instalar no Android
Abra o link no Chrome → menu ⋮ → **Instalar app** (ou "Adicionar à tela inicial").

## 4. Primeiro uso
1. **Ajustes**: nome da fazenda, arroba (15 kg), % da fazenda (50%), nome do estoque (Fortaleza), safra anterior em @ e saldo anterior em kg.
2. **Parceiros**: cadastre cada meeiro.
3. **Lançar**: data, quadra, parceiro, kg → o app calcula tudo.
4. **Vendas**: local, arrobas e preço → baixa do estoque.
5. Toque no nome de um parceiro para ver o extrato dele (ano inteiro ou por mês).

## 5. Backup (IMPORTANTE)
Os dados ficam só no aparelho. Toda semana: **Ajustes → Fazer backup** e salve o arquivo no iCloud Drive / WhatsApp. Para trocar de celular: **Restaurar backup**.

## Cálculos (iguais à planilha)
- @ = kg ÷ 15
- Fazenda kg = kg × 50% · Parceiro kg = o restante
- Produção @ e Total Fazenda @ = acumulados do ano
- % Safra passada = Total Fazenda @ ÷ Safra anterior @ × 100
- Estoque (Fortaleza) = saldo anterior + kg da fazenda − arrobas vendidas pela fazenda
