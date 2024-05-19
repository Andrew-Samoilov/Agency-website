import Link from "next/link";

//maybe need change from "buttonText" to "children"

export default function ContactUsBtn({
  buttonText = "Contact\u00A0Us",
  subjectText,
  className,
}: Readonly<{ buttonText?: string, subjectText?: string, className?: string }>) {
  let hrefRes = '/contact';

  if (subjectText) {
    hrefRes = hrefRes + '?subject-text=' + subjectText;
  }

  return (
    <Link
      href={hrefRes}
      className={`border border-main-sky duration-300 font-semibold text-2xl md:text-m px-[1em] py-[0.5em] ${className}`}
    >
      <button>
        {buttonText}
      </button>
    </Link>
  );
}
