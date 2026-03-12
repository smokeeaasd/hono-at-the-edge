# 🌍 Geolocalização com Hono e Cloudflare Workers

Este é um projeto simples para demonstrar o uso de **Edge Computing** com **Cloudflare Workers** e o framework **Hono**. A API intercepta requisições na borda e retorna dados de geolocalização do usuário com latência mínima.

### 🚀 Por que Hono + Workers?

* **Hono:** Um framework ultra-veloz e leve, focado em Web Standards.
* **Cloudflare Workers:** Execução de código serverless distribuída globalmente (Edge), eliminando a necessidade de servidores tradicionais.

### ✅❌ Prós e Contras:
| Prós                          | Contras                         |
|-------------------------------|---------------------------------|
| Baixa latência global, perfeita para APIs de geolocalização | Limitações de recursos (CPU, memória) | 
| É fácil de configurar e escalar automaticamente | Curva de aprendizado para quem não conhece serverless |
| Cold Start quase inexistente, ideal para aplicações de alta performance | Nem toda biblioteca Node.js funciona, pois os Workers não rodam sobre Node, mas sim sobre uma API de Web Standards |
---

### 🛠️ Tecnologias

* [Hono](https://hono.dev/) - Framework minimalista para construir APIs e aplicações web com alta performance
* [Cloudflare Workers](https://workers.cloudflare.com/) - Plataforma serverless para executar código na borda da rede
* [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática em tempo de desenvolvimento
* [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - CLI para desenvolvimento e deploy de Workers

---

### 💻 Como rodar o projeto

**1. Instale as dependências:**

```bash
npm install
```

**2. Inicie o servidor de desenvolvimento local:**

```bash
npm run dev
```

**3. Faça o deploy para a Cloudflare:**

```bash
npm run deploy
```

---

### 🔧 Tipagem e Configuração

Para gerar ou sincronizar os tipos baseados na configuração do seu Worker (Wrangler), execute:

```bash
npm run cf-typegen
```

Ao instanciar o Hono, passe as `CloudflareBindings` como generics para garantir o suporte total ao TypeScript:

```ts
// src/index.ts
import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

// ...
```

### 🌐 Endpoint de Geolocalização

O endpoint `/` retorna informações de geolocalização do usuário, como país, cidade e coordenadas, utilizando os dados disponíveis na borda da Cloudflare.

```json
{
  "location": "São Paulo BR"
}
```
