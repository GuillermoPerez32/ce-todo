export const renderFormattedText = (text: string) => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const linkPattern = /\b(https?:\/\/[^\s]+)/g;
  const mentionPattern = /(@\w+)/g;
  const hashtagPattern = /(#\w+)/g;

  const parts = text.split(/(\s+)/).map((part, index) => {
    if (emailPattern.test(part)) {
      return (
        <span key={index} className="text-yellow-500">
          {part}
        </span>
      );
    } else if (linkPattern.test(part)) {
      return (
        <a href={part} key={index} className="text-cyan-500">
          {part}
        </a>
      );
    } else if (mentionPattern.test(part)) {
      return (
        <span key={index} className="text-green-500">
          {part}
        </span>
      );
    } else if (hashtagPattern.test(part)) {
      return (
        <span key={index} className="text-purple-500">
          {part}
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return parts;
};
