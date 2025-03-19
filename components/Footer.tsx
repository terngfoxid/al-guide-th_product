export default function Footer() {
  function clearData() {
    const mode = localStorage.getItem("Mode");
    localStorage.clear();
    localStorage.setItem("Mode", mode ?? "light");
    window.location.reload();
  }

  return (
    <div id="footer" className="absolute bottom-0 w-full">
      <footer className="py-3 shadow-xl bg-neutral-300 dark:bg-neutral-800">
        <div className="flex flex-col my-1 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-lg font-bold">© 2022 Azur Lane Guide TH</span>
          <span className="text-xs italic">Made by SSTfoxide</span>
        </div>
      </footer>
    </div>
  );
}
