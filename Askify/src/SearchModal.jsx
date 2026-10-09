import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'

function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const triggerRef = useRef(null)
  const inputRef = useRef(null)

  const openSearch = () => {
    setIsClosing(false)
    setIsMounted(true)
    setIsOpen(true)
  }

  const closeSearch = () => {
    setIsOpen(false)
    setIsClosing(true)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const returnFocus = triggerRef.current
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeSearch()
    }

    document.addEventListener('keydown', handleKeyDown)
    inputRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      returnFocus?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isClosing) return undefined

    const timeoutId = window.setTimeout(() => {
      setIsMounted(false)
      setIsClosing(false)
    }, 240)

    return () => window.clearTimeout(timeoutId)
  }, [isClosing])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="button-hide search-trigger"
        aria-label="Open search"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openSearch}
      >
        <img src="https://img.icons8.com/ios7/512/search--v3.png" className="top-ui chat" alt="" />
        <span>Search</span>
      </button>
      {isMounted && createPortal(
        <div
          className={`search-modal-backdrop${isClosing ? ' is-closing' : ''}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeSearch()
          }}
        >
          <section
            className={`search-modal${isClosing ? ' is-closing' : ''}`}
            role="dialog"
            aria-modal={!isClosing}
            aria-hidden={isClosing}
            aria-labelledby="search-modal-title"
          >
            <button
              type="button"
              className="search-modal-close"
              aria-label="Close search"
              onClick={closeSearch}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 id="search-modal-title">Search Askify</h2>
            <div className="search-modal-bar" role="search">
              <img src="https://img.icons8.com/ios7/512/search--v3.png" alt="" />
              <input
                ref={inputRef}
                type="search"
                placeholder="Search posts, notes, and people"
                aria-label="Search Askify"
              />
            </div>
          </section>
        </div>,
        document.body,
      )}
    </>
  )
}

export default SearchModal