import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

*:focus{
    outline:0;
}

html,body,#root{
    height:100%
}

body,input,button{
    font: 14px sans-serif;
}

a{
    list-style:none;
}


ul{
    list-style:none;
}

button{
    cursor: pointer;
}
`