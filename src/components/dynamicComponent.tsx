import FormInterface from '@/interface/FormInterface';
import React, { ChangeEvent, ReactNode } from 'react';


interface DynamicInterface {
  element: FormInterface
  index: number
  setLeaveData: any
}

const DynamicComponent = ({ element, index, setLeaveData }: DynamicInterface) => {
  const inputTextArr = ['input', 'textarea', 'select']

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    setLeaveData((prevData: Record<string, string>) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const props = {
    ...element.props,
    key: index,
    onChange: inputTextArr.includes(element.tag) ? handleChange : undefined,
    htmlFor: element.tag === 'label' ? element.props.htmlFor : undefined
  };

  const children: ReactNode[] = (element.children || []).map((child, index) => {
    if (typeof(child) === 'object' && child !== null) {
      return React.createElement(child.tag, {...child.props, key: index}, child.children)
    } else {
      return child
    }
  });
  
  return React.createElement(
    element.tag,
    props,
    ...children
  );
};

export default DynamicComponent;
