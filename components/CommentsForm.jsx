import React, { useEffect, useState, useRef } from 'react'

const Comments = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const nameEl = useRef()
  const commentEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  return (
    <div className=" mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg ">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentsForm</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea></textarea>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
    </div>
  )
}

export default Comments
