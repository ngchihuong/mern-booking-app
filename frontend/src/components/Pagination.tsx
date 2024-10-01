export type Props = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void;
};
export default function Pagination ({ page, pages, onPageChange }: Props) {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
        // console.log(pageNumbers.toString());
    }
    return (
        <div className="flex justify-center">
            <ul className="flex border border-slate-300">
                {pageNumbers.map((number) => (
                    <li className={`px-2 py-1 ${page === number ? "bg-gray-200" : ""}`}>
                        <button className="" onClick={() => onPageChange(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}