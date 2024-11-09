// This is the way we can use it in some component
 const [sortReported, setSortReported] = useState<"noSort" | "sortAsc" | "sortDesc">("sortDesc");


<CustomSorting sort={sortReported} setSort={setSortReported}>
                  Reported
                </CustomSorting>
