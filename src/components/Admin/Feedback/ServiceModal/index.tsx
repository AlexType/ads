import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { FeedbackItem } from "../../../../const";

type Props = {
  data?: FeedbackItem;
  onClose: () => void;
  onSave: (data: FeedbackItem) => void;
};

const ServiceModal: React.FC<Props> = ({ data, onClose, onSave }) => {
  const [t, setT] = useState(data?.label || "");
  const [d, setD] = useState(data?.text || "");

  const handleOk = () => {
    if (!t) {
      message.error("Название обязательно для заполнения");
      return;
    }
    if (!d) {
      message.error("Описание обязательно для заполнения");
      return;
    }

    onSave({ key: crypto.randomUUID(), label: t, text: d, rating: 10 });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      open
      title={data ? "Редактирование отзыва" : "Добавление отзыва"}
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
          placeholder="Отзыв"
          value={d}
          onChange={(e) => setD(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default ServiceModal;
