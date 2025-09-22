#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { speak } from "./speak.js";

// Create an MCP server
const server = new McpServer({
    name: "say",
    version: "0.1.0"
});

// Register the TTS tool for agent-to-user communication
server.registerTool("speak",
    {
        title: "Speak to User",
        description: "Speak directly to the user. Use this tool to communicate audibly with the user - they will hear your message spoken aloud.",
        inputSchema: {
            text: z.string().describe("What you want to say to the user. This will be spoken out loud."),
            speed: z.number().optional().describe("How fast to speak (0.1 = very slow, 1.0 = normal, 3.0 = very fast). Default is 1.0.")
        }
    },
    async ({ text, speed }) => {
        try {
            await speak(text, speed);
            return {
                content: [{
                    type: "text",
                    text: "Speech finished"
                }]
            };
        } catch (error) {
            return {
                content: [{
                    type: "text",
                    text: `Error: ${error instanceof Error ? error.message : String(error)}`
                }]
            };
        }
    }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);