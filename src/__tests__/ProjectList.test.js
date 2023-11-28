import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

// Mock ProjectItem component to avoid rendering its actual content
jest.mock("../components/ProjectItem", () => () => <div data-testid="project-item" />);

const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
  {
    id: 2,
    name: "Kibbles N Bitz",
    about: "Tinder for dogs",
    technologies: ["React", "Redux"],
  },
  {
    id: 3,
    name: "Alienwares",
    about: "Etsy for aliens",
    technologies: ["React", "Redux", "Rails"],
  },
];

test("renders ProjectItem for each project passed in as a prop", () => {
  render(<ProjectList projects={projects} />);

  // Check if the number of rendered ProjectItem components matches the number of projects
  const renderedProjectItems = screen.getAllByTestId("project-item");
  expect(renderedProjectItems.length).toBe(projects.length);
});
