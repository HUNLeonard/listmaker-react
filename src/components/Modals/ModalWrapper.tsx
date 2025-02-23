import React from "react";

interface WrapperProp {
  children: React.ReactNode;
  execute: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ModalWrapper = ({ children, execute }: WrapperProp) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray/30 backdrop-blur-sm z-10">
      <form
        onSubmit={execute}
        className="absolute top-12 left-1/2 p-4 *:text-black *:rounded-sm -translate-x-1/2 h-fit overflow-y-auto border-gray-light border-2 rounded-md shadow-xl bg-gray w-[min(90%,600px)] flex flex-col"
      >
        {children}
      </form>
    </div>
  );
};

export default ModalWrapper;
