import * as React from 'react';

<React.StrictMode />; // success

<React.StrictMode></React.StrictMode>; // success

<React.StrictMode><div /></React.StrictMode>; // success

<React.StrictMode>hi</React.StrictMode>; // success

<React.StrictMode><span>hi</span><div>bye</div></React.StrictMode>; // success

<React.StrictMode // a comment
/* another comment */
>hi</React.StrictMode>; // success
