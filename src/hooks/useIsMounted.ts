import { useEffect, useRef } from "react"

export const useIsMounted = () => {
  const isMounted = useRef<boolean>()
  useEffect(() => {
    isMounted.current = true
    return () => { isMounted.current = false }
  }, [])

  return () :boolean => !!isMounted.current
}
