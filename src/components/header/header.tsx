import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link/active-link";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo site" width={116} height={32} />
                    </Link>

                    <nav className="flex items-center gap-6">
                        <ActiveLink href="/">Ínicio</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <Button variant="secondary" asChild>
                            <Link href="/comecar">Começar</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
