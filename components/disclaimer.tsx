'use client';

import { useState } from 'react';

const Disclaimer = () => {
  const [show, setShow] = useState<boolean>(true);

  const close = () => {
    setShow(false);
  }

  if (!show) {
    return null;
  }
  return (
    <dialog className="w-full min-h-28 sm:min-h-24 flex z-50 bg-yellow-500 px-8 py-2 bg-opacity-80 backdrop-blur-lg" open>
      <section className="flex items-center justify-between w-full gap-8">
        <div className="flex flex-col">
          <h1 className="text-md font-bold">
            {`Disclaimer:`}
          </h1>
          <p className="text-sm font-medium">
            {`This site is an echo of the iPhone 14 page on Apple's website. It is not affiliated with Apple in any way.`}
          </p>
        </div>
        <button aria-label="close disclaimer" onClick={close} className="font-medium bg-gray-200 rounded-full px-4 py-2 bg-opacity-90">
          {`Close Disclaimer`}
        </button>
      </section>
    </dialog>
  )
}

export default Disclaimer;