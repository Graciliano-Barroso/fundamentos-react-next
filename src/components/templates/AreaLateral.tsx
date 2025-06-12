export interface AreaLateralProps {
    children: any
}

export default function AreaLateral(props: AreaLateralProps) {
    return (
        <aside className="border-r border-zinc-800 w-75 p-6">
            {props.children}
        </aside>
    )
}