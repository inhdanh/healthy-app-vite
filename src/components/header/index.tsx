import { useEffect, useRef, useState } from "react";
import logo from "@/assets/icons/logo.svg";
import iconMemo from "@/assets/icons/icon_memo.svg";
import iconChallenge from "@/assets/icons/icon_challenge.svg";
import iconInfo from "@/assets/icons/icon_info.svg";
import iconMenu from "@/assets/icons/icon_menu.svg";
import iconClose from "@/assets/icons/icon_close.svg";
import Icon from "@components/icon";
import { useNavigate } from "react-router-dom";

const LIST_MENU = [
  { name: "自分の記録", path: "/my-record" },
  { name: "体重グラフ", path: "/" },
  { name: "目標", path: "/" },
  { name: "選択中のコース", path: "/" },
  { name: "コラム一覧", path: "/column-list" },
  { name: "設定", path: "/" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const navigate = useNavigate();

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="h-16 w-full px-5 md:px-10 lg:px-20 sticky bg-dark/500/text flex items-center justify-between top-0 z-50">
      <button onClick={() => handleNavigate("/")}>
        <img src={logo} className="" alt="logo" />
      </button>
      <div className="flex gap-6">
        <button className="flex items-center p-2 gap-2">
          <Icon src={iconMemo} />
          <span className="text-base text-light hidden sm:inline">
            自分の記録
          </span>
        </button>
        <button className="flex items-center p-2 gap-2">
          <Icon src={iconChallenge} />
          <span className="text-base text-light hidden sm:inline">
            チャレンジ
          </span>
        </button>
        <button className="flex items-center p-2 gap-2">
          <Icon src={iconInfo} count={1} />
          <span className="text-base text-light hidden sm:inline">
            お知らせ
          </span>
        </button>
      </div>
      <div className="relative">
        <button onClick={handleToggleOpen} className="ml-4">
          <Icon src={iconMenu} />
        </button>
        {isOpen && (
          <>
            <button
              className="right-0 absolute top-0 bg-dark/500/text"
              onClick={handleToggleOpen}
            >
              <Icon src={iconClose} />
            </button>

            <ul ref={menuRef} className="absolute top-10 right-0">
              {LIST_MENU.map((item, index) => (
                <li
                  className="border-b bg-gray/400 border-b-chart border-t border-t-light border-opacity-20 px-8 py-6 min-w-[280px] cursor-pointer hover:bg-dark/500/text text-lg font-light text-light"
                  key={index}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
