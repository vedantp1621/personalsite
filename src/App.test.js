import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
jest.mock("./data/vaultPhotos", () => []);
jest.mock("./lib/vaultCameraAssets", () => ({ preloadVaultCamera: jest.fn() }));
import baseline from "../docs/redesign-baseline.json";
import {
  workExperiences,
  clubExperiences,
  projectCards,
  interests,
} from "./data/portfolio";

beforeEach(() => {
  window.scrollTo = jest.fn();
  jest
    .spyOn(HTMLMediaElement.prototype, "play")
    .mockImplementation(() => Promise.resolve());
  jest.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
  window.history.replaceState(null, "", "/");
});

test("switches between the home screen and Photo Vault", () => {
  render(<App />);

  expect(
    screen.getByRole("button", { name: "Main", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    screen.queryByRole("link", { name: "Explore the portfolio" }),
  ).not.toBeInTheDocument();
  fireEvent.click(
    screen.getByRole("button", { name: "Photo Vault", exact: true }),
  );
  expect(
    screen.getByRole("heading", { name: /photo vault/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Photo Vault", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    screen.getByRole("button", { name: "Main", exact: true }),
  ).toHaveAttribute("aria-pressed", "false");

  fireEvent.click(screen.getByRole("button", { name: /go to home page/i }));
  expect(screen.getByText(/hi\. i'm/i)).toBeInTheDocument();
});

test("preserves projects and current experience facts across home and archive", async () => {
  render(<App />);
  const normalize = (value) => value.replace(/\s+/g, " ").trim().toLowerCase();
  const original = normalize(baseline.text);
  const homeContent = normalize(document.body.textContent);
  expect(projectCards).toHaveLength(7);
  expect(workExperiences).toHaveLength(5);
  expect(clubExperiences).toHaveLength(5);
  expect(interests).toHaveLength(11);
  projectCards.forEach((project) => {
    expect(original).toContain(normalize(project.title));
    expect(original).toContain(normalize(project.description));
    project.actions.forEach((action) =>
      expect(baseline.links.map((link) => link.href)).toContain(action.href),
    );
  });
  workExperiences.slice(0, 4).forEach((entry) => {
    [entry.title, entry.company, entry.date, entry.location].forEach((value) =>
      expect(homeContent).toContain(normalize(value)),
    );
  });
  expect(screen.queryByText("More experience & leadership")).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Beyond the classroom." })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: "Browse other projects" }));
  await screen.findByRole("heading", { name: /other projects/i });
  const rendered = homeContent + " " + normalize(document.body.textContent);
  baseline.text
    .split("\n\n")
    .filter((text) => text.length > 100 && !text.includes("\n"))
    .forEach((paragraph) => {
      expect(rendered).toContain(normalize(paragraph));
    });
});

test("features Quotvero with its supplied logo and keeps AOI in the archive", async () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Quotvero" })).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Quotvero logo" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Visit Quotvero website" }),
  ).toHaveAttribute("href", "https://quotvero.com/");
  expect(
    screen.queryByRole("heading", { name: "Modern AOI System for Plexus" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: "Browse other projects" }));
  await screen.findByRole("heading", { name: /other projects/i });
  expect(
    screen.getByRole("heading", { name: "Modern AOI System for Plexus" }),
  ).toBeInTheDocument();
  expect(document.querySelectorAll(".project-list .project")).toHaveLength(7);
  fireEvent.click(screen.getByRole("button", { name: "Main", exact: true }));
  expect(screen.getByRole("heading", { name: "Quotvero" })).toBeInTheDocument();
});
