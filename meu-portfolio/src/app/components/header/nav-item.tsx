import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItensProps = {
    label : string
    href : string
}

export const NavItem = ({label, href}: NavItensProps) => {
    const pathName = usePathname()
    const ativo = pathName == href
    return(
        <Link href={href} className={cn(
            'flex',
            'items-center',
            'gp-2',
            'font-medium',
            'font-mono',
            'text-gray-400',
            ativo && 'text-gray-50'
        )}>
            <span className="text-blue-500">#</span>
            {label}
        </Link>
    )
}