import React from 'react'

export const Title = ({title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
    <h1 className={`text-4xl md:test-[40px] ${font || "font=playfair"}`}>{title}</h1>
    <div className='text-sm md:test-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</div>
    </div>
  )
}
