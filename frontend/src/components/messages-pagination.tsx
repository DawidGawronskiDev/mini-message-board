import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
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
        {new Array(Math.ceil(size)).fill("_").map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => handleCurrentPage(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default MessagesPagination;
