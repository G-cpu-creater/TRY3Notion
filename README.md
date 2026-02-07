# Yoopta Editor Demo

A complete implementation of [Yoopta Editor](https://github.com/yoopta-editor/Yoopta-Editor) using the latest stable version **v6.0.0-beta.19**.

## 📋 Overview

This project demonstrates a fully-featured rich text editor built with:
- **Yoopta Editor v6.0.0-beta.19** (latest stable)
- React 18+ with TypeScript
- Vite for fast development
- Shadcn UI theme
- 20+ block plugins
- Text formatting marks
- Pre-built UI components

## ✨ Features

- **Rich Text Editing**: Paragraphs, headings (H1, H2, H3), blockquotes
- **Lists**: Bulleted lists, numbered lists, todo lists
- **Media**: Images, videos, files
- **Code Blocks**: Syntax highlighting
- **Layout Components**: Callout boxes, dividers
- **Inline Links**: Link support
- **Text Formatting**: Bold, italic, underline, strikethrough, code, highlight
- **UI Components**: 
  - Floating toolbar for text formatting
  - Slash command menu (type `/`)
  - Block actions (add, drag, options)
- **Themes**: Shadcn UI styled components

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
- `@yoopta/ui` - UI components (toolbar, menus, etc.)
- `slate`, `slate-react`, `slate-dom` - Peer dependencies

### Plugins
- `@yoopta/paragraph` - Basic paragraphs
- `@yoopta/headings` - H1, H2, H3 headings
- `@yoopta/lists` - Bulleted, numbered, and todo lists
- `@yoopta/blockquote` - Block quotes
- `@yoopta/code` - Code blocks with syntax highlighting
- `@yoopta/callout` - Callout/alert boxes
- `@yoopta/divider` - Visual dividers
- `@yoopta/image` - Image blocks
- `@yoopta/video` - Video embeds
- `@yoopta/file` - File attachments
- `@yoopta/link` - Inline links

### Marks (Text Formatting)
- `@yoopta/marks` - Bold, Italic, Underline, Strike, Code, Highlight

### Theme
- `@yoopta/themes-shadcn` - Shadcn UI styled block elements

## 🎯 Usage Examples

### Basic Editor Setup

The editor is initialized in `src/Editor.tsx`:

```tsx
import { createYooptaEditor } from '@yoopta/editor';

const editor = useMemo(
  () =>
    createYooptaEditor({
      plugins,
      marks: MARKS,
    }),
  [],
);
```

### Using the Editor

```tsx
<YooptaEditor
  editor={editor}
  autoFocus
  placeholder="Type / to open menu or start typing..."
  onChange={handleChange}
  style={EDITOR_STYLES}>
  <MyToolbar />
  <MyFloatingBlockActions />
  <SlashCommandMenu />
</YooptaEditor>
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
import Accordion from '@yoopta/accordion';

const plugins = applyTheme([
  // ...existing plugins
  Table,
  Accordion,
]);
```

### Changing Theme

To use a different theme or no theme:

```tsx
// Without theme (headless)
const plugins = [
  Paragraph,
  Headings.HeadingOne,
  // ...
];

// Or import a different theme
// import { applyTheme } from '@yoopta/themes-material';
```

### Customizing Styles

Edit `src/App.css` and `src/index.css` for custom styling, or modify the `EDITOR_STYLES` constant in `src/Editor.tsx`.

## 📚 Resources

- [Official Documentation](https://docs.yoopta.dev)
- [GitHub Repository](https://github.com/yoopta-editor/Yoopta-Editor)
- [Live Playground](https://yoopta.dev/playground)
- [Discord Community](https://discord.gg/Dt8rhSTjsn)
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
