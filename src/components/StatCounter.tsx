"use client";

import { useCountUp } from "@/lib/useCountUp";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: (v: number) => string;
};

export default function StatCounter({ to, prefix = "", suffix = "", decimals = 0, format }: Props) {
  const { ref, value } = useCountUp(to);
  const display = format
    ? format(value)
    : `${prefix}${value.toFixed(decimals)}${suffix}`;
  return <span ref={ref}>{display}</span>;
}
