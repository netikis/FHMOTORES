# FH MOTORES — Segurança (igual HM Automotivo)

## Arquivos

| Arquivo | Vai pro GitHub? |
|---|---|
| `.env` | **Não** (gitignore) |
| `firebase-env.js` | **Não** (gerado no build / Actions) |
| `.env.example` | Sim (só nomes) |
| `firebase-env.example.js` | Sim (modelo vazio) |
| `firebase-config.js` | Sim (vazio — sem chaves) |
| `database.rules.json` | Sim (publique no Firebase Console) |

## Local (PC)

1. Copie `.env.example` → `.env` e preencha
2. `npm run build`
3. Abra `index.html` (precisa de internet + usuário no Authentication)

## GitHub Secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret**

Cole exatamente os nomes da tabela (veja a mensagem do assistente / abaixo).

## Firebase Console

1. **Authentication** → Sign-in method → E-mail/senha → Ativar  
2. **Authentication** → Users → Add user (e-mail e senha da equipe)  
3. **Realtime Database → Rules** → colar `database.rules.json` → Publish  
4. **Authentication → Settings → Authorized domains** → adicionar `seuusuario.github.io`

## Assinar online

No orçamento/venda: botão **✍️ Assinar** → gera link → WhatsApp.  
Cliente abre `assinar-fh.html?t=...` e assina.  
Na oficina: **⬇ Assinatura** para puxar a assinatura.

## Observação

Chaves Web do Firebase aparecem no navegador depois do deploy (normal).  
O que importa: **não versionar no GitHub** + **login + regras**.
