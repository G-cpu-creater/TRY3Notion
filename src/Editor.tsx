import { useMemo } from 'react';
import YooptaEditor, { createYooptaEditor, type YooptaContentValue } from '@yoopta/editor';
import Paragraph from '@yoopta/paragraph';
import Blockquote from '@yoopta/blockquote';
import Headings from '@yoopta/headings';
import Lists from '@yoopta/lists';
import Code from '@yoopta/code';
import Callout from '@yoopta/callout';
import Divider from '@yoopta/divider';
import Image from '@yoopta/image';
import Video from '@yoopta/video';
import File from '@yoopta/file';
import Link from '@yoopta/link';
import ActionMenuList, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import { Bold, Italic, Underline, Strike, CodeMark, Highlight } from '@yoopta/marks';

const PLUGINS = [
  Paragraph,
  Headings.HeadingOne,
  Headings.HeadingTwo,
  Headings.HeadingThree,
  Blockquote,
  Lists.BulletedList,
  Lists.NumberedList,
  Lists.TodoList,
  Code,
  Callout,
  Divider,
  Image,
  Video,
  File,
  Link,
];

const MARKS = [Bold, Italic, Underline, Strike, CodeMark, Highlight];

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
};

// Initial content - empty object will create default paragraph
const INITIAL_VALUE: YooptaContentValue = {};

const EDITOR_STYLES = {
  width: '100%',
  maxWidth: 850,
  padding: '20px',
  paddingBottom: 150,
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  minHeight: 'calc(100vh - 100px)',
};

export default function Editor() {
  const editor = useMemo(() => createYooptaEditor(), []);

  const handleChange = (value: YooptaContentValue) => {
    console.log('Editor value changed:', value);
  };

  return (
    <YooptaEditor
      editor={editor}
      plugins={PLUGINS}
      marks={MARKS}
      tools={TOOLS}
      value={INITIAL_VALUE}
      autoFocus
      placeholder="Type / to open menu or start typing..."
      onChange={handleChange}
      style={EDITOR_STYLES}
    />
  );
}
