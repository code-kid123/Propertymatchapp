import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const PropertiesClient = dynamic(() => import("./PropertiesClient"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-7xl px-4 py-16 text-center text-sm text-ink-700">
      Loading properties...
    </div>
  ),
});

export default function PropertiesPage() {
  return <PropertiesClient />;
}
