import React from 'react'


function Portfolio() {
  return (
    <div className='container mx-auto text-center'>
      <h1 class="text-5xl font-extrabol py-16  text-purple-500">Portfolio</h1>
      <div className='flex justify-center '>
      <img className='w-xl h-auto rounded-xl mx-5 mb-10' src='https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VydGlmaWNhdGV8ZW58MHx8MHx8fDA%3D'   />
      <br/>
      <img className='w-xl h-auto rounded-xl mx-0 mb-10' src='https://media.istockphoto.com/id/1904641522/photo/the-companys-product-quality-certificate-is-compliant-the-check-mark-symbol-represents-the.webp?b=1&s=170667a&w=0&k=20&c=RckumT_ijNP9lZhxDEBOQDZiWY_W76aNUxEBT1Oz8mo='   />
      </div>
    </div>
  )
}

export default Portfolio
