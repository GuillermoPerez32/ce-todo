import { test, describe, expect } from "vitest";
import { TextField } from "../components/TextField";
import { render } from "@testing-library/react";

describe("<TextField />", () => {
  test("renders TextField with label", () => {
    const { container } = render(<TextField />);
    expect(container).toMatchSnapshot();
  });
});
