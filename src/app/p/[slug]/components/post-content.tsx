
import { useEditor, EditorContent, Editor, ReactNodeViewRenderer } from "@tiptap/react";
import { editorExtensions } from '@/lib/utils/tiptap/extensions'; 
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import CodeBlockViewOnlyComponent from '@/lib/utils/tiptap/components/CodeBlockViewOnly';
import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);


type PostContentProps = {
    content: string;
}


export default function PostContentComponent({ content }: PostContentProps) {
  const editor: Editor | null = useEditor({
    extensions: [
      ...editorExtensions,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockViewOnlyComponent);
        },
      }).configure({ lowlight, defaultLanguage: "plaintext" }),
    ],
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "post-details__body prose sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
    editable: false,
  });
  return <EditorContent editor={editor} />;
}
