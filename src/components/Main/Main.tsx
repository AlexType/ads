import React from "react";
import { Typography } from "antd";

import classes from "./Main.module.scss";

const Main: React.FC = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className="mb-4">
          <Typography.Paragraph
            className="text-center"
            style={{ fontSize: 16, color: "#8f8f8f" }}
          >
            Агрегатор поиска блогеров для рекламы
          </Typography.Paragraph>
        </div>
        <Typography.Title
          level={2}
          className="text-center"
          style={{ margin: 0 }}
        >
          Агрегатор
        </Typography.Title>
        <div className="mt-3">
          <Typography.Paragraph
            strong
            style={{ fontSize: 20 }}
            className="text-center"
          >
            Находим идеальных блогеров для вашей рекламы!
            <br />
            Максимально упростим процесс сотрудничества с инфлюенсерами и
            увеличим вашу аудиторию.
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Main;
