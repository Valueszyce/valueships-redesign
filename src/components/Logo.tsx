import Image from "next/image";

type Props = {
  /** When true, applies a filter to render the logo all-white for dark backgrounds. */
  invert?: boolean;
  className?: string;
  /** Display height in px. Width scales 2:1 from the source 400×200 file. */
  height?: number;
};

/**
 * Valueships brand logo — uses the official PNG file at /public/VS_logo.png.
 * On dark surfaces (invert=true) we apply `brightness(0) invert(1)` so the dark
 * wordmark stays legible. If you want the pink arrow preserved on dark backgrounds,
 * supply a white-on-transparent variant and we'll switch to a swap-by-source approach.
 */
export default function Logo({ invert = false, className = "", height = 32 }: Props) {
  const width = Math.round((height * 400) / 200);
  return (
    <Image
      src="/VS_logo.png"
      alt="Valueships"
      width={width}
      height={height}
      priority
      className={className}
      style={{
        height,
        width: "auto",
        filter: invert ? "brightness(0) invert(1)" : undefined,
      }}
    />
  );
}
