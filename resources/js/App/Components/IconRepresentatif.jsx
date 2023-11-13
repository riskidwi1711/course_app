import React from 'react'

export default function IconRepresentatif({value}) {

    const iconState = {
        T: 'uil uil-check-circle fs-2 text-primary',
        F: 'uil uil-times-circle fs-2 text-danger'
    }

  return (
    <i className={iconState[value]}></i>

  )
}
