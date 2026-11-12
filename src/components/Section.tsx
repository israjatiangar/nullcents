export default function ({ children, idValue = "", className = "" }) {
  return (
    <section id={idValue} className={`${className} flex scroll-p-10 flex-col`}>
      {children}
    </section>
  );
}
