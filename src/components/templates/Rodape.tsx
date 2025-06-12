import { IconHeart, IconHeartFilled } from "@tabler/icons-react"

export default function Rodape() {
    return (
        <footer className="flex justify-end items-center gap-1.5 text-sm text-zinc-400 h-16 border-t border-zinc-800 px-6">
            <span className="flex gap-1.5">
                <span>Feito com </span>
                <IconHeartFilled size={14} color="#F00" />
                <span> por <strong>Cod3r</strong></span>
            </span>
        </footer>

    )
}