import React, { useState } from "react";
import { defaultServices } from "../../../const";
import classes from "./Services.module.scss";
import clsx from "clsx";
import { Button, Card, Typography } from "antd";
import ServiceModal from "./ServiceModal";
import { ServiceItem } from "../../../main";

const Services: React.FC = () => {
  const ls = localStorage.getItem("services");

  const [edit, setEdit] = useState<ServiceItem>();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    (ls ? JSON.parse(ls) : defaultServices) as ServiceItem[]
  );

  function closeHandler() {
    setEdit(undefined);
    setOpen(false);
  }

  function save(data: ServiceItem) {
    if (!edit) {
      const newData = [data, ...items];
      localStorage.setItem("services", JSON.stringify(newData));
      setItems([...newData]);
    } else {
      const newData = [data, ...items.filter((e) => e.key !== data.key)];
      localStorage.setItem("services", JSON.stringify(newData));
      setItems([...newData]);
    }

    closeHandler();
  }

  function deleteItem(id: string) {
    const newData = [...items.filter((e) => e.key !== id)];
    localStorage.setItem("services", JSON.stringify(newData));
    setItems([...newData]);
  }

  return (
    <div>
      <div className="" onClick={() => setOpen(true)}>
        <Button>Добавить услугу</Button>
      </div>
      <div className={clsx("row mt-5", classes.row)}>
        {items.map((i) => (
          <div className="col-4" key={i.key}>
            <Card title={i.label} style={{ height: "100%" }}>
              <div className="mb-2">
                <Typography.Paragraph>{i.text}</Typography.Paragraph>
              </div>
              <Typography.Paragraph style={{ fontSize: 20 }} strong>
                {i.price.toLocaleString()} ₽
              </Typography.Paragraph>
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

export default Services;
