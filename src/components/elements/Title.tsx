import { clsx } from "clsx";

interface TitleProps {
  content: string;
  titleLevel: number;
}

export default function Title({ content, titleLevel }: TitleProps) {
  const titleClass = clsx("font-family-young-serif", {
    "text-stone-900 text-4xl": titleLevel === 1,
    "color-brown-800 text-2xl text-brown-800": titleLevel === 2,
  });
  return <h1 className={titleClass}>{content}</h1>;
}
