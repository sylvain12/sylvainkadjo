"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import Toolbar from "./components/ToolBar";
import { editorExtensions } from "@/lib/utils/tiptap/extensions";
import { useDashboardPostStore } from "@/app/dashboard/store";
import { useTiptapStore } from "./store";
import { useEffect } from 'react';

type TiptapProps = {
  content: string;
isLoading?: boolean;
};

const Tiptap = ({ content, isLoading=false }: TiptapProps) => {
  const { setContent } = useTiptapStore();

  const editor: Editor | null = useEditor({
    extensions: editorExtensions,
    editorProps: {
      attributes: {
        class:
          "prose sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [content])

  const handleUpdate = () => setContent(editor?.getHTML()!);

  editor?.on("update", handleUpdate);

  return (
    <>
      <Toolbar editor={editor!} />
      {isLoading ? <div>Loading</div> : <EditorContent editor={editor} />}
    </>
  );
};

export default Tiptap;
