"use client";

import { useScrollReveal, useScrollProgress } from "@/hooks/useScrollReveal";

export default function ScrollEffects() {
  useScrollReveal();
  useScrollProgress();
  return null;
}
