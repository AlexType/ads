import { Button, Card, Typography } from "antd";
import React, { useState } from "react";
import { defaultFeedback, FeedbackItem } from "../../../const";
import classes from "./Services.module.scss";
import clsx from "clsx";
import ServiceModal from "./ServiceModal";

const Feedback: React.FC = () => {
  const ls = localStorage.getItem("feedback");

  const [edit, setEdit] = useState<FeedbackItem>();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    (ls ? JSON.parse(ls) : defaultFeedback) as FeedbackItem[]
  );

  function closeHandler() {
    setEdit(undefined);
    setOpen(false);
  }

  function deleteItem(id: string) {
    const newData = [...items.filter((e) => e.key !== id)];
    localStorage.setItem("feedback", JSON.stringify(newData));
    setItems([...newData]);
  }

  function save(data: FeedbackItem) {
    if (!edit) {
      const newData = [data, ...items];
      localStorage.setItem("feedback", JSON.stringify(newData));
      setItems([...newData]);
    } else {
      const newData = [data, ...items.filter((e) => e.key !== data.key)];
      localStorage.setItem("feedback", JSON.stringify(newData));
      setItems([...newData]);
    }

    closeHandler();
  }

  return (
    <div>
      <div className="" onClick={() => setOpen(true)}>
        <Button>Добавить Отзыв</Button>
      </div>
      <div className={clsx("row mt-5", classes.row)}>
        {items.map((i) => (
          <div className="col-4" key={i.key}>
            <Card title={i.label} style={{ height: "100%" }}>
              <div className="mb-2">
                <Typography.Paragraph>{i.text}</Typography.Paragraph>
              </div>
              <div
                style={{
                  gap: 20,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="dashed"
                  className="mt-4"
                  onClick={() => deleteItem(i.key)}
                >
                  Удалить
                </Button>
                <Button
                  type="primary"
                  className="mt-4"
                  onClick={() => setEdit(i)}
                >
                  Редактировать
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      {(open || edit) && (
        <ServiceModal data={edit} onClose={closeHandler} onSave={save} />
      )}
    </div>
  );
};

export default Feedback;
