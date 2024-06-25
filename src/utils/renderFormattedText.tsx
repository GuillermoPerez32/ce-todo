export const renderFormattedText = (text: string) => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const linkPattern = /\b(https?:\/\/[^\s]+)/g;
  const mentionPattern = /(@\w+)/g;
  const hashtagPattern = /(#\w+)/g;

  const parts = text.split(/(\s+)/).map((part, index) => {
    const renderClassesForColor = (color: string) => {
      return `px-1 rounded-md bg-${color}-200 text-${color}-600`;
    };

    if (emailPattern.test(part)) {
      return (
        <span key={index} className={renderClassesForColor("yellow")}>
          {part}
        </span>
      );
    } else if (linkPattern.test(part)) {
      return (
        <a href={part} key={index} className={renderClassesForColor("cyan")}>
          {part}
        </a>
      );
    } else if (mentionPattern.test(part)) {
      return (
        <span key={index} className={renderClassesForColor("purple")}>
          {part}
        </span>
      );
    } else if (hashtagPattern.test(part)) {
      return (
        <span key={index} className={renderClassesForColor("green")}>
          {part}
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return parts;
};
