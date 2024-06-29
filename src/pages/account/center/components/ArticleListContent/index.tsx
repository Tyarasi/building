import { Avatar } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import useStyles from './index.style';
export type ApplicationsProps = {
  data: {
    description?: string;
    updatedAt?: any;
    logo?: string;
    owner?: string;
    href?: string;
  };
};
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: { description, updatedAt, logo, owner, href },
}) => {
  const { styles } = useStyles();
  return (
    <div>
      <div className={styles.description}>{description} :</div>
      <div className={styles.extra}>
        <Avatar src={logo} size="small" />
        <a href={href}>{owner}</a> Cek <a href={href}>{href}</a>
        <em></em>
      </div>
    </div>
  );
};
export default ArticleListContent;
