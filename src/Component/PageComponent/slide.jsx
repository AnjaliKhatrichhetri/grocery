import React from 'react'

function Slide() {
  return (
    <div>
      
<input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" className="w-full h-2 bg-red-700 rounded-lg appearance-none cursor-pointer dark:bg-red-700"/>
<label for="steps-range" class="block mb-2 text-md font-bold text-g-900 pt-4 dark:text-red-700">$10 - $540</label>

    </div>
  )
}

export default Slide
