# Padrões de Estilização — Mentto

## Princípios gerais

- Toda estilização via classes CSS (Tailwind ou utilitários customizados em `globals.css`)
- Zero `style={}` inline nos componentes
- Fonte de heading: **Poppins** — fonte de corpo: **Open Sans**
- Fundo padrão: branco (`#FFFFFF`) ou off-white (`#F3F1EB`)
- Cor primária da marca: **Petróleo `#083D5F`**

---

## Paleta de cores

| Token CSS              | Valor hex   | Uso                                      |
|------------------------|-------------|------------------------------------------|
| `--color-petroleo`     | `#083D5F`   | Primária da marca, headings, botões CTA  |
| `--color-verde`        | `#107F8D`   | Acento secundário, seções de pesquisa    |
| `--color-terracota`    | `#C25D44`   | Acento terciário, destaques editoriais   |
| `--color-amarelo`      | `#FFC300`   | Destaque de eyebrow, hover e highlight   |
| `--color-grafite`      | `#333333`   | Texto principal de corpo                 |
| `--color-neutro`       | `#F3F1EB`   | Fundo alternado de seções                |
| `--color-branco`       | `#FFFFFF`   | Fundo principal, cards                   |

### Regras de uso
- Fundo da página: branco (`#FFFFFF`) ou neutro (`#F3F1EB`) — nunca outra cor
- Seções hero e CTA: petróleo (`#083D5F`) com `.hero-radial`
- Texto sobre fundo escuro: branco ou `#F3F1EB` com opacidade
- Nunca usar cores fora da paleta sem aprovação

---

## Tipografia

### Fontes
- **Heading:** Poppins — `font-heading` (500, 600, 700)
- **Corpo:** Open Sans — `font-body` (400, 600, 700)

### Escala de tamanhos recomendada

| Elemento  | Mobile          | Desktop          |
|-----------|-----------------|------------------|
| H1 hero   | `text-[2.75rem]`| `text-[4.5rem]`  |
| H1 página | `text-[2.25rem]`| `text-[3.75rem]` |
| H2        | `text-[2rem]`   | `text-[3rem]`    |
| H3        | `text-xl`       | `text-[1.375rem]`|
| Corpo lg  | `text-lg`       | `text-xl`        |
| Corpo     | `text-base`     | `text-base`      |
| Eyebrow   | `text-xs`       | `text-xs`        |

### Utilitário `.eyebrow`
Usar a classe `.eyebrow` para labels de seção acima de títulos:
```html
<span class="eyebrow text-[#FFC300]">O método</span>
```
- Poppins, 0.75rem, font-weight 600, letter-spacing 0.14em, uppercase

---

## Layout e espaçamento

### Container
Usar sempre `.container-mentto`:
- `max-width: 1200px`, centralizado, `padding-inline: 1.5rem`

### Espaçamento de seções
- Seção normal: `py-20 md:py-28`
- Seção hero/CTA: `py-24 md:py-32`
- Grid de colunas: `gap-6` (cards), `gap-12` (colunas de conteúdo)

---

## Componentes

### Botão primário (`.btn-primary`)
- Fundo petróleo, texto branco
- `rounded-md`, `px-6 py-3.5`, `font-heading font-semibold`
- Hover: `bg-[#083D5F]/85`

### Botão secundário (`.btn-secondary`)
- Border petróleo, texto petróleo, fundo transparente
- Hover: `bg-[#083D5F]/5`

### Botão destaque (`.btn-highlight`)
- Fundo amarelo (`#FFC300`), texto grafite (`#333`)
- Hover: `brightness-95`

### Cards (`.card`)
- `bg-white rounded-lg`
- Sombra padrão: `shadow-[0_1px_2px_rgba(8,61,95,0.06)]`
- Sombra hover: `shadow-[0_12px_32px_rgba(8,61,95,0.12)]`
- Sempre com barra colorida no topo via `.card-accent-*`

### Barra de acento colorida no topo de cards
```html
<div class="card-accent-petroleo" />  <!-- #083D5F -->
<div class="card-accent-verde" />     <!-- #107F8D -->
<div class="card-accent-terracota" /> <!-- #C25D44 -->
<div class="card-accent-amarelo" />   <!-- #FFC300 -->
```

### Hero / CTA (`.hero-radial`)
- Fundo petróleo com gradiente radial sutil
- Sempre com `relative overflow-hidden text-white`
- Padrão de chevron via `<ChevronPattern />`

### Inputs de formulário (`.form-input`)
- `border` padrão com `border-input`
- Focus: `focus:border-petroleo`

---

## Seções com fundo escuro

Quando o fundo for escuro (petróleo, verde), seguir estas regras:
- Texto principal: `text-white`
- Texto secundário: `text-[#F3F1EB]/85` ou `text-[#F3F1EB]/90`
- Eyebrow: `eyebrow text-[#FFC300]`
- Links hover: `hover:text-[#FFC300]`

---

## Nomenclatura de arquivos CSS

| Arquivo                          | Conteúdo                                  |
|----------------------------------|-------------------------------------------|
| `src/app/globals.css`            | Tema, base, utilitários globais           |
| `src/components/site-chrome.css` | Nav, Footer, Logo, PageHeader, SiteShell  |
| `src/app/home.css`               | Seções exclusivas da home                 |
| `src/app/contato/contato.css`    | Formulário e página de contato            |

---

## O que nunca fazer

- ❌ `style={{ color: "#083D5F" }}` — usar classe CSS
- ❌ `style={{ backgroundColor: f.accent }}` — usar classes `.card-accent-*`
- ❌ `style={{ borderColor: "rgba(...)" }}` — usar `.form-input` ou utilitário
- ❌ Cores hardcoded fora da paleta
- ❌ Fontes diferentes de Poppins/Open Sans
- ❌ Fundo colorido que não seja branco, neutro, petróleo ou verde
