"use client";

/// <reference types="webmcp-types" />

import { useEffect } from "react";

export default function WebMcpTools() {
  useEffect(() => {
    if (!document.modelContext) return;

    let active = true;
    let unregister: (() => void) | undefined;

    void import("@/lib/webmcp-tools")
      .then(({ registerWebMcpTools }) => {
        if (active) unregister = registerWebMcpTools();
      })
      .catch(() => undefined);

    return () => {
      active = false;
      unregister?.();
    };
  }, []);

  return null;
}
