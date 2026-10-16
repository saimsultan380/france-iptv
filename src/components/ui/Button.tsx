import Link from "next/link";
import { cn } from "@/lib/cn";

/** France pair: blue (trust) + red (action). */
type Variant =
  | "primary"
  | "accent"
  | "outline"
  | "outlineBlue"
  | "ghost"
  | "inverse"
  | "outlineLight";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "border-2 border-[#00235c] bg-[#00235c] hover:bg-[#001a45] hover:border-[#001a45] shadow-[0_6px_18px_rgba(0,0,0,.12)]",
  accent:
    "border-2 border-[#ed1c24] bg-[#ed1c24] hover:bg-[#c91820] hover:border-[#c91820] shadow-[0_6px_18px_rgba(237,28,36,.22)]",
  outline:
    "border-2 border-[#ed1c24] bg-transparent !text-[#ed1c24] hover:bg-[#ed1c24] hover:!text-white",
  outlineBlue:
    "border-2 border-[#00235c] bg-transparent !text-[#00235c] hover:bg-[#00235c] hover:!text-white",
  outlineLight:
    "border-2 border-white bg-transparent !text-white hover:bg-white hover:!text-[#00235c]",
  ghost: "border-2 border-transparent bg-transparent !text-[#5c6b86] hover:!text-[#0b1b3a]",
  inverse:
    "border-2 border-white bg-white shadow-[0_8px_24px_rgba(0,0,0,.2)] hover:bg-[#f4f6fb]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-3 text-sm gap-1.5 sm:px-4 sm:gap-2",
  md: "h-11 px-4 text-sm gap-2 sm:px-5 sm:gap-2.5",
  lg: "h-12 px-4 text-sm gap-2 sm:h-14 sm:px-6 sm:text-[15px] sm:gap-2.5",
};

const solidColor: Partial<Record<Variant, string>> = {
  primary: "#ffffff",
  accent: "#ffffff",
  inverse: "#00235c",
};

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    icon,
    ...rest
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center rounded-md font-semibold tracking-tight transition-colors duration-200",
    "active:scale-[0.99] disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const style =
    solidColor[variant] !== undefined
      ? ({ color: solidColor[variant] } as React.CSSProperties)
      : undefined;

  const content = (
    <>
      {icon}
      <span className="leading-none" style={{ color: "inherit" }}>
        {children}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
        style={style}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} style={style} {...buttonProps}>
      {content}
    </button>
  );
}
