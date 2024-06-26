export const renderFormattedText = (text: string) => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const linkPattern = /\b(https?:\/\/[^\s]+)/g;
  const mentionPattern = /(@\w+)/g;
  const hashtagPattern = /(#\w+)/g;

  const parts = text.split(/(\s+)/).map((part, index) => {
    if (emailPattern.test(part)) {
      return (
        <span
          key={index}
          className="px-2 rounded-full bg-yellow-200 text-yellow-600"
        >
          {part}
        </span>
      );
    } else if (linkPattern.test(part)) {
      return (
        <a
          href={part}
          key={index}
          className="px-2 rounded-full bg-cyan-200 text-cyan-600"
        >
          {part}
        </a>
      );
    } else if (mentionPattern.test(part)) {
      return (
        <span
          key={index}
          className="px-2 rounded-full bg-purple-200 text-purple-600"
        >
          {part}
        </span>
      );
    } else if (hashtagPattern.test(part)) {
      return (
        <span
          key={index}
          className="px-2 rounded-full bg-green-200 text-green-600"
        >
          {part}
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return parts;
};
