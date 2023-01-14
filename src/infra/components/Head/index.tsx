import React from 'react'
import PropTypes from 'prop-types'
import NextHead from 'next/head'
interface TitleProp {
    title: string
}
export default function Head({title}: TitleProp) {

    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    )
}

Head.propTypes = {
    title: PropTypes.string.isRequired
}

