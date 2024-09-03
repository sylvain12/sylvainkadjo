"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Toolbar from "./components/ToolBar";
import { editorExtensions } from "@/lib/utils/tiptap/extensions";

type TiptapProps = {
  content: string;
};

const Tiptap = ({ content }: TiptapProps) => {
  const editor = useEditor({
    extensions: editorExtensions,
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
