import React from 'react'

export default function PrepTime({prepTime}) {
    const { total, preparation, cooking } = prepTime
  return (
    <div>
        <h3>Preparation Time</h3>
        <ul>
            <li>Total: {total}</li>
            <li>Preparation: {preparation}</li>
            <li>Cooking: {cooking}</li>
        </ul>
    </div>
  )
}
