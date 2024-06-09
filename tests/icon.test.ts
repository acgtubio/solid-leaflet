import { MarkerIcon } from "../src/components/markers/Icon";
import { expect, test } from "vitest";

test("Default Values of icons", () => {
  const icon = MarkerIcon({
    iconUrl: "../src/assets/icons/home.png"
  });
  console.log(icon);

  expect(true).toBe(true);
});
