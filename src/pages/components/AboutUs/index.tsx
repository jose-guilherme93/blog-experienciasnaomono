import Link from "next/link";

export default function AboutUs() {
    return (
        <>
            <h1>Quem somos de verdade</h1>
            <p>Daysi</p>
            <p>José</p>

            <Link href="/">
                <button className="bg-slate-50 w-fit rounded-md p-2 h-10">
                    ir para tela inicial
                </button>
            </Link>
        </>
    )
}