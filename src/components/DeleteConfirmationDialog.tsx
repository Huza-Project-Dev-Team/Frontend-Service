
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Trash2, X } from "lucide-react";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
}

export function DeleteConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  message = "Are you certain you wish to proceed with the deletion of the selected entry?",
  confirmText = "Confirm"
}: DeleteConfirmationDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#09111E] border border-gray-700">
        <DialogHeader className="border-b border-gray-700 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trash2 className="h-5 w-5 text-red-500" />
              <DialogTitle className="text-white">{title}</DialogTitle>
            </div>
          
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-gray-300 text-sm">{message}</p>
        </div>
        
        <div className="flex justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          >
            {confirmText}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}