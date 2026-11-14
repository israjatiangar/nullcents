import type { ReactNode } from "react";

export default function ({
  children,
  idValue = "",
  className = "",
}: {
  children: ReactNode;
  idValue?: string;
  className?: string;
}) {
  return (
    <section id={idValue} className={`${className} flex scroll-p-10 flex-col`}>
      {children}
    </section>
  );
}
