import React, { useReducer, useContext,useState, useEffect } from "react";
import { Breadcrumb } from 'antd';
import classNames from 'classnames';
import  './index.scss';


const BreadcrumbTitle = ({title = [],split}) => {
  // const [list, setList] = useState(null)
  // useEffect(() => {
  //   // setList(list)
  // }, []) 

  return (
      <Breadcrumb separator={split?split:'>' } style={{ marginBottom: 5}}>
        {title.map((e, index) => {
          const { name, href } = e;
          const classes = classNames('BreadcrumbFontStyles', {
            [`{BreadcrumbBold}`]: index === title.length - 1,
            [`{kpiBreadcrumb}`]: index !== title.length - 1,
          });
          return (
            <Breadcrumb.Item
              key={`breadcrumb_${name}`}
              className={classes}
            >
              {href ? <a href={`/#${href}`}>{name}</a> : <React.Fragment>{name}</React.Fragment>}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>

  );
};

export default BreadcrumbTitle;
