import { Button } from "react-bootstrap";
export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <ul className="pagination d-flex justify-content-center mt-3 border-top pt-3">
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item${currentPage === page ? " active" : ""}`}
        >
          <Button
            className="page-link text-bg-light bg-white"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        </li>
      ))}
    </ul>
  );
};
