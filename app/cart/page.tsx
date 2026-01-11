'use client'
import { useEffect, useState } from 'react'

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
  }, [])

  function removeItem(index: number) {
    const updated = [...cart]
    updated.splice(index, 1)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main style={{
  padding: 40,
  background: '#f3f4f6',
  minHeight: '100vh',
  color: '#111'
}}>
      <h1>Your Cart</h1>

      {cart.map((item, i) => (
        <div key={i}  style={{
    background: '#fff',
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  }}
>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button
  onClick={() => removeItem(i)}
  style={{
    padding: '6px 10px',
    border: 'none',
    borderRadius: 6,
    background: '#e11d48',
    color: '#fff',
    cursor: 'pointer'
  }}
>
  Remove
</button>

        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </main>
  )
}
