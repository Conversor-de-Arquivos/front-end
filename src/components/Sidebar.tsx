interface SideBarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SideBarProps) {
  return (
    <aside className="flex flex-col gap-10 h-screen w-1/6 rounded-tr-2xl bg-linear-to-tr from-stone-700 to-stone-900">
      {children}
    </aside>
  );
}
