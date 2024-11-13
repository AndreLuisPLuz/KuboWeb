type PaginationOptions = {
    page: number,
    size: number,
};

type PaginationInfo = {
    currentPage: number,
    totalPages: number,
    items: number,
}

export type {
    PaginationOptions,
    PaginationInfo,
};