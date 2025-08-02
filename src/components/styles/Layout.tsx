export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col px-6 gap-3 text-stone-900">{children}</div>
  );
}
