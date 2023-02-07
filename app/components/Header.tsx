import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div>
                <Link href="/">
                    {/* <Image
                        className="rounded-full"
                        src="https://commons.wikimedia.org/wiki/File:SupremeCourtBuilding-Singapore-20070210.jpg#/media/File:SupremeCourtBuilding-Singapore-20070210.jpg"
                        alt="building"
                        width={50}
                        height={50}
                    /> */}
                    click here to go home
                </Link>
            </div>

            <div></div>
        </header>
    )
}

export default Header;