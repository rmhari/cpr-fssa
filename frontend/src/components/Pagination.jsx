import Button from "./Button";

function Pagination({ totalItems = 0, itemsPerPage = 1, currentPage = 1, onPageChange }) {
  const totalPages = itemsPerPage > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

  if (totalPages < 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        content="Previous"
        isActive={false}
        disabled={currentPage === 1}
      />
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          content={page.toString()}
          isActive={page === currentPage}
        />
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        content="Next"
        isActive={false}
        disabled={currentPage === pages.length}
/>

    </div>
  );
}

export default Pagination;
