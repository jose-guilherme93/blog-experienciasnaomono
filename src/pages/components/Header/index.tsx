import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return (
        <header className="h-20 fixed z-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-screen flex justify-between items-center">
            <div className="pl-4 md:pl-20 w-full">
                <Link className="font-bold text-slate-50 w-fit" href={"/"}>
                    <Image className="rounded-lg" src={"/logo.png"} width={50} height={100} alt="experiências não mono" />
                    
                </Link>
            </div>

            <div className="flex w-full">
                <ul className="flex gap-5 w-full justify-end pr-4 md:pr-20">
                    
                    
                    <li>
                        <Link className="text-slate-50" href="/components/AboutUs/">
                            Sobre nós
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}