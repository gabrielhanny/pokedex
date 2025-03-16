import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/navbarSlice";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../Ui/Button";
import { Sun, Moon, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.navbar.theme);

  // ✅ Efek perubahan class saat theme berubah
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        PokeDex
      </Link>
      <Link to="/search" className="block px-4 py-2">
        Search
      </Link>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost">
            <Menu className="w-6 h-6" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content side="right" className="bg-white text-black p-2 rounded-md shadow-lg">
            <DropdownMenu.Item>
              <Link to="/mypokemon" className="block px-4 py-2">
                My Pokémon
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link to="/search" className="block px-4 py-2">
                Search
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <button onClick={() => dispatch(toggleTheme())} className="flex items-center gap-2 px-4 py-2 w-full">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} Toggle Theme
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
};

export default Navbar;
