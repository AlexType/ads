import React, { useState } from "react";
import { Button, InputNumber, message, Modal } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { ServiceItem } from "../../../../main";

type Props = {
  data?: ServiceItem;
  onClose: () => void;
  onSave: (data: ServiceItem) => void;
};

const ServiceModal: React.FC<Props> = ({ data, onClose, onSave }) => {
  const [t, setT] = useState(data?.label || "");
  const [d, setD] = useState(data?.text || "");
  const [p, setP] = useState(data?.price || 0);

  const handleOk = () => {
    if (!t) {
      message.error("Название обязательно для заполнения");
      return;
    }
    if (!d) {
      message.error("Описание обязательно для заполнения");
      return;
    }
    if (!p) {
      message.error("Стоимость обязательно для заполнения");
      return;
    }

    onSave({ key: crypto.randomUUID(), label: t, price: p, text: d });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      open
      title={data ? "Редактирование услуги" : "Добавление услуги"}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {data ? "Обновить" : "Добавить"}
        </Button>,
      ]}
    >
      <div className="row row-column g-3">
        <Input
          required
          max={200}
          placeholder="Название"
          value={t}
          onChange={(e) => setT(e.target.value)}
        />
        <TextArea
          maxLength={400}
          placeholder="Описание"
          value={d}
          onChange={(e) => setD(e.target.value)}
        />
        <InputNumber
          min={100}
          max={100000}
          placeholder="Цена"
          value={p}
          onChange={(e) => setP(+(e || 0))}
        />
      </div>
    </Modal>
  );
};

export default ServiceModal;
