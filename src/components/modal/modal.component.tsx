'use client'

import { FC, ReactNode } from "react";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

interface IProps {
  title: string;
  descripcion: string;
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactNode;
}

const ModalComponent: FC<IProps> = ({
  descripcion,
  title,
  children,
  isOpen,
  onOpenChange,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onOpenChange();
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {title}
              <p className="text-sm font-normal text-gray-500">{descripcion}</p>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ModalComponent;
