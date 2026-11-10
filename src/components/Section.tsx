export default function ({ children, idValue, className = "" }) {
  return (
    <section
      id={idValue}
      className={`${className} my-6 flex scroll-p-10 flex-col`}
    >
      {children}
    </section>
  );
}
