import React from "react";
import { Collapse, Typography } from "antd";
import { defaultFaq, FaqItem } from "../../const";

const FAQ: React.FC = () => {
  const ls = localStorage.getItem("faq");

  const items = (ls ? JSON.parse(ls) : defaultFaq) as FaqItem[];

  return (
    <div>
      <Typography.Title level={2} className="text-center">
        FAQ
      </Typography.Title>
      <Collapse className="mt-4" items={items} />
    </div>
  );
};

export default FAQ;
