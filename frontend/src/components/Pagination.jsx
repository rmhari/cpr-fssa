import Button from "./Button";

function Pagination({
  totalItems = 0,
  itemsPerPage = 1,
  currentPage = 1,
  onPageChange,
}) {
  const totalPages =
    itemsPerPage > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

  if (totalPages < 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        content="Previous"
        isActive={false}
        disabled={currentPage === 1}
        className="w-fit bg-white text-black hover:bg-black hover:text-white mx-2"
      />
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          content={page.toString()}
          isActive={page === currentPage}
          className="w-fit bg-white text-black mx-0.5"
        />
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        content="Next"
        isActive={false}
        disabled={currentPage === pages.length}
        className="w-fit bg-white text-black hover:bg-black hover:text-white mx-2"
      />
    </div>
  );
}

export default Pagination;
