import { IconBrandReact } from "@tabler/icons-react"

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <IconBrandReact size={40} stroke={1} color="#61DAFB" />
            <span className="text-lg font-light">React & Next</span>
        </div>
    )
}