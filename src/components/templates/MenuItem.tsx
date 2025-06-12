import Link from "next/link"

export interface MenuItemProps {
    link: string
    texto: string
    icone?: React.ElementType
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.link} className="flex gap-2 px-2 py-2 rounded-md hover:bg-white/10">
            {props.icone && <props.icone size={24} stroke={1} />}
            <span>{props.texto}</span>
        </Link>
    )
}