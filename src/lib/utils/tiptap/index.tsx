"use client";

import { useEditor, EditorContent, ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { common, createLowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CodeBlockComponent from "./components/CodeBlockComponent";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from "./components/ToolBar";

const lowlight = createLowlight(common);

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  HorizontalRule,
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
  Placeholder.configure({
    placeholder: "Write something...",
  }),
];

type TiptapProps = {
  content: string;
};

const Tiptap = ({ content }: TiptapProps) => {
  const editor = useEditor({
    extensions: extensions,
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none tiptap-editor",
      },
    },
  });

  return (
    <>
      <Toolbar editor={editor!} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
