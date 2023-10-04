import MarkdownText from "../MarkdownText";

interface MarkdownTextProps {
  className?: string;
  text?: string;
}

export default function Markdown({
  className,
  text: source,
}: MarkdownTextProps) {
  return (
    <div className={className}>
      <MarkdownText source={source} className="text-sm" />
    </div>
  );
}
