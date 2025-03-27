import React, { useState } from "react";
import {
  CrownOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout as L2, Menu } from "antd";
import Services from "../Services";
import Feedback from "../Feedback";
import Faq from "../Faq";
import Applications from "../Applications";
import { useNavigate } from "react-router-dom";
const { Content, Sider } = L2;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Управление услугами", "1", <CrownOutlined />),
  getItem("Управление отзывами", "2", <MessageOutlined />),
  getItem("Управление FAQ", "3", <QuestionCircleOutlined />),
  getItem("вернуться", "4", <RollbackOutlined />),
];

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const content = {
    1: <Services />,
    2: <Feedback />,
    3: <Faq />,
    4: <Applications />,
  };

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "4") {
      navigate("/");
      return;
    }

    setCurrent(e.key);
  };

  return (
    <L2 style={{ minHeight: "100vh" }}>
      <Sider
        width={300}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
      <L2>
        <Content style={{ margin: "16px" }}>
          {content[current as keyof object]}
        </Content>
      </L2>
    </L2>
  );
};

export default Layout;
