import Image from "next/image";

export default function ImageItem(props: {
  alt: string;
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return <Image {...props} alt={props.alt} />;
}
