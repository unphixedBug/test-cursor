export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col px-6 gap-6 md:gap-9 text-stone-600 my-6 md:my-9 font-family-outfit">
      {children}
    </div>
  );
}
