import React, { useState } from 'react';

export function ModeToggle() {

  const [mode] = useState("dark-light");

  return (
    <>
      <div onClick={() => document.body.classList.toggle('light-mode')} className={mode}>
        <svg viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
     </div>
    </>
  );
}