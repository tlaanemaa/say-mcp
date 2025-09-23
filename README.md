# 🗣️ Say MCP

Give your AI agent a voice! This MCP server lets AI agents speak directly to you through text-to-speech.

> _"Finally, my AI can tell me dad jokes out loud!"_ 🎭

## 🚀 Quick Start

Add to your Cursor MCP configuration:

```json
{
  "mcpServers": {
    "say": {
      "command": "npx",
      "args": ["-y", "say-mcp"]
    }
  }
}
```

_That's it! Your AI can now talk to you._ ✨

## 🛠️ Available Tools

### 🎤 `speak`

Your AI's voice! Speaks text aloud to the user.

**Parameters:**

- `text` (string, required): What you want to say to the user
- `speed` (number, optional): Speech speed from 0.1 (very slow) to 3.0 (very fast). Default: 1.0

**Example Usage:**

```json
{
  "tool": "speak",
  "arguments": {
    "text": "Hello! I can now speak to you directly. 🤖",
    "speed": 1.2
  }
}
```

## 🌍 Platform Support

- **Windows**: Uses built-in SAPI voices 🪟
- **macOS**: Uses built-in `say` command 🍎
- **Linux**: Requires `espeak` or `festival` 🐧

## Development

```bash
npm install
npm run build
npm start
```

## License

MIT - Taavi Laanemaa
