import React from "react";
import { Collapse, CollapseProps, Typography } from "antd";

const FAQ: React.FC = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Как выбрать подходящего блогера для рекламы?",
      children: (
        <Typography.Text>
          Выберите блогера по тематике, целевой аудитории и стилю контента.
          Также обратите внимание на предыдущие рекламные кампании, их
          результаты и отзывы других брендов
        </Typography.Text>
      ),
    },
    {
      key: "2",
      label: "Какова стоимость размещения рекламы у блогеров?",
      children: (
        <Typography.Text>
          Стоимость варьируется в зависимости от популярности блогера, формата
          рекламы и его охвата. Мы предоставим актуальные расценки и варианты
          сотрудничества
        </Typography.Text>
      ),
    },
    {
      key: "3",
      label: "Как быстро можно получить отчеты об эффективности кампании?",
      children: (
        <Typography.Text>
          Обычно отчеты предоставляются в течение 7-14 дней после окончания
          рекламной кампании. Мы обеспечиваем прозрачность и оперативность в
          отчетности
        </Typography.Text>
      ),
    },
    {
      key: "4",
      label: "Как выбрать платформу для размещения рекламы?",
      children: (
        <Typography.Text>
          Мы поможем выбрать платформу исходя из анализа вашей целевой аудитории
          и предпочтений выбранного блогера. Основные платформы включают
          Instagram, YouTube и TikTok
        </Typography.Text>
      ),
    },
    {
      key: "5",
      label: "Как обеспечить надежность сотрудничества с блогерами?",
      children: (
        <Typography.Text>
          Рекомендуем проверять репутацию блогеров через отзывы, кейсы и
          сотрудничество с другими брендами. Также важно устанавливать четкие
          условия контракта и ожиданий
        </Typography.Text>
      ),
    },
  ];

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
