export interface MenuProps {
    children: any
}

export default function Menu(props: MenuProps) {
    return (
        <nav className="flex flex-col gap-3">
            {props.children}
        </nav>
    )
}