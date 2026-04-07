# personality-engine

You build good agents. They should sound like themselves.

A unified personality system for repo-native agents in the Cocapn Fleet. It keeps your agent's tone consistent across model changes and conversation resets.

### Try it live
Reference fleet instance: https://the-fleet.casey-digennaro.workers.dev

---

## Why this exists
Agent implementations often rebuild personality logic from scratch. Tone drifts when you switch backend models, and identity fades across context windows. This is a shared layer that fixes that.

## What it does
- Runs on Cloudflare Workers. Cold starts are typically fast. No servers or databases.
- Zero runtime dependencies. The entire codebase is minimal and easy to audit.
- Personality is persisted state, not hardcoded prompt text. Traits survive model swaps and context resets.
- Fork-first philosophy. There is no single canonical version. You own your copy.

## Quick Start
1.  Fork this repository: `gh repo fork Lucineer/personality-engine --clone`
2.  Deploy to Cloudflare Workers: `cd personality-engine && npx wrangler deploy`
3.  Add at least one LLM API key as a secret in the Cloudflare dashboard.

## How it works
A Cloudflare Worker that provides a consistent personality layer for agents. It acts as a uniform interface to multiple LLM providers, ensuring agents maintain identity regardless of the underlying model handling a request.

## Features
- **Multi-Provider Fallback**: Routes requests across available API keys (DeepSeek, Moonshot, DeepInfra, SiliconFlow).
- **Standard Endpoints**: Implements fleet-standard routes (`/health`, `/setup`, `/api/chat`, `/api/seed`).
- **Stateful Personality**: Uses KV storage for persistent personality traits.
- **Bring Your Own Key**: Use any supported LLM provider.

## Current Limitation
Only supports a fixed set of LLM providers. Adding a new one requires modifying the code.

## BYOK Setup
Visit your deployed worker's `/setup` endpoint for instructions. Add one or more of these secrets:
- `DEEPSEEK_API_KEY`
- `MOONSHOT_API_KEY`
- `DEEPINFRA_API_KEY`
- `SILICONFLOW_API_KEY`

## Contributing
This is an open fleet vessel. Fork the repository, make your improvements, and submit a pull request to share changes.

## License
MIT License © Superinstance & Lucineer (DiGennaro et al.).

---

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>