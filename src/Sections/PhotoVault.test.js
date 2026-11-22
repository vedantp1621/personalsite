import { act, fireEvent, render, screen } from "@testing-library/react";
import PhotoVault from "./PhotoVault";

let mockReportCameraState;
jest.mock("../components/VaultCameraBackground", () => function MockCamera({ onStateChange }) {
  mockReportCameraState = onStateChange;
  return null;
});
jest.mock("../data/vaultPhotos", () => [
  { src: "/first.jpg", title: "First photograph" },
  { src: "/second.jpg", title: "Second photograph" },
  { src: "/third.jpg", title: "Third photograph" },
  { src: "/fourth.jpg", title: "Fourth photograph" },
]);
jest.mock("../lib/afterPaint", () => ({ afterPaint: (callback) => { callback(); return () => {}; } }));

let pendingImages;
beforeEach(() => {
  pendingImages = [];
  jest.spyOn(window, "Image").mockImplementation(() => {
    const image = { decode: () => Promise.resolve() };
    pendingImages.push(image);
    return image;
  });
});
afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test("blocks the vault until the camera and every photograph are ready", async () => {
  render(<PhotoVault onBackHome={jest.fn()} />);
  expect(screen.getByRole("dialog", { name: "Loading Photo Vault" })).toHaveFocus();
  expect(document.body.style.overflow).toBe("hidden");
  expect(screen.queryByRole("link", { name: /view first photograph/i })).not.toBeInTheDocument();
  act(() => mockReportCameraState("ready"));
  expect(pendingImages).toHaveLength(2);
  await act(async () => pendingImages.slice(0, 2).forEach((image) => image.onload()));
  expect(pendingImages).toHaveLength(4);
  await act(async () => pendingImages[2].onload());
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  await act(async () => pendingImages[3].onload());
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe("");
  expect(screen.getByRole("heading", { name: "Photo Vault" })).toHaveFocus();
  expect(screen.getByRole("link", { name: /view first photograph/i })).toBeInTheDocument();
});

test("has no early entry and restores scrolling when unmounted", () => {
  const { unmount } = render(<PhotoVault onBackHome={jest.fn()} />);
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  fireEvent.keyDown(screen.getByRole("dialog"), { key: "Tab" });
  expect(screen.getByRole("dialog")).toHaveFocus();
  unmount();
  expect(document.body.style.overflow).toBe("");
});

test("keeps failed assets covered and allows retrying", async () => {
  render(<PhotoVault onBackHome={jest.fn()} />);
  await act(async () => {
    mockReportCameraState("error");
    pendingImages.slice(0, 2).forEach((image) => image.onerror());
  });
  await act(async () => pendingImages.slice(2).forEach((image) => image.onerror()));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Photo Vault" })).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Back home" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Try again" }));
  expect(screen.queryByRole("button", { name: "Try again" })).not.toBeInTheDocument();
  expect(pendingImages).toHaveLength(6);
  await act(async () => {
    mockReportCameraState("ready");
    pendingImages.slice(4, 6).forEach((image) => image.onload());
  });
  await act(async () => pendingImages.slice(6).forEach((image) => image.onload()));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("stops waiting for photos that never finish loading", () => {
  jest.useFakeTimers();
  render(<PhotoVault onBackHome={jest.fn()} />);
  act(() => mockReportCameraState("ready"));
  act(() => jest.advanceTimersByTime(90000));
  expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Photo Vault" })).not.toBeInTheDocument();
});
