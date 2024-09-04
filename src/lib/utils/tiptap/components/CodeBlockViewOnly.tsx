import { NodeView, NodeViewContent, NodeViewWrapper } from "@tiptap/react";

const CodeBlockViewOnlyComponent = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: NodeView<HTMLSelectElement>) => (
  <NodeViewWrapper className="code-block">
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
);

export default CodeBlockViewOnlyComponent;
