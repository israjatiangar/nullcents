export default function ({ children, idValue }) {
  return (
    <section
      id={idValue}
      className="bg-base-200 border-base-300 flex flex-col border-b bg-repeat"
    >
      {children}
    </section>
  );
}
