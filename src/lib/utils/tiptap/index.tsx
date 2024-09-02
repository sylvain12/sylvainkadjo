"use client";

import { useCallback } from "react";

import {
  useEditor,
  EditorContent,
  useCurrentEditor,
  EditorProvider,
  ReactNodeViewRenderer,
  Extension,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Icon } from "@iconify/react";
import { common, createLowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CodeBlockComponent from "./components/CodeBlockComponent";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import HardBreak from "@tiptap/extension-hard-break";

const lowlight = createLowlight(common);

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  //   const addImage = useCallback(() => {
  //     const url = window.prompt("URL");

  //     if (url) {
  //       editor?.commands.setImage({ src: url }).run();
  //     }
  //   }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap__toolbar">
      <div className="tiptap__toolbar-buttons">
        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={`${editor.isActive("bold") ? "is-active" : ""}`}
            title="Bold"
          >
            <Icon icon="carbon:text-bold" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`${editor.isActive("italic") ? "is-active" : ""}`}
            title="Italic"
          >
            <Icon icon="carbon:text-italic" width={22} />
          </button>
          {/* <button
            onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            className={`${
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : ""
            }`}
            title="text color"
          >
            <Icon icon="hugeicons:text-color" width={22} />
          </button> */}
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`${editor.isActive("paragraph") ? "is-active" : ""}`}
            title="Paragraph"
          >
            <Icon icon="material-symbols:format-paragraph" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={`${editor.isActive("strike") ? "is-active" : ""}`}
            title="Strike"
          >
            <Icon icon="carbon:text-strikethrough" width={22} />
          </button>
        </div>

        <div className="tiptap__toolbar-group">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`${
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }`}
            title="H1"
          >
            <Icon icon="ci:heading-h1" width={22} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`${
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }`}
            title="H2"
          >
            <Icon icon="ci:heading-h2" width={22} />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`${
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }`}
            title="H3"
          >
            <Icon icon="ci:heading-h3" width={22} />
          </button>
        </div>

        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`${editor.isActive("bulletList") ? "is-active" : ""}`}
            title="Bullet list"
          >
            <Icon icon="fluent:text-bullet-list-ltr-20-filled" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`${editor.isActive("orderedList") ? "is-active" : ""}`}
            title="Ordered list"
          >
            <Icon icon="mingcute:list-ordered-line" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Horizontal rule"
          >
            <Icon icon="ic:round-horizontal-rule" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().setHardBreak().run()}
            title="Hard break"
          >
            <Icon icon="bi:hr" width={23} />
          </button>
        </div>

        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <Icon icon="mdi:code-json" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={`${editor.isActive("code") ? "is-active" : ""}`}
            title="Code"
          >
            <Icon icon="carbon:code" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`${editor.isActive("blockquote") ? "is-active" : ""}`}
            title="Block quote"
          >
            <Icon icon="clarity:block-quote-line" width={22} />
          </button>
          <button
            onClick={setLink}
            className={`${editor.isActive("link") ? "is-active" : ""}`}
            title="Add link"
          >
            <Icon icon="clarity:link-line" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive("link")}
            title="Unlink"
          >
            <Icon icon="carbon:unlink" width={22} />
          </button>
          {/* <button
            onClick={addImage}
            className={`flex items-center justify-center flex-1 p-4 hover:bg-gray-200 ${
              editor.isActive("image") ? "is-active" : ""
            }`}
            title="Upload Image"
          >
            <Icon icon="mdi-light:cloud-upload" width={22} />
          </button> */}
        </div>
        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            title=" Undo"
          >
            <Icon icon="majesticons:undo" width={22} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            title="Redo"
          >
            <Icon icon="majesticons:redo" width={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  HorizontalRule,
  HardBreak,
  BulletList.configure({
    keepMarks: true,
    keepAttributes: true,
  }),
  OrderedList.configure({
    keepMarks: true,
    keepAttributes: true,
  }),
  ListItem,
  StarterKit.configure({
    codeBlock: false,
  }),
  Image,
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: "https",
    HTMLAttributes: {
      rel: "noopener noreferrer",
    },
  }),
  CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(CodeBlockComponent);
    },
  }).configure({ lowlight, defaultLanguage: "plaintext" }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const Tiptap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
};

export default Tiptap;
