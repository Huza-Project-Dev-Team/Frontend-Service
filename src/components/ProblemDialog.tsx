import * as React from "react"
import { File, FileText, Paperclip, CheckSquare } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

type Problem = {
  title: string
  sector: string
  organization: string
  abstract: string
  criteria: string[]
  attachments: { name: string; status?: string }[]
}

interface ProblemDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  problem: Problem
}

export function ProblemDialog({ open, onOpenChange, problem }: ProblemDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-[#09111E] text-white border-gray-700 w-[90vw]">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold">{problem.title}</DialogTitle>
            {/* <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button> */}
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-400">{problem.organization}</span>
            <span className="px-2.5 py-0.5 text-xs font-medium bg-green-800  text-green-500 rounded">
              {problem.sector}
            </span>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4 pr-2">
          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-400" />
              Abstract/Overview
            </h3>
            <p className="text-gray-300 text-sm">{problem.abstract}</p>
          </section>

          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <Paperclip className="h-4 w-4 text-blue-400" />
              Attachments
            </h3>
            <div className="space-y-2">
              {problem.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-[#0B1226] border border-[#AEB9E1] rounded-xl text-sm">
                 <div className="flex items-center gap-2">
                   <File size={12}/>
                  <span className="text-white text-xs">{file.name}</span>
                 </div>
                  {file.status && (
                    <span className="px-2 py-0.5 text-xs bg-green-900 text-green-300 rounded">
                      {file.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#0B1226] border border-[#AEB9E1] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-2 text-white flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-blue-400" />
              Evaluation criteria
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-300 text-sm">
              {problem.criteria.map((criterion, index) => (
                <li key={index}>{criterion}</li>
              ))}
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
