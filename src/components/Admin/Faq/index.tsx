import { Button, Card, Typography } from "antd";
import React, { useState } from "react";
import { defaultFaq, FaqItem } from "../../../const";
import classes from "./Services.module.scss";
import clsx from "clsx";
import ServiceModal from "./ServiceModal";

const Faq: React.FC = () => {
  const ls = localStorage.getItem("faq");

  const [edit, setEdit] = useState<FaqItem>();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    (ls ? JSON.parse(ls) : defaultFaq) as FaqItem[]
  );

  function closeHandler() {
    setEdit(undefined);
    setOpen(false);
  }

  function deleteItem(id: string) {
    const newData = [...items.filter((e) => e.key !== id)];
    localStorage.setItem("faq", JSON.stringify(newData));
    setItems([...newData]);
  }

  function save(data: FaqItem) {
    if (!edit) {
      const newData = [data, ...items];
      localStorage.setItem("faq", JSON.stringify(newData));
      setItems([...newData]);
    } else {
      const newData = [data, ...items.filter((e) => e.key !== data.key)];
      localStorage.setItem("faq", JSON.stringify(newData));
      setItems([...newData]);
    }

    closeHandler();
  }

  return (
    <div>
      <div className="" onClick={() => setOpen(true)}>
        <Button>Добавить FAQ</Button>
      </div>
      <div className={clsx("row mt-5", classes.row)}>
        {items.map((i) => (
          <div className="col-4" key={i.key}>
            <Card title={i.label} style={{ height: "100%" }}>
              <div className="mb-2">
                <Typography.Paragraph>{i.children}</Typography.Paragraph>
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

export default Faq;
