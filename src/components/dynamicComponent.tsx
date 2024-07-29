import FormInterface from '@/interface/FormInterface';
import React, { ChangeEvent } from 'react';


interface DynamicInterface {
  element: FormInterface
  setLeaveData: any
}

const DynamicComponent = ({ element, setLeaveData }: DynamicInterface) => {

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    setLeaveData((prevData: Record<string, string>) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  const props = {
    ...element.props,
    onChange: element.tag === 'input' ? handleChange : undefined,
    htmlFor: element.tag === 'label' ? element.props.htmlFor : undefined
  };

  return React.createElement(
    element.tag,
    props,
    ...(element.children || [])
  );
};

export default DynamicComponent;
