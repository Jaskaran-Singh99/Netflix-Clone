import React from 'react'

export const NotAvailable = () => {
  const notAvailable = {
    textAlign:'center',
    marginTop:'8rem'
  }
  return (
    <h1 style={notAvailable}>Movies not available for the given genre</h1>
  )
}
