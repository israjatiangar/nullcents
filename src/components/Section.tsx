export default function ({ children, idValue, classes = "" }) {
  return (
    <section id={idValue} className={`${classes} flex flex-col`}>
      {children}
    </section>
  );
}
