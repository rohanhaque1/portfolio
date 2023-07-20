import { Outlet } from "react-router-dom";
import Name_Title from "../../components/Shared/Navigation/Name_Title/Name_Title";
import Container_box from "../../components/Shared/Container_box/Container_box";
import Nav_menu from "../../components/Shared/Navigation/Nav_menu/Nav_menu";

const Main = () => {
  return (
    <div>
      <Name_Title />
      <div className="flex gap-10">
        <Nav_menu />
        <Container_box>
          <Outlet />
        </Container_box>
      </div>
    </div>
  );
};

export default Main;
