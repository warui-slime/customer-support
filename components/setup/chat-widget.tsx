"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Send } from "lucide-react"

interface ChatWidgetProps {
  color: string
  greeting: string
  placement: string
  showConfidence: boolean
}

export function ChatWidget({ color, greeting, placement, showConfidence }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const positionClass = placement === "bottom-left" ? "left-4 bottom-4" : "right-4 bottom-4"

  return (
    <div className="relative h-full">
      {/* Chat Button */}
      <Button
        className="absolute rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
        style={{ backgroundColor: color, [placement === "bottom-left" ? "left" : "right"]: "0", bottom: "0" }}
        onClick={toggleChat}
      >
        {isOpen ? <X className="h-6 w-6 " /> : <MessageSquare className="h-6 w-6 " />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="absolute bottom-20 w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
          style={{ [placement === "bottom-left" ? "left" : "right"]: "0" }}
        >
          {/* Header */}
          <div
            className="p-4  font-medium flex items-center justify-between"
            style={{ backgroundColor: color }}
          >
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Chat Support</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8  hover:bg-white/20 rounded-full"
              onClick={toggleChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 bg-gray-50 p-4 overflow-y-auto h-80">
            {/* Bot Message */}
            <div className="flex mb-4">
              <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">{greeting}</p>
                {showConfidence && <p className="text-xs text-gray-500 mt-1">I'm 98% sure I can help you!</p>}
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ focusRing: color }}
              />
              <button className="px-4 rounded-r-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Send className="h-4 w-4 " />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
