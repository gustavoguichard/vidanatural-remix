import * as React from 'react'

import { calculatePostReadTime, timeSince } from '~/lib/domain'

const DocumentDetails = ({ prepend, author, post, date, ...props }: any) => (
  <div className="text-sm" {...props}>
    <em className="text-xs">
      {prepend && `${prepend} `}
      há {timeSince(date)} · {calculatePostReadTime(post)} de leitura
    </em>
  </div>
)

export default React.memo(DocumentDetails)
