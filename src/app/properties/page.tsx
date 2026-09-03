"use client";

import dynamic from "next/dynamic";

const PropertiesClient = dynamic(
  () => import("./ClientProperties"),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center text-sm text-ink-700">
        Loading properties...
      </div>
    ),
  }
);

export default function PropertiesPage() {
  return <PropertiesClient />;
}
