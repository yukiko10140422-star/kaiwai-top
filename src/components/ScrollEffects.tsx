"use client";

import { useScrollProgress, useScrollReveal } from "@/hooks/useScrollReveal";

export default function ScrollEffects() {
  useScrollProgress();
  useScrollReveal();
  return null;
}
