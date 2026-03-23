export default function MainMenu() {
  const menuItems = [
    { lbl: "About Me" },
    { lbl: "Projects" },
    { lbl: "Resume" },
  ];

  const defaultStyles = "border-primary text-secondary bg-background";
  const secondaryStyles = "border-foreground text-foreground";

  return (
    <div className="w-full fixed top-0 left-0 px-8 pt-4 font-primary font-light z-50">
      <ul className="flex gap-12">
        {menuItems.map((item, i) => {
          return (
            <li
              key={i}
              className={`text-xl border p-2 px-8 rounded-full shadow ${defaultStyles}`}
            >
              {item.lbl}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
// text-2xl border border-primary p-2 px-8 text-foreground bg-primary font-normal rounded-full
