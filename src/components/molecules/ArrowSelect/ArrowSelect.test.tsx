import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import dynamic from "next/dynamic";

import { type ArrowSelectProps } from ".";

const ArrowSelect = dynamic<ArrowSelectProps<any>>(
  () => import("molecules/ArrowSelect").then((module) => module.ArrowSelect),
  { ssr: false }
);

describe("ArrowSelect", () => {
  // const itemsStringMock = Array.from(Array(5).keys()).map(() =>
  //   faker.person.fullName()
  // );
  // const itemsObjectMock = Array.from(Array(5).keys()).map(() => ({
  //   name: faker.person.fullName(),
  // }));

  function makeSut<T>({ items = [], ...props }: Partial<ArrowSelectProps<T>>) {
    return render(<ArrowSelect items={items} {...props} />);
  }

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
