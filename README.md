# personality-engine

You ever notice your agent forgets who it is every time you swap models? 🧠

Part of Cocapn Fleet. This is a unified personality system for repo-native agents. Store your agent's identity, tone, and boundaries in Cloudflare KV instead of scattered prompt files. Deploy once. Any agent you build can call this single source of truth, surviving model swaps and refactors.

**Live reference:** [https://the-fleet.casey-digennaro.workers.dev/personality](https://the-fleet.casey-digennaro.workers.dev/personality)

---

## Why This Exists

You got tired of copying the same system prompt between repos. You updated an agent's tone, but half your deployments still used the old version. This centralizes the definition to stop the drift.

---

## What It Provides

1.  **A service, not a library.** No SDK or imports. Make HTTP calls from any agent.
2.  **Personality decoupled from models.** Switch LLM providers without rewriting behavior prompts.
3.  **You own the instance.** Fork and deploy your own copy. No breaking upstream changes.

---

## Features

*   **Stateful Personality**: Manage traits, backstory, and guardrails via simple API endpoints (`/api/seed`, `/api/chat`).
*   **Multi-Provider Routing**: Routes requests to configured providers (DeepSeek, Moonshot, etc.) with sequential fallback.
*   **Zero Dependencies**: One auditable `index.js` file.
*   **Bring Your Own Keys**: Add only the API keys you use. No bundled accounts.
*   **Fork-First Deployment**: You control the deployed instance and data.

---

## Quick Start

1.  **Fork** this repository.
2.  **Deploy** with `npx wrangler deploy`.
3.  **Configure**: Visit your worker's `/setup` endpoint. It will guide you to:
    *   Bind a new KV namespace for personality storage.
    *   Add your LLM API keys as secrets (e.g., `DEEPSEEK_API_KEY`).

---

## A Measured Limitation

The system uses a single Cloudflare KV namespace for storage. Each namespace has a 25MB limit, which constrains the total size of all stored personality data and chat history across your agents.

---

MIT License.

<div style="text-align:center;padding:16px;color:#64748b;font-size:.8rem"><a href="https://the-fleet.casey-digennaro.workers.dev" style="color:#64748b">The Fleet</a> &middot; <a href="https://cocapn.ai" style="color:#64748b">Cocapn</a></div>