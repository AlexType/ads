/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, Typography } from "antd";

import classes from "./Services.module.scss";
import clsx from "clsx";
import { defaultServices } from "../../const";

const Services: React.FC = () => {
  const ls = localStorage.getItem("services");

  const items = ls ? JSON.parse(ls) : (defaultServices as any);

  return (
    <div className={clsx(classes.container, "p-5")}>
      <Typography.Title level={2} className="text-center">
        Услуги
      </Typography.Title>
      <div className={clsx("row mt-5", classes.row)}>
        {items.map((i: any) => (
          <div style={{ width: 400 }} key={i.key}>
            <Card title={i.label} style={{ height: "100%" }}>
              <div className="mb-2">
                <Typography.Paragraph>{i.text}</Typography.Paragraph>
              </div>
              <Typography.Paragraph style={{ fontSize: 20 }} strong>
                {i.price.toLocaleString()} ₽
              </Typography.Paragraph>
            </Card>
          </div>
        ))}
      </div>
      <img
        className={classes.svg}
        src="https://alextype.github.io/ads/img/service-bg.svg"
      />
    </div>
  );
};

export default Services;
