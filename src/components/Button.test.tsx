import { test, describe, expect } from "vitest";
import { Button } from "../components/Button";
import { render } from "@testing-library/react";

describe("<Button />", () => {
  test("renders button with label", () => {
    const { container } = render(
      <Button variant="contained" color="primary" label="Click me" />
    );
    expect(container).toMatchSnapshot();
  });
});
