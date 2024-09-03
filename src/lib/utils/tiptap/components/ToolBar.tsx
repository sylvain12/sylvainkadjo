import { Icon } from "@iconify/react";
import { Editor } from "@tiptap/react";
import { useCallback } from "react";

type ToolBarProps = {
  editor: Editor;
};

const Toolbar = ({ editor }: ToolBarProps) => {
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
            <Icon icon="carbon:text-bold" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={`${editor.isActive("italic") ? "is-active" : ""}`}
            title="Italic"
          >
            <Icon icon="carbon:text-italic" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`${editor.isActive("paragraph") ? "is-active" : ""}`}
            title="Paragraph"
          >
            <Icon icon="material-symbols:format-paragraph" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={`${editor.isActive("strike") ? "is-active" : ""}`}
            title="Strike"
          >
            <Icon icon="carbon:text-strikethrough" width={20} />
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
            <Icon icon="ci:heading-h1" width={20} />
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
            <Icon icon="ci:heading-h2" width={20} />
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
            <Icon icon="ci:heading-h3" width={20} />
          </button>
        </div>

        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`${editor.isActive("bulletList") ? "is-active" : ""}`}
            title="Bullet list"
          >
            <Icon icon="fluent:text-bullet-list-ltr-20-filled" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`${editor.isActive("orderedList") ? "is-active" : ""}`}
            title="Ordered list"
          >
            <Icon icon="mingcute:list-ordered-line" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Horizontal rule"
          >
            <Icon icon="tabler:line-dashed" width={20} />
          </button>
        </div>

        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <Icon icon="mdi:code-json" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={`${editor.isActive("code") ? "is-active" : ""}`}
            title="Code"
          >
            <Icon icon="carbon:code" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`${editor.isActive("blockquote") ? "is-active" : ""}`}
            title="Block quote"
          >
            <Icon icon="clarity:block-quote-line" width={20} />
          </button>
          <button
            onClick={setLink}
            className={`${editor.isActive("link") ? "is-active" : ""}`}
            title="Add link"
          >
            <Icon icon="clarity:link-line" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive("link")}
            title="Unlink"
          >
            <Icon icon="carbon:unlink" width={20} />
          </button>
        </div>
        <div className="tiptap__toolbar-group">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            title=" Undo"
          >
            <Icon icon="majesticons:undo" width={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            title="Redo"
          >
            <Icon icon="majesticons:redo" width={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
