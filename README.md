# personality-engine

You don't build a good agent by pasting prompt blobs at the top of every file. 🧠

A unified personality system for agents in the Cocapn Fleet.

---

## Why this exists
When you swap LLM models, debug an endpoint, or move code between repositories, your agent's personality often gets lost or inconsistent. Hardcoded prompts are fragile. This provides a stateful identity layer for your agents, separate from your application logic.

## What it does
- **Stores personality as state** in Cloudflare KV, not as text appended to prompts.
- **Provides a runtime service** your agents call to apply consistent identity, boundaries, and tone.
- **Routes requests** across multiple configured LLM providers (DeepSeek, Moonshot, etc.) with automatic fallback if one is unavailable.
- **Implements the Fleet protocol** with standard endpoints.

## One limitation
Your personality data is persisted to a Cloudflare KV namespace, which you must create and bind to your Worker during initial setup. It's not a complex step, but it is a manual one.

## Quick Start
1.  Fork and clone this repository.
2.  Run `npx wrangler deploy` from its directory.
3.  Follow the instructions at your worker's `/setup` endpoint to bind a KV namespace and add API keys as secrets.

## Architecture
A single-file Cloudflare Worker. It sits as a service your agents call. It applies the stored personality—traits, tone, context, boundaries—to each request before routing it to an LLM. Personality survives deployments and model changes because it's kept in KV storage.

## Key Features
- **Multi-Provider Routing**: Uses configured LLM APIs (DeepSeek, Moonshot, DeepInfra, SiliconFlow) with fallback.
- **Stateful Personality**: Managed via the `/api/seed` and `/api/chat` endpoints.
- **Zero Dependencies**: The entire runtime is one auditable file.
- **Bring Your Own Keys**: Add only the API keys you want to use.
- **Fork-First**: You deploy and own your instance.

## Live Reference
A public deployment is available for testing:  
[https://the-fleet.casey-digennaro.workers.dev/personality](https://the-fleet.casey-digennaro.workers.dev/personality)

---

MIT License.  
Superinstance & Lucineer (DiGennaro et al.).

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>