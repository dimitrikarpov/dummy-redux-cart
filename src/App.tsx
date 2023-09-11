import { useEffect, useRef } from "react"
import { fetchProducts } from "./store/products-slice"
import { useAppDispatch } from "./store/store"

function App() {
  const dispatch = useAppDispatch()
  const abortRef = useRef<AbortController>()

  useEffect(() => {
    abortRef.current = new AbortController()
    dispatch(fetchProducts({ signal: abortRef.current.signal }))

    return () => abortRef.current?.abort()
  }, [dispatch])

  return <></>
}

export default App
