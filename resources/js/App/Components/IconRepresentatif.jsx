import React from 'react'

export default function IconRepresentatif({value}) {

    const iconState = {
        T: 'uil uil-check-circle fs-2 text-primary',
        F: 'uil uil-times-circle fs-2 text-danger',
        1: 'uil uil-times-circle fs-2 text-danger',
        0: 'uil uil-hourglass fs-2 text-warning',
        2: 'uil uil-check-circle fs-2 text-success',
        3: 'uil uil-times-circle fs-2 text-danger'
    }

  return (
    <i className={iconState[value]}></i>

  )
}


