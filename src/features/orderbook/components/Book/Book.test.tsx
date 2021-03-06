import React from "react";
import { render } from "@testing-library/react";
import { Book, BookProps } from "./Book";

describe("Number Adjuster", () => {
  const defaultProps: BookProps = {
    items: [{ price: 1, quantity: 5, total: 5 }],
    name: "SomeName",
    isGreen: false,
  };

  it("renders", () => {
    const { getByText } = render(<Book {...defaultProps} />);

    const element = getByText("SomeName");
    expect(element).toBeInTheDocument();
  });

  it("doesnt render with 0 items", () => {
    const { queryByText } = render(<Book {...defaultProps} items={[]} />);

    const element = queryByText("SomeName");
    expect(element).not.toBeInTheDocument();
  });

  it("Renders red text when passed isGreen", () => {
    const { getByText } = render(<Book {...defaultProps} isGreen />);

    const element = getByText(defaultProps.items[0].price.toLocaleString());
    expect(element).toHaveClass("bidsPrice");
  });

  it("Renders red bars when passed isGreen", () => {
    const { getByTestId } = render(<Book {...defaultProps} isGreen />);

    const element = getByTestId(defaultProps.items[0].price);
    expect(element).toHaveClass("bids");
  });
});
