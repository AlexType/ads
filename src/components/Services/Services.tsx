import React from 'react';
import { Card, Typography } from 'antd';

import classes from './Services.module.scss';
import clsx from 'clsx';

const Services: React.FC = () => {
  const items = [
    {
      key: '1',
      price: 10000,
      label: 'Агрегатор поиска блогеров для рекламы',
      text: 'Находим идеальных блогеров для вашей рекламной кампании',
    },
  ];

  return (
    <div className={clsx( classes.container, 'py-5')}>
      <Typography.Title level={2} className="text-center">
        Услуги
      </Typography.Title>
      <div className="row mt-5">
        {items.map((i) => (
          <div className="col-4" key={i.key}>
            <Card title={i.label}>
              <div className="mb-2">
                <Typography.Paragraph>{i.text}</Typography.Paragraph>
              </div>
              <Typography.Paragraph style={{ fontSize: 20 }} strong>
                {i.price.toLocaleString()} ₽
              </Typography.Paragraph>
            </Card>
          </div>
        ))}
      </div>
      <img className={classes.svg} src="https://alextype.github.io/ads/img/service-bg.svg" />
    </div>
  );
};

export default Services;
