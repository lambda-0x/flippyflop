import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  color?: string
}

const Dialog = ({ isOpen, onClose, children, color = '#ffffff' }: DialogProps) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center overflow-hidden'>
          <motion.div
            key='backdrop'
            className='absolute inset-0 bg-black bg-opacity-60'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              pointerEvents: 'auto',
              cursor: 'auto',
            }}
            onClick={onClose}
          />
          <motion.div
            key='dialog'
            className='relative w-screen h-screen max-h-[100dvh] md:h-min md:w-[90vw] md:max-w-2xl overflow-auto rounded-none md:rounded-lg px-4 pb-4 pt-20 md:pt-4 text-white backdrop-blur bg-black/60 transition-all duration-300'
            style={{
              border: `1px solid ${color}`,
              boxShadow: `0px 0px 5px 0px ${color}`,
              pointerEvents: 'auto',
              cursor: 'auto',
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Dialog
