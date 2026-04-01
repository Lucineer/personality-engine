interface Env { PERSONALITIES: KVNamespace }
export default { async fetch(req: Request, env: Env) { if (new URL(req.url).pathname === '/') return new Response('<h1>Personality Engine</h1><p>Unified Agent Personalities</p>', { headers: { 'Content-Type': 'text/html' } }); return new Response('Not found', { status: 404 }); } };
