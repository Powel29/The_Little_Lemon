import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import recipes from "./recipes";

// Mock navigation hook
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Header Component", () => {
  
  test("renders Reserve Table button", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Reserve Table/i });
    expect(button).toBeInTheDocument();
  });

  test("navigates to /booking when Reserve Table button is clicked", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Reserve Table/i });
    fireEvent.click(button);

    // ✅ Check navigation call
    expect(mockNavigate).toHaveBeenCalledWith("/booking");
  });
});



describe("Main Component Routing", () => {
  test("renders Confirmed Booking page", () => {
    render(
      <MemoryRouter initialEntries={["/confirmedbooking"]}>
        <Main />
      </MemoryRouter>
    );

    const confirmedText = screen.getByText(/Confirmed/i);
    expect(confirmedText).toBeInTheDocument();
  });
});


describe("Navbar Component", () => {
  test("renders logo image", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoImg = screen.getByAltText(/logo/i);
    expect(logoImg).toBeInTheDocument();
  });

  test("renders navigation links (desktop view)", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const links = ["Home", "Menu", "Services", "Reservations", "About", "Login"];
    links.forEach((text) => {
      expect(screen.getAllByText(text).length).toBeGreaterThan(0);
    });
  });

  test("sidebar is closed by default", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const sidebar = document.querySelector(".sidebar");
    expect(sidebar.classList.contains("active")).toBe(false);
  });

  test("toggles sidebar when hamburger clicked", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");

    // Initially closed
    expect(sidebar.classList.contains("active")).toBe(false);

    // Click to open
    fireEvent.click(hamburger);
    expect(sidebar.classList.contains("active")).toBe(true);

    // Click again to close
    fireEvent.click(hamburger);
    expect(sidebar.classList.contains("active")).toBe(false);
  });

  test("clicking a sidebar link closes the sidebar", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");

    // Open sidebar
    fireEvent.click(hamburger);
    expect(sidebar.classList.contains("active")).toBe(true);

    // Click a sidebar link
    const aboutLink = screen.getAllByText("About")[1]; // second "About" is in sidebar
    fireEvent.click(aboutLink);

    // Sidebar should close
    expect(sidebar.classList.contains("active")).toBe(false);
  });
});


// Mock SweetAlert2 since we don't want real popups in tests
jest.mock("sweetalert2", () => ({
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true })),
}));

describe("Menu Component", () => {
  test("renders menu header and all recipe cards", () => {
    render(<Menu />);

    // Verify header text
    const header = screen.getByText(/This weeks specials!/i);
    expect(header).toBeInTheDocument();

    // Ensure all recipes render
    recipes.forEach((recipe) => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
      expect(screen.getByText(`$${recipe.price}`)).toBeInTheDocument();
    });
  });

  test("renders correct number of Order Now buttons", () => {
    render(<Menu />);
    const orderButtons = screen.getAllByText(/Order Now/i);
    expect(orderButtons.length).toBe(recipes.length);
  });

});

