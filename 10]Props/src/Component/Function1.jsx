import React, {useState} from 'react'
import Function2 from './Function2'

export default function Function1() {

    let data=[
        {
            "name": "jay",
            "city": "rajkot"
        },
        {
            "name": "raj",
            "city": "mavdi"
        },
        {
            "name": "harsh",
            "city": "kothariya"
        },
        {
            "name": "kamal",
            "city": "rajkot"
        },
        {
            "name": "abhi",
            "city": "rajkot"
        }
    ]

  return (
    <div>
        <h1>Function1</h1>
        <Function2 data={data}/>
    </div>
  )
}
