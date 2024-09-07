import BulletList from "@tiptap/extension-bullet-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Color from "@tiptap/extension-color";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import { ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockComponent from "./components/CodeBlockComponent";
import Placeholder from "@tiptap/extension-placeholder";
import { common, createLowlight } from "lowlight";
import Document from "@tiptap/extension-document";
import Focus from "@tiptap/extension-focus";

const lowlight = createLowlight(common);

export const editorExtensions = [
  Document,
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
    document: false,

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
  Focus.configure({
    className: 'has-focus',
    mode: 'shallowest',
  })
];
