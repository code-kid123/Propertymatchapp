import { Suspense } from "react";
import PropertiesClient from "./PropertiesClient";

export const dynamic = "force-dynamic";

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-center text-sm text-ink-700">
          Loading properties...
        </div>
      }
    >
      <PropertiesClient />
    </Suspense>
  );
}
