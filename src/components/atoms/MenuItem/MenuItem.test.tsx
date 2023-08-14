import { render } from "@testing-library/react";

import { MenuItem, type MenuItemProps } from ".";

describe("MenuItem", () => {
  const makeSut = ({ ...props }: Partial<MenuItemProps>) => {
    return render(<MenuItem {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render focused correctly", () => {
    const { asFragment } = makeSut({ focused: true });

    expect(asFragment).toMatchSnapshot();
  });
});
