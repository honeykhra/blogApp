import React, { useEffect, useState, useRef } from 'react'

const Comments = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const nameEl = useRef()
  const commentEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  return <div>Comments</div>
}

export default Comments
