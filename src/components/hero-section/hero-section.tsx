import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="">
            <h1 className="text-7xl md:text-9xl lg:text-[192px] pt-[0.75em] font-bold tracking-wide text-main-sky  pl-4 md:pl-[0.75em] mb-[-0.125em]">
                Hello &mdash;
            </h1>
            <div className="relative text-3xl md:text-5xl font-bold bg-main-sky  text-white dark:text-black md:pr-[2em] z-0">
                <Image
                    src={"/images/bg-drop.svg"}
                    alt="animated backgound"
                    fill={true}
                    className="-z-10"
                    priority={true}
                />
                <p className="p-[0.75em] pt-[1.5em] leading-relaxed md:max-w-6xl md:pl-[1em] lg:pl-[3em]">
                    Welcome to our world. We&apos;re Tech Vibe,{" "}
                    <span className="text-transparent font-outline-white dark:font-outline-black hover:text-white dark:hover:text-sky-300 hover:font-outline-none">
                        a creative digital agency.
                    </span>{" "}
                    We offer various types of digital services.
                </p>
                <p className="p-[0.75em] leading-relaxed md:max-w-6xl md:pl-[1em] lg:pl-[3em]">
                    We help{" "}
                    <Link href="/projects" className="md:text-transparent md:font-outline-white md:dark:font-outline-black md:hover:text-white md:dark:hover:text-sky-300 md:hover:font-outline-none">our clients
                    </Link>{" "}start, sustain, and grow their business.
                </p>
                <p className="p-[0.75em] leading-relaxed md:max-w-6xl md:pl-[1em] lg:pl-[3em]">
                    Whether you&apos;ve got a quick concept or want to run through the
                    details of your next big project, we can help. Let&apos;s chat now.
                </p>
            </div>
        </section>
    );
}
