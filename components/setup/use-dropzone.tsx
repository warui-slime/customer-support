"use client"

import type React from "react"

import { useCallback, useState } from "react"

interface DropzoneOptions {
  onDrop: (acceptedFiles: File[]) => void
  maxSize?: number
  accept?: string
}

export function useDropzone(options: DropzoneOptions) {
  const [isDragActive, setIsDragActive] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      options.onDrop(acceptedFiles)
    },
    [options],
  )

  const getRootProps = useCallback(
    () => ({
      onDragEnter: (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragActive(true)
      },
      onDragOver: (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragActive(true)
      },
      onDragLeave: (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragActive(false)
      },
      onDrop: (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragActive(false)

        const files = Array.from(e.dataTransfer.files)
        onDrop(files)
      },
    }),
    [onDrop],
  )

  const getInputProps = useCallback(
    () => ({
      type: "file",
      multiple: true,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const files = Array.from(e.target.files)
          onDrop(files)
        }
      },
    }),
    [onDrop],
  )

  return {
    getRootProps,
    getInputProps,
    isDragActive,
  }
}
