import { useState } from 'react';//ok
export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);//ok

  function handleChange(e) {
    setValue(e.target.value);//ok//jo bhi user ne dabbe mai likha hai vo aa jyega value ke andar!!!!!!!
  }//ok

  return {
    value,//value return krdi
    onChange: handleChange,//func. return krdiya//ok
    dataitem:setValue
  };//ok
}
//ok
//ok
//ok