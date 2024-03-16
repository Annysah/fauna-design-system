interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex">
        {currentPage > 1 && (
          <li
            className="mx-1 bg-white text-primary-500 hover:bg-primary-200 px-3 py-2 cursor-pointer"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </li>
        )}
        {pages.map((page) => (
          <li
            key={page}
            className={`mx-1 ${
              page === currentPage
                ? "bg-primary-500 text-white rounded-md"
                : "bg-white text-primary-500 hover:bg-primary-200"
            } px-3 py-2 cursor-pointer`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        {currentPage < totalPages && (
          <li
            className="mx-1 bg-white text-primary-500 hover:bg-primary-200 px-3 py-2 cursor-pointer"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
