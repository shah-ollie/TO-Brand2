import { useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/Context";

import TalentOllieLogo from "../Common/TalentOllieLogo";
import Nav from "./Nav";
import SmallNav from "./SmallNav";

const PopupMobileMenu = () => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme } =
    useAppContext();

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setActiveMobileMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMobileMenu]);

  return (
    <>
      <div className={`popup-mobile-menu ${activeMobileMenu ? "" : "active"}`}>
        <div
          className="bg"
          onClick={() => setActiveMobileMenu(!activeMobileMenu)}
        ></div>
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <TalentOllieLogo width={150} height={25} priority={true} />
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fa-sharp fa-regular fa-x"></i>
              </button>
            </div>
          </div>
          <div className="content">
            <Nav />

            <div className="rbt-sm-separator"></div>
            <div className="rbt-default-sidebar-wrapper">
              <SmallNav />
            </div>
          </div>
          <div className="header-btn d-block d-md-none">
            <Link
              className="btn-default"
              target="_blank"
              href="/text-generator"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupMobileMenu;
