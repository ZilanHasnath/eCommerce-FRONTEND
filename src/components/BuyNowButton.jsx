import React from 'react'
import { useNavigate } from 'react-router-dom'

const BuyNowButton = ({ product }) => {

  const navigate = useNavigate()
  const userId = localStorage.getItem("userId")


  const handleBuyNow = () => {
    if (!userId) return alert("You must be logged in to buy products.")
    navigate(`/products/buy/${product.id}`)
  }

  return (
    <div className='flex flex-row justify-start mt-4'>

      <button onClick={handleBuyNow} className='bg-amber-300 px-4 py-2 rounded-[20px] hover:bg-amber-400 transition'>
        Buy Now
      </button>

    </div>
  )
}

export default BuyNowButton