'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.32, 0.72, 0, 1] as const

const PRINT_RESET = 'print:!opacity-100 print:!transform-none'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={[className, PRINT_RESET].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.7, ease, delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={[className, PRINT_RESET].filter(Boolean).join(' ')}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.55, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
