# Yoopta Editor Demo

A complete implementation of [Yoopta Editor](https://github.com/yoopta-editor/Yoopta-Editor) using the **latest stable version v4.9.9**.

> **Note:** This project uses v4.9.9 (stable) instead of v6 beta due to peer dependency issues. See [PEER_DEPENDENCIES.md](PEER_DEPENDENCIES.md) for details.

## 📋 Overview

This project demonstrates a fully-featured rich text editor built with:
- **Yoopta Editor v4.9.9** (latest stable release)
- React 18+ with TypeScript
- Vite for fast development
- Slate 0.102.0
- Production-ready configuration

## ✨ Features

- **Rich Text Editing**: Paragraphs, headings (H1, H2, H3), blockquotes
- **Lists**: Bulleted lists, numbered lists, todo lists
- **Media**: Images, videos, files
- **Code Blocks**: Code syntax support
- **Layout Components**: Callout boxes, dividers
- **Inline Links**: Link support
- **Text Formatting**: Bold, italic, underline, strikethrough, code, highlight
- **UI Components**: 
  - Toolbar for text formatting
  - Action menu (type `/`)
- **Production Ready**: Stable v4 API, no peer dependency issues

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

Or with pnpm:

```bash
pnpm install
```

### Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📦 Packages Used

### Core Packages
- `@yoopta/editor` - Main editor core
- `@yoopta/ui` - UI components (toolb (v4.9.9)
- `slate`, `slate-react` - Peer dependencies (v0.102.0)

### Plugins
- `@yoopta/paragraph` - Basic paragraphs
- `@yoopta/headings` - H1, H2, H3 headings
- `@yoopta/lists` - Bulleted, numbered, and todo lists
- `@yoopta/blockquote` - Block quotes
- `@yoopta/code` - Code blocks
- `@yoopta/callout` - Callout/alert boxes
- `@yoopta/divider` - Visual dividers
- `@yoopta/image` - Image blocks
- `@yoopta/video` - Video embeds
- `@yoopta/file` - File attachments
- `@yoopta/link` - Inline links

### Marks (Text Formatting)
- `@yoopta/marks` - Bold, Italic, Underline, Strike, Code, Highlight

### UI Tools
- `@yoopta/toolbar` - Text formatting toolbar
- `@yoopta/action-menu-list` - Block insertion menu
## 🎯 Usage Examples

### Basic Editor Setup

The editor is initialized in `src/Editor.tsx`:

```tsx
import { createYooptaEditor } from '@yoopta/editor';

const editor = useMemo(() => createYooptaEditor(), []);
```

### Using the Editor

```tsx
<YooptaEditor
  editor={editor}
  plugins={PLUGINS}
  marks={MARKS}
  tools={TOOLS}
  autoFocus
  placeholder="Type / to open menu or start typing..."
  onChange={handleChange}
  style={EDITOR_STYLES}
/>
```

### Keyboard Shortcuts

- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `Ctrl/Cmd + U` - Underline
- `Ctrl/Cmd + Shift + S` - Strikethrough
- `Ctrl/Cmd + E` - Code mark
- `/` - Open slash command menu
- `Tab` - Indent
- `Shift + Tab` - Outdent

## 🛠️ Customization

### Adding More Plugins

Install additional plugins:

```bash
npm install @yoopta/table @yoopta/accordion @yoopta/tabs @yoopta/steps
```

Then add them to the plugins array in `src/Editor.tsx`:

```tsx
import Table from '@yoopta/table';
import Accordion froaccordion@4.9.9 @yoopta/embed@4.9.9
```

Then add them to the plugins array in `src/Editor.tsx`:

```tsx
import Accordion from '@yoopta/accordion';
import Embed from '@yoopta/embed';

const PLUGINS = [
  // ...existing plugins
  Accordion,
  Embed,
];
```
- [Examples](https://yoopta.dev/playground)

## 📄 License

This demo project is open source. Yoopta Editor is licensed under the [MIT License](https://github.com/yoopta-editor/Yoopta-Editor/blob/master/LICENSE).

## 🤝 Contributing

Contributions are welcome! Please check the [Contributing Guidelines](https://github.com/yoopta-editor/Yoopta-Editor/blob/master/CONTRIBUTING.md).

## 💖 Support

If you find Yoopta Editor useful:
- ⭐ Star the [GitHub repository](https://github.com/yoopta-editor/Yoopta-Editor)
- 💝 [Sponsor on GitHub](https://github.com/sponsors/Darginec05)
- ☕ [Buy a coffee](https://www.buymeacoffee.com/darginec05)

## 🔗 Links

- [Twitter](https://twitter.com/LebovskiYoo)
- [Discord](https://discord.gg/Dt8rhSTjsn)
- [Documentation](https://docs.yoopta.dev)
