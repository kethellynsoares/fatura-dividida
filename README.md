# Fatura Dividida — site e guia de uso

Página de divulgação com lista de espera e o guia "Como usar".

| Arquivo | O que é |
|---|---|
| `index.html` | Página de venda (landing page) |
| `como-usar.html` | Guia de uso, com botão "Baixar em PDF" |
| `style.css` | Visual das duas páginas |
| `config.js` | **Onde você coloca o seu WhatsApp ou formulário** da lista de espera |
| `favicon.svg` | Ícone da aba do navegador |
| `Guia-Fatura-Dividida.pdf` | O guia já em PDF, para mandar por WhatsApp ou e-mail (não precisa ir para o GitHub) |

## 1. Configurar a lista de espera

Abra o `config.js` num editor de texto (Bloco de Notas serve) e preencha **um** dos dois:

```js
whatsapp: '5581999999999',          // DDI 55 + DDD + número, só números
formulario: 'https://forms.gle/…',  // ou o link de um Google Forms / Tally
```

- **WhatsApp:** os botões abrem uma conversa com você, com a mensagem pronta.
- **Formulário:** é melhor para juntar a lista numa planilha. No Google Forms, peça nome, WhatsApp ou e-mail, banco do cartão e com quem divide o cartão.

Sem nada preenchido, os botões avisam que a lista ainda não foi configurada.

## 2. Publicar no GitHub Pages

1. No GitHub, crie um repositório novo e **público**, por exemplo `fatura-dividida`.
2. **Add file → Upload files**: envie `index.html`, `como-usar.html`, `style.css`, `config.js`, `favicon.svg` e este `README.md` → **Commit changes**.
3. **Settings → Pages** → Branch `main`, pasta `/ (root)` → **Save**.
4. Em 1 ou 2 minutos o site fica em `https://kettydss1.github.io/fatura-dividida/`.

Para mudar um texto depois, edite o arquivo no próprio GitHub (ícone de lápis) e salve.

## Observações

- As telas e valores da página são **fictícios** ("Rafa" e números de exemplo).
- A página diz que a importação automática hoje funciona com o CSV do Nubank e que outros bancos são lançados à mão. Se isso mudar, atualize a seção de dúvidas.
- O rodapé deixa claro que o produto não é afiliado ao Nubank. Não use a marca nem as cores de bancos na divulgação.
- O guia descreve o app atual. Se o app mudar de nome ou de telas, atualize o `como-usar.html`.
