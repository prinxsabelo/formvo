import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context";
import { ExclamationIcon } from '@heroicons/react/outline'
export default function DeleteModal(props) {
  const cancelButtonRef = useRef();
  const { closeModal, isOpen, confirmMessage, handleDelete } = useContext(
    Context
  );

  return (
    <>
      {isOpen && (
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            initialFocus={cancelButtonRef}
            static
            open={isOpen}
            onClose={closeModal}
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />

            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-800"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-800"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="bg-white inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl opacity-1">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium tracking-wider  text-black"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <Dialog.Description className="text-lg tracking-wider">
                    {confirmMessage}.
                  </Dialog.Description>
                  <div className="mt-4 flex space-x-4 justify-end px-4 inset-0 opacity-1">
                    <button
                      type="button"
                      className="underline tracking-wider confirm"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="inline-flex tracking-wider justify-center px-4 py-2 text-sm font-medium text-white bg-red-500
                             border border-transparent rounded-md "
                      onClick={() => alert('xxx')}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
