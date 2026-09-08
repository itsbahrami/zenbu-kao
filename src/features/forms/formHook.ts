import { createFormHook } from '@tanstack/react-form'

import { fieldContext, formContext } from './formHookContexts'
import { MultiLineInput } from './MultiLineInput'
import { SimpleButtonSelect } from './SimpleButtonSelect'
import { SimpleResetBtn } from './SimpleResetBtn'
import { SimpleStyledSelect } from './SimpleStyledSelect'
import { SimpleSubmitBtn } from './SimpleSubmitBtn'
import { SingleLineInput } from './SingleLineInput'

export const { useAppForm } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    SingleLineInput,
    MultiLineInput,
    SimpleStyledSelect,
    SimpleButtonSelect,
  },
  formComponents: {
    SimpleSubmitBtn,
    SimpleResetBtn,
  },
})
