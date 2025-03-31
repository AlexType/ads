import React from "react";
import { Avatar, Card, Tag, Typography } from "antd";

import classes from "./Bloggers.module.scss";
import clsx from "clsx";
import { bloggers } from "../../const";

const Bloggers: React.FC = () => {
  return (
    <div className={clsx(classes.container, "p-5")}>
      <Typography.Title level={2} className="text-center">
        Блогерами с которыми мы работаем
      </Typography.Title>
      <div className={clsx("row mt-5", classes.row)}>
        {bloggers.map((blogger) => (
          <div style={{ width: 400 }} key={blogger.id}>
            <Card title={blogger.name} style={{ height: "100%" }}>
              <div className={classes.avatar}>
                <Avatar size={200} src={blogger.img} />
              </div>
              <Typography.Text>{blogger.description}</Typography.Text>
              <div style={{ marginTop: 30 }}>
                <Typography.Text style={{ fontWeight: 700 }}>
                  Комментарий
                </Typography.Text>
              </div>
              <div className={classes.testimonial}>{blogger.testimonial}</div>
              <div>
                Платформы:{" "}
                {blogger.platforms.map((p) => (
                  <Tag key={p} color="purple">
                    {p}
                  </Tag>
                ))}
              </div>
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

export default Bloggers;
