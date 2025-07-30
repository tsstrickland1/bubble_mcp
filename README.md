# Bubble MCP

A Model Context Protocol (MCP) server that enables Claude Desktop to interact with Bubble.io applications. This server provides a standardized interface for reading and manipulating data in any Bubble application.

## 🚀 Features

- **Universal Bubble Support**: Works with any Bubble.io application
- **Auto-discovery**: Automatically discovers your app's data types and structure
- **CRUD Operations**: Create, Read, Update, and Delete operations for all data types
- **Workflow Execution**: Execute API workflows defined in your Bubble app
- **Privacy Settings Aware**: Respects Bubble's privacy rules and constraints
- **Read-only/Read-write Modes**: Configurable access levels for safety
- **Type-safe**: Provides detailed type information for all operations

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Bubble.io application with API access enabled
- Claude Desktop (for MCP integration)

## 🛠️ Installation

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nocoderoi/bubble_mcp.git
   cd bubble_mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Edit `.env` with your Bubble app details:
   ```env
   BUBBLE_BASE_URL=https://your-app.bubbleapps.io
   BUBBLE_API_TOKEN=your-bubble-api-token-here
   MCP_MODE=read-write  # Options: read-only, read-write
   ```

5. Build the project:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Getting Your Bubble API Token

1. Go to your Bubble app editor
2. Navigate to Settings → API
3. Enable "This app exposes a Data API"
4. Generate an API token
5. Copy the token to your `.env` file

### Setting Up Claude Desktop

1. Copy the example configuration:
   ```bash
   cp claude-desktop-config.example.json claude-desktop-config.json
   ```

2. Edit `claude-desktop-config.json`:
   ```json
   {
     "mcpServers": {
       "bubble": {
         "command": "node",
         "args": [
           "/absolute/path/to/bubble_mcp/dist/mcp-server.js",
           "--mode",
           "read-write"
         ],
         "env": {
           "BUBBLE_BASE_URL": "https://your-app.bubbleapps.io",
           "BUBBLE_API_TOKEN": "your-bubble-api-token-here",
           "MCP_MODE": "read-write"
         }
       }
     }
   }
   ```

3. Copy this configuration to Claude Desktop's config location:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

4. Restart Claude Desktop

## 🎯 Usage

Once configured, you can interact with your Bubble app through Claude Desktop:

### Available Commands

- **List Data Types**: "Show me all data types in my Bubble app"
- **Fetch Records**: "Get all users from my database"
- **Create Records**: "Create a new user with name 'John Doe'"
- **Update Records**: "Update user with ID xxx to set email to 'new@email.com'"
- **Delete Records**: "Delete the product with ID xxx"
- **Execute Workflows**: "Run the 'send_welcome_email' workflow for user xxx"

### Example Interactions

```
You: "List all the data types in my Bubble app"
Claude: I'll help you discover the data types in your Bubble app...

You: "Show me the first 5 customers"
Claude: I'll fetch the first 5 customers from your database...

You: "Create a new product called 'Widget' with price 29.99"
Claude: I'll create a new product for you...
```

## 🔒 Security Considerations

- **API Tokens**: Never commit your API tokens to version control
- **Read-only Mode**: Use read-only mode when you only need to view data
- **Privacy Rules**: The server respects Bubble's privacy rules - ensure your API token has appropriate permissions
- **Environment Variables**: Always use environment variables or secure configuration for sensitive data

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write clear, commented code
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Test with different Bubble app configurations

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot find data type"**: Ensure your Bubble app has the Data API enabled
2. **"Authentication failed"**: Check your API token is correct and has appropriate permissions
3. **"Privacy rule violation"**: Your API token may not have access to certain data types
4. **Claude Desktop not connecting**: Ensure the path in config is absolute and the server is built

### Debug Mode

Set `DEBUG=true` in your environment to enable verbose logging:
```bash
DEBUG=true npm run mcp
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- The Bubble.io team for their excellent platform
- Anthropic for Claude and the MCP protocol
- All contributors who help improve this project

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/nocoderoi/bubble_mcp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nocoderoi/bubble_mcp/discussions)
- **Documentation**: [Wiki](https://github.com/nocoderoi/bubble_mcp/wiki)

---

Made with ❤️ by the community
