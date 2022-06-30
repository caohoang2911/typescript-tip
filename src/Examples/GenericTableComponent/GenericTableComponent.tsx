import React from 'react'

interface TableProps<TItem> {
    items: TItem[],
    renderItem: (item: TItem) => React.ReactNode
}


export const Table = <TItem,>(props: TableProps<TItem>) => {
    return null;
}

export default function GenericTableComponent() {
    return (
        <Table
            items={[{ id: "3", firstName: "John" }]}
            renderItem={(item) => {
                return null
            }}
        />
    )
}
