import logoAsset from "@/assets/logo111.png";

type Props = {
  /** Approximate display height in pixels. Width scales with the logo's aspect ratio. */
  height?: number;
  className?: string;
};

/**
 * Golden Sage Roofing brand logo.
 */
export function Logo({ height = 80, className }: Props) {
  return (
    <img
      src={logoAsset}
      alt="Golden Sage Roofing"
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
