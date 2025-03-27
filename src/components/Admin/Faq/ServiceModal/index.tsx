import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { FaqItem } from "../../../../const";

type Props = {
  data?: FaqItem;
  onClose: () => void;
  onSave: (data: FaqItem) => void;
};

const ServiceModal: React.FC<Props> = ({ data, onClose, onSave }) => {
  const [t, setT] = useState(data?.label || "");
  const [d, setD] = useState(data?.children || "");

  const handleOk = () => {
    if (!t) {
      message.error("Название обязательно для заполнения");
      return;
    }
    if (!d) {
      message.error("Описание обязательно для заполнения");
      return;
    }

    onSave({ key: crypto.randomUUID(), label: t, children: d });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      open
      title={data ? "Редактирование faq" : "Добавление faq"}
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
      </div>
    </Modal>
  );
};

export default ServiceModal;
