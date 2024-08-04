import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type MessagesPaginationProps = {
  currentPage: number;
  handleCurrentPage: (n: number) => void;
  size: number;
};

const MessagesPagination = ({
  currentPage,
  handleCurrentPage,
  size,
}: MessagesPaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              handleCurrentPage(currentPage <= 1 ? 1 : currentPage - 1)
            }
          />
        </PaginationItem>
        {new Array(Math.ceil(size)).fill("_").map((_, index) => {
          if (currentPage === 1 && index < 3) {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handleCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          }
          if (currentPage === Math.round(size + 1) && index > size - 3) {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handleCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          }
          if (
            currentPage > 1 &&
            index > currentPage - 3 &&
            index < currentPage + 1
          ) {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handleCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}
        {currentPage > 1 && currentPage < size - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              handleCurrentPage(
                currentPage >= size ? Math.floor(size + 1) : currentPage + 1
              )
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MessagesPagination;
