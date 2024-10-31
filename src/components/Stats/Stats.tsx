import React from 'react';
import { Typography } from 'antd';

const Stats: React.FC = () => {
  return (
    <div className="row">
      <div className="col-4">
        <Typography.Title level={1}>1500+</Typography.Title>
        <Typography.Text>блогеров</Typography.Text>
      </div>
      <div className="col-4">
        <Typography.Title level={1}>300+</Typography.Title>
        <Typography.Text>успешных кампаний</Typography.Text>
      </div>
      <div className="col-4">
        <Typography.Title level={1}>95%</Typography.Title>
        <Typography.Text>довольных клиентов</Typography.Text>
      </div>
    </div>
  );
};

export default Stats;
