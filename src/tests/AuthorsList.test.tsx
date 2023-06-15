import { render, screen } from "@testing-library/react";
import AuthorList, {authors} from "../components/Authors/AuthorsList";

test("AuthorList renders authors correctly", () => {
  const mockBreadcrumb = jest.fn();
  const mockBooks: never[] = [];

  render(<AuthorList breadcrumb={mockBreadcrumb} books={mockBooks} />);

  for (const author of authors) {
    const imgElement = screen.getByAltText(author.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", author.img);

    const titleElement = screen.getByText(author.title);
    expect(titleElement).toBeInTheDocument();
  }

  const authorTitle = authors[0].title;
  const infoButton = screen.getByLabelText(`info about ${authorTitle}`);
  infoButton.click();

  expect(mockBreadcrumb).toHaveBeenCalledWith(authorTitle);
});