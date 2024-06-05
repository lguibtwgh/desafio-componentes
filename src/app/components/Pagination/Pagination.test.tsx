import { Pagination } from './Pagination';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const goToPrevPage = jest.fn();
const goToNextPage = jest.fn();
const goToFirstPage = jest.fn();
const goToLastPage = jest.fn();
const paginate = jest.fn();
const totalPages = 5;

const renderPagination = (activePage: number) => {
  render(
    <Pagination
      goToPrevPage={goToPrevPage}
      goToNextPage={goToNextPage}
      goToFirstPage={goToFirstPage}
      goToLastPage={goToLastPage}
      activePage={activePage}
      paginate={paginate}
      totalPages={totalPages}
    />
  );
}

describe("Pagination", () => {
  it("should render Pagination properly with correct number of pages", () => {
    renderPagination(2);
    screen.getByTestId("pagination");
    const availablePages = screen.getAllByTestId("page-number");
    expect(availablePages).toHaveLength(totalPages);
  });

  it("should not render the next button or go to the last page buttons when there is no more pages to see", async () => {
    renderPagination(5);

    const goToNextPageButton = await screen.queryByTestId("go-to-next-page");
    const goToLastPageButton = await screen.queryByTestId("go-to-last-page");
    expect(goToNextPageButton).not.toBeInTheDocument();
    expect(goToLastPageButton).not.toBeInTheDocument();
  });

  it("should not render the prev button or go to the first page button when there is no more pages to see", async () => {
    renderPagination(1);

    const goToPrevPageButton = await screen.queryByTestId("go-to-prev-page");
    const goToFirstPageButton = await screen.queryByTestId("go-to-first-page");
    expect(goToPrevPageButton).not.toBeInTheDocument();
    expect(goToFirstPageButton).not.toBeInTheDocument();
  });
});