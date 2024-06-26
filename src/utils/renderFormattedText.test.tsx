import { describe, expect, it } from "vitest";
import { renderFormattedText } from "../utils/renderFormattedText";

describe("renderFormattedText", () => {
  it("should render parts with email pattern correctly", () => {
    const text = "Hello, my email is test@example.com";
    const parts = renderFormattedText(text);

    expect(parts[8]).toEqual(
      <span key={8} className="px-2 rounded-full bg-yellow-200 text-yellow-600">
        test@example.com
      </span>
    );
  });

  it("should render parts with link pattern correctly", () => {
    const text = "Check out this website: https://example.com";
    const parts = renderFormattedText(text);

    expect(parts[8]).toEqual(
      <a
        href="https://example.com"
        key={8}
        className="px-2 rounded-full bg-cyan-200 text-cyan-600"
      >
        https://example.com
      </a>
    );
  });

  it("should render parts with mention pattern correctly", () => {
    const text = "Hey @username, how are you doing?";
    const parts = renderFormattedText(text);

    expect(parts[2]).toEqual(
      <span key={2} className="px-2 rounded-full bg-purple-200 text-purple-600">
        @username,
      </span>
    );
  });

  it("should render parts with hashtag pattern correctly", () => {
    const text = "This is a #hashtag example";
    const parts = renderFormattedText(text);

    expect(parts[6]).toEqual(
      <span key={6} className="px-2 rounded-full bg-green-200 text-green-600">
        #hashtag
      </span>
    );
  });

  it("should render parts without any pattern correctly", () => {
    const text = "This is a simple text";
    const parts = renderFormattedText(text);

    expect(parts[0]).toEqual("This");
    expect(parts[1]).toEqual(" ");
    expect(parts[2]).toEqual("is");
    expect(parts[3]).toEqual(" ");
    expect(parts[4]).toEqual("a");
    expect(parts[5]).toEqual(" ");
    expect(parts[6]).toEqual("simple");
    expect(parts[7]).toEqual(" ");
    expect(parts[8]).toEqual("text");
  });
});
