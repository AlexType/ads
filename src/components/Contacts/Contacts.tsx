import React from "react";
import { Button, Input, Typography } from "antd";

const Contacts: React.FC = () => {
  const mail = "agr@mail.ru";

  return (
    <div className="row">
      <div className="col-6">
        <Typography.Title level={2}>Контакты</Typography.Title>
        <Typography.Link style={{ fontSize: 30 }} href={`mailto:${mail}`}>
          {mail}
        </Typography.Link>
      </div>
      <div className="col-6">
        <Typography.Title level={3}>
          Оставьте контакты, и мы свяжемся с вами в ближайшее время
        </Typography.Title>
        <div className="mt-2">
          <Typography.Link style={{ fontSize: 30 }} href={`mailto:${mail}`}>
            {mail}
          </Typography.Link>
        </div>
        <div className="mt-3">
          <Typography.Text strong>Ваше имя</Typography.Text>
          <Input size="large" placeholder="Имя" />
        </div>
        <div className="mt-2">
          <Typography.Text strong>Телефон</Typography.Text>
          <Input size="large" placeholder="(XXX) XXX XX XX" />
        </div>
        <div className="mt-2">
          <Typography.Text strong>Почта</Typography.Text>
          <Input size="large" placeholder="@mail.ru" />
        </div>
        <div className="mt-4">
          <Button type="primary">Отправить</Button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
