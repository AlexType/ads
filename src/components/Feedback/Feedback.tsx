import React from "react";
import { Card, Typography } from "antd";
import { defaultFeedback, FeedbackItem } from "../../const";
import clsx from "clsx";

import classes from "./Services.module.scss";
const Feedback: React.FC = () => {
  const ls = localStorage.getItem("feedback");

  const items = (ls ? JSON.parse(ls) : defaultFeedback) as FeedbackItem[];

  return (
    <div className="px-5">
      <Typography.Title level={2}>Отзывы</Typography.Title>
      <div className={clsx("row mt-4", classes.row)}>
        {items.map((i) => (
          <div style={{ width: 400 }} key={i.key}>
            <Card title={i.label} style={{ height: "100%" }}>
              <Typography.Text>{i.text}</Typography.Text>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
