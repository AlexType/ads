import React from "react";
import { Typography } from "antd";

import classes from "./Header.module.scss";
import clsx from "clsx";

const Header: React.FC = () => {
  function gotoSection(id: string) {
    const el = document.getElementById(id);

    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={classes.container}>
      <nav>
        <div className="row justify-content-center">
          <div
            className={clsx("col-auto", classes.item)}
            onClick={() => gotoSection("services")}
          >
            <Typography.Paragraph>Услуги</Typography.Paragraph>
          </div>
          <div
            className={clsx("col-auto", classes.item)}
            onClick={() => gotoSection("feedback")}
          >
            <Typography.Paragraph>Отзывы</Typography.Paragraph>
          </div>
          <div
            className={clsx("col-auto", classes.item)}
            onClick={() => gotoSection("contacts")}
          >
            <Typography.Paragraph>Контакты</Typography.Paragraph>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
