import React from 'react';
import { Collapse } from '@powerfulyang/components';
import '@powerfulyang/components/dist/es/index.css';

export const CollapseExample = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <button type="button" onClick={handleToggle}>
        toggle
      </button>
      <Collapse className="bg-gray-400" isOpen={show}>
        Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to
        tell browsers to give a web application running at one origin, access to selected resources
        from a different origin. A web application executes a cross-origin HTTP request when it
        requests a resource that has a different origin (domain, protocol, or port) from its own.
      </Collapse>
    </>
  );
};
export default {
  title: 'CollapseExample',
  component: CollapseExample,
};
