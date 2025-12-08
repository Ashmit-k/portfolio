import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26";

const CustomToggle = () => {
  const { isDark, toggleTheme } = useThemeToggle({
    variant: "rectangle",
    start: "bottom-up",
  });

  return (
    <button
      onClick={toggleTheme}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      Toggle Theme
    </button>
  );
};
