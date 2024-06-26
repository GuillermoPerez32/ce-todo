import { test, describe, expect } from "vitest";
import { TaskList } from "./TaskList";
import { render } from "@testing-library/react";

describe("<TaskList />", () => {
  test("renders TaskList with label", () => {
    const { container } = render(<TaskList />);
    expect(container).toMatchSnapshot();
  });
});
