import { useMemo, useState, useRef } from 'react';
import YooptaEditor, { createYooptaEditor, Blocks, Marks, useYooptaEditor, type YooptaContentValue } from '@yoopta/editor';
import { FloatingToolbar, FloatingBlockActions, BlockOptions, SlashCommandMenu } from '@yoopta/ui';
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
import { Bold, Italic, Underline, Strike, CodeMark, Highlight } from '@yoopta/marks';
import { applyTheme } from '@yoopta/themes-shadcn';

// Import Yoopta styles
import '@yoopta/editor/dist/index.css';
import '@yoopta/ui/dist/index.css';
import '@yoopta/themes-shadcn/dist/index.css';

// Apply theme to plugins
const plugins = applyTheme([
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
]);

const MARKS = [Bold, Italic, Underline, Strike, CodeMark, Highlight];

const initialValue: YooptaContentValue = {};

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

// Floating toolbar component
function MyToolbar() {
  const editor = useYooptaEditor();

  return (
    <FloatingToolbar>
      <FloatingToolbar.Content>
        <FloatingToolbar.Group>
          {editor.formats.bold && (
            <FloatingToolbar.Button
              onClick={() => Marks.toggle(editor, { type: 'bold' })}
              active={Marks.isActive(editor, { type: 'bold' })}>
              <strong>B</strong>
            </FloatingToolbar.Button>
          )}
          {editor.formats.italic && (
            <FloatingToolbar.Button
              onClick={() => Marks.toggle(editor, { type: 'italic' })}
              active={Marks.isActive(editor, { type: 'italic' })}>
              <em>I</em>
            </FloatingToolbar.Button>
          )}
          {editor.formats.underline && (
            <FloatingToolbar.Button
              onClick={() => Marks.toggle(editor, { type: 'underline' })}
              active={Marks.isActive(editor, { type: 'underline' })}>
              <u>U</u>
            </FloatingToolbar.Button>
          )}
          {editor.formats.strike && (
            <FloatingToolbar.Button
              onClick={() => Marks.toggle(editor, { type: 'strike' })}
              active={Marks.isActive(editor, { type: 'strike' })}>
              <s>S</s>
            </FloatingToolbar.Button>
          )}
          {editor.formats.code && (
            <FloatingToolbar.Button
              onClick={() => Marks.toggle(editor, { type: 'code' })}
              active={Marks.isActive(editor, { type: 'code' })}>
              <code>{'</>'}</code>
            </FloatingToolbar.Button>
          )}
          {editor.formats.highlight && (
            <FloatingToolbar.Button
              onClick={() => Marks.toggle(editor, { type: 'highlight' })}
              active={Marks.isActive(editor, { type: 'highlight' })}>
              Hi
            </FloatingToolbar.Button>
          )}
        </FloatingToolbar.Group>
      </FloatingToolbar.Content>
    </FloatingToolbar>
  );
}

// Floating block actions component
function MyFloatingBlockActions() {
  const editor = useYooptaEditor();
  const [blockOptionsOpen, setBlockOptionsOpen] = useState(false);
  const dragHandleRef = useRef<HTMLButtonElement>(null);

  return (
    <FloatingBlockActions frozen={blockOptionsOpen}>
      {({ blockId }) => (
        <>
          <FloatingBlockActions.Button
            onClick={() => {
              if (!blockId) return;
              const block = Blocks.getBlock(editor, { id: blockId });
              if (block) editor.insertBlock('Paragraph', { at: block.meta.order + 1, focus: true });
            }}>
            +
          </FloatingBlockActions.Button>
          <FloatingBlockActions.Button
            ref={dragHandleRef}
            onClick={() => setBlockOptionsOpen(true)}>
            ⋮⋮
          </FloatingBlockActions.Button>

          <BlockOptions
            open={blockOptionsOpen}
            onOpenChange={setBlockOptionsOpen}
            anchor={dragHandleRef.current}>
            <BlockOptions.Content>
              {/* Block options menu items will be rendered automatically */}
            </BlockOptions.Content>
          </BlockOptions>
        </>
      )}
    </FloatingBlockActions>
  );
}

export default function Editor() {
  const editor = useMemo(
    () =>
      createYooptaEditor({
        plugins,
        marks: MARKS,
        value: initialValue,
      }),
    [],
  );

  const handleChange = (value: YooptaContentValue) => {
    console.log('Editor value changed:', value);
  };

  return (
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
  );
}
